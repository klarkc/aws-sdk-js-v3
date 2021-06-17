"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const events_1 = require("events");
const chunker_1 = require("./chunker");
const bytelength_1 = require("./bytelength");
const abort_controller_1 = require("@aws-sdk/abort-controller");
const MIN_PART_SIZE = 1024 * 1024 * 5;
class Upload extends events_1.EventEmitter {
    constructor(options) {
        super();
        /**
         * S3 multipart upload does not allow more than 10000 parts.
         */
        this.MAX_PARTS = 10000;
        // Defaults.
        this.queueSize = 4;
        this.partSize = MIN_PART_SIZE;
        this.leavePartsOnError = false;
        this.tags = [];
        this.concurrentUploaders = [];
        this.uploadedParts = [];
        // set defaults from options.
        this.queueSize = options.queueSize || this.queueSize;
        this.partSize = options.partSize || this.partSize;
        this.leavePartsOnError = options.leavePartsOnError || this.leavePartsOnError;
        this.tags = options.tags || this.tags;
        this.client = options.client;
        this.params = options.params;
        this.__validateInput();
        // set progress defaults
        this.totalBytes = bytelength_1.byteLength(this.params.Body);
        this.bytesUploadedSoFar = 0;
        this.abortController = new abort_controller_1.AbortController();
    }
    async abort() {
        /**
         * Abort stops all new uploads and immediately exists the top level promise on this.done()
         * Concurrent threads in flight clean up eventually.
         */
        this.abortController.abort();
    }
    async done() {
        return await Promise.race([this.__doMultipartUpload(), this.__abortTimeout(this.abortController.signal)]);
    }
    on(event, listener) {
        this.uploadEvent = event;
        super.on(event, listener);
    }
    async __doConcurrentUpload(dataFeeder) {
        for await (const dataPart of dataFeeder) {
            if (this.uploadedParts.length > this.MAX_PARTS) {
                throw new Error(`Exceeded ${this.MAX_PARTS} as part of the upload to ${this.params.Key} and ${this.params.Bucket}.`);
            }
            try {
                const partResult = await this.client.send(new client_s3_1.UploadPartCommand({
                    ...this.params,
                    UploadId: this.uploadId,
                    Body: dataPart.data,
                    PartNumber: dataPart.partNumber,
                }));
                if (this.abortController.signal.aborted) {
                    return;
                }
                this.uploadedParts.push({
                    PartNumber: dataPart.partNumber,
                    ETag: partResult.ETag,
                });
                this.bytesUploadedSoFar += bytelength_1.byteLength(dataPart.data);
                this.__notifyProgress({
                    loaded: this.bytesUploadedSoFar,
                    total: this.totalBytes,
                    part: dataPart.partNumber,
                    Key: this.params.Key,
                    Bucket: this.params.Bucket,
                });
            }
            catch (e) {
                // on leavePartsOnError throw an error so users can deal with it themselves,
                // otherwise swallow the error.
                if (this.leavePartsOnError) {
                    throw e;
                }
            }
        }
    }
    async __doMultipartUpload() {
        const createMultipartUploadResult = await this.client.send(new client_s3_1.CreateMultipartUploadCommand(this.params));
        this.uploadId = createMultipartUploadResult.UploadId;
        // Set up data input chunks.
        const dataFeeder = chunker_1.getChunk(this.params.Body, this.partSize);
        // Create and start concurrent uploads.
        for (let index = 0; index < this.queueSize; index++) {
            const currentUpload = this.__doConcurrentUpload(dataFeeder);
            this.concurrentUploaders.push(currentUpload);
        }
        // Create and start concurrent uploads.
        await Promise.all(this.concurrentUploaders);
        if (this.abortController.signal.aborted) {
            throw Object.assign(new Error("Upload aborted."), { name: "AbortError" });
        }
        this.uploadedParts.sort((a, b) => a.PartNumber - b.PartNumber);
        const completeMultipartUpload = await this.client.send(new client_s3_1.CompleteMultipartUploadCommand({
            ...this.params,
            UploadId: this.uploadId,
            MultipartUpload: {
                Parts: this.uploadedParts,
            },
        }));
        // Add tags to the object after it's completed the upload.
        if (this.tags.length) {
            await this.client.send(new client_s3_1.PutObjectTaggingCommand({
                ...this.params,
                Tagging: {
                    TagSet: this.tags,
                },
            }));
        }
        return completeMultipartUpload;
    }
    __notifyProgress(progress) {
        if (this.uploadEvent) {
            this.emit(this.uploadEvent, progress);
        }
    }
    async __abortTimeout(abortSignal) {
        return new Promise((resolve, reject) => {
            abortSignal.onabort = () => {
                const abortError = new Error("Upload aborted.");
                abortError.name = "AbortError";
                reject(abortError);
            };
        });
    }
    __validateInput() {
        if (!this.params) {
            throw new Error(`InputError: Upload requires params to be passed to upload.`);
        }
        if (!this.client) {
            throw new Error(`InputError: Upload requires a AWS client to do uploads with.`);
        }
        if (this.partSize < MIN_PART_SIZE) {
            throw new Error(`EntityTooSmall: Your proposed upload partsize [${this.partSize}] is smaller than the minimum allowed size [${MIN_PART_SIZE}] (5MB)`);
        }
        if (this.queueSize < 1) {
            throw new Error(`Queue size: Must have at least one uploading queue.`);
        }
    }
}
exports.Upload = Upload;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBsb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1VwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFTNEI7QUFDNUIsbUNBQXNDO0FBRXRDLHVDQUFxQztBQUNyQyw2Q0FBMEM7QUFDMUMsZ0VBQXlFO0FBT3pFLE1BQU0sYUFBYSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBRXRDLE1BQWEsTUFBTyxTQUFRLHFCQUFZO0lBNEJ0QyxZQUFZLE9BQWdCO1FBQzFCLEtBQUssRUFBRSxDQUFDO1FBNUJWOztXQUVHO1FBQ0ssY0FBUyxHQUFHLEtBQUssQ0FBQztRQUUxQixZQUFZO1FBQ0osY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGFBQVEsR0FBRyxhQUFhLENBQUM7UUFDekIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLFNBQUksR0FBVSxFQUFFLENBQUM7UUFXakIsd0JBQW1CLEdBQW9CLEVBQUUsQ0FBQztRQUUxQyxrQkFBYSxHQUFvQixFQUFFLENBQUM7UUFRMUMsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2xELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQzdFLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXRDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFFN0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLHVCQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxrQ0FBZSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLO1FBQ1Q7OztXQUdHO1FBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUk7UUFDUixPQUFPLE1BQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUcsQ0FBQztJQUVELEVBQUUsQ0FBQyxLQUEyQixFQUFFLFFBQXNDO1FBQ3BFLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxLQUFLLENBQUMsb0JBQW9CLENBQUMsVUFBd0Q7UUFDakYsSUFBSSxLQUFLLEVBQUUsTUFBTSxRQUFRLElBQUksVUFBVSxFQUFFO1lBQ3ZDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDOUMsTUFBTSxJQUFJLEtBQUssQ0FDYixZQUFZLElBQUksQ0FBQyxTQUFTLDZCQUE2QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUNwRyxDQUFDO2FBQ0g7WUFFRCxJQUFJO2dCQUNGLE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3ZDLElBQUksNkJBQWlCLENBQUM7b0JBQ3BCLEdBQUcsSUFBSSxDQUFDLE1BQU07b0JBQ2QsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO29CQUN2QixJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7b0JBQ25CLFVBQVUsRUFBRSxRQUFRLENBQUMsVUFBVTtpQkFDaEMsQ0FBQyxDQUNILENBQUM7Z0JBRUYsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7b0JBQ3ZDLE9BQU87aUJBQ1I7Z0JBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7b0JBQ3RCLFVBQVUsRUFBRSxRQUFRLENBQUMsVUFBVTtvQkFDL0IsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJO2lCQUN0QixDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLGtCQUFrQixJQUFJLHVCQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLENBQUMsZ0JBQWdCLENBQUM7b0JBQ3BCLE1BQU0sRUFBRSxJQUFJLENBQUMsa0JBQWtCO29CQUMvQixLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVU7b0JBQ3RCLElBQUksRUFBRSxRQUFRLENBQUMsVUFBVTtvQkFDekIsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRztvQkFDcEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTtpQkFDM0IsQ0FBQyxDQUFDO2FBQ0o7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDViw0RUFBNEU7Z0JBQzVFLCtCQUErQjtnQkFDL0IsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7b0JBQzFCLE1BQU0sQ0FBQyxDQUFDO2lCQUNUO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsbUJBQW1CO1FBQ3ZCLE1BQU0sMkJBQTJCLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLHdDQUE0QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzFHLElBQUksQ0FBQyxRQUFRLEdBQUcsMkJBQTJCLENBQUMsUUFBUSxDQUFDO1FBRXJELDRCQUE0QjtRQUM1QixNQUFNLFVBQVUsR0FBRyxrQkFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU3RCx1Q0FBdUM7UUFDdkMsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDbkQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDOUM7UUFFRCx1Q0FBdUM7UUFDdkMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzVDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7U0FDM0U7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFXLEdBQUcsQ0FBQyxDQUFDLFVBQVcsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sdUJBQXVCLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDcEQsSUFBSSwwQ0FBOEIsQ0FBQztZQUNqQyxHQUFHLElBQUksQ0FBQyxNQUFNO1lBQ2QsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWE7YUFDMUI7U0FDRixDQUFDLENBQ0gsQ0FBQztRQUVGLDBEQUEwRDtRQUMxRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3BCLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3BCLElBQUksbUNBQXVCLENBQUM7Z0JBQzFCLEdBQUcsSUFBSSxDQUFDLE1BQU07Z0JBQ2QsT0FBTyxFQUFFO29CQUNQLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSTtpQkFDbEI7YUFDRixDQUFDLENBQ0gsQ0FBQztTQUNIO1FBRUQsT0FBTyx1QkFBdUIsQ0FBQztJQUNqQyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsUUFBa0I7UUFDakMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQXdCO1FBQzNDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsV0FBVyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7Z0JBQ3pCLE1BQU0sVUFBVSxHQUFHLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ2hELFVBQVUsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO2dCQUMvQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsNERBQTRELENBQUMsQ0FBQztTQUMvRTtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsOERBQThELENBQUMsQ0FBQztTQUNqRjtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLEVBQUU7WUFDakMsTUFBTSxJQUFJLEtBQUssQ0FDYixrREFBa0QsSUFBSSxDQUFDLFFBQVEsK0NBQStDLGFBQWEsU0FBUyxDQUNySSxDQUFDO1NBQ0g7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztTQUN4RTtJQUNILENBQUM7Q0FDRjtBQTlMRCx3QkE4TEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wbGV0ZWRQYXJ0LFxuICBDb21wbGV0ZU11bHRpcGFydFVwbG9hZENvbW1hbmQsXG4gIENyZWF0ZU11bHRpcGFydFVwbG9hZENvbW1hbmQsXG4gIFB1dE9iamVjdENvbW1hbmRJbnB1dCxcbiAgUHV0T2JqZWN0VGFnZ2luZ0NvbW1hbmQsXG4gIFNlcnZpY2VPdXRwdXRUeXBlcyxcbiAgVGFnLFxuICBVcGxvYWRQYXJ0Q29tbWFuZCxcbn0gZnJvbSBcIkBhd3Mtc2RrL2NsaWVudC1zM1wiO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcImV2ZW50c1wiO1xuaW1wb3J0IHsgQm9keURhdGFUeXBlcywgT3B0aW9ucywgUHJvZ3Jlc3MsIFNlcnZpY2VDbGllbnRzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IGdldENodW5rIH0gZnJvbSBcIi4vY2h1bmtlclwiO1xuaW1wb3J0IHsgYnl0ZUxlbmd0aCB9IGZyb20gXCIuL2J5dGVsZW5ndGhcIjtcbmltcG9ydCB7IEFib3J0Q29udHJvbGxlciwgQWJvcnRTaWduYWwgfSBmcm9tIFwiQGF3cy1zZGsvYWJvcnQtY29udHJvbGxlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhd0RhdGFQYXJ0IHtcbiAgcGFydE51bWJlcjogbnVtYmVyO1xuICBkYXRhOiBCb2R5RGF0YVR5cGVzO1xufVxuXG5jb25zdCBNSU5fUEFSVF9TSVpFID0gMTAyNCAqIDEwMjQgKiA1O1xuXG5leHBvcnQgY2xhc3MgVXBsb2FkIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgLyoqXG4gICAqIFMzIG11bHRpcGFydCB1cGxvYWQgZG9lcyBub3QgYWxsb3cgbW9yZSB0aGFuIDEwMDAwIHBhcnRzLlxuICAgKi9cbiAgcHJpdmF0ZSBNQVhfUEFSVFMgPSAxMDAwMDtcblxuICAvLyBEZWZhdWx0cy5cbiAgcHJpdmF0ZSBxdWV1ZVNpemUgPSA0O1xuICBwcml2YXRlIHBhcnRTaXplID0gTUlOX1BBUlRfU0laRTtcbiAgcHJpdmF0ZSBsZWF2ZVBhcnRzT25FcnJvciA9IGZhbHNlO1xuICBwcml2YXRlIHRhZ3M6IFRhZ1tdID0gW107XG5cbiAgcHJpdmF0ZSBjbGllbnQ6IFNlcnZpY2VDbGllbnRzO1xuICBwcml2YXRlIHBhcmFtczogUHV0T2JqZWN0Q29tbWFuZElucHV0O1xuXG4gIC8vIHVzZWQgZm9yIHJlcG9ydGluZyBwcm9ncmVzcy5cbiAgcHJpdmF0ZSB0b3RhbEJ5dGVzPzogbnVtYmVyO1xuICBwcml2YXRlIGJ5dGVzVXBsb2FkZWRTb0ZhcjogbnVtYmVyO1xuXG4gIC8vIHVzZWQgaW4gdGhlIHVwbG9hZC5cbiAgcHJpdmF0ZSBhYm9ydENvbnRyb2xsZXI6IEFib3J0Q29udHJvbGxlcjtcbiAgcHJpdmF0ZSBjb25jdXJyZW50VXBsb2FkZXJzOiBQcm9taXNlPHZvaWQ+W10gPSBbXTtcblxuICBwcml2YXRlIHVwbG9hZGVkUGFydHM6IENvbXBsZXRlZFBhcnRbXSA9IFtdO1xuICBwcml2YXRlIHVwbG9hZElkPzogc3RyaW5nO1xuXG4gIHVwbG9hZEV2ZW50Pzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8gc2V0IGRlZmF1bHRzIGZyb20gb3B0aW9ucy5cbiAgICB0aGlzLnF1ZXVlU2l6ZSA9IG9wdGlvbnMucXVldWVTaXplIHx8IHRoaXMucXVldWVTaXplO1xuICAgIHRoaXMucGFydFNpemUgPSBvcHRpb25zLnBhcnRTaXplIHx8IHRoaXMucGFydFNpemU7XG4gICAgdGhpcy5sZWF2ZVBhcnRzT25FcnJvciA9IG9wdGlvbnMubGVhdmVQYXJ0c09uRXJyb3IgfHwgdGhpcy5sZWF2ZVBhcnRzT25FcnJvcjtcbiAgICB0aGlzLnRhZ3MgPSBvcHRpb25zLnRhZ3MgfHwgdGhpcy50YWdzO1xuXG4gICAgdGhpcy5jbGllbnQgPSBvcHRpb25zLmNsaWVudDtcbiAgICB0aGlzLnBhcmFtcyA9IG9wdGlvbnMucGFyYW1zO1xuXG4gICAgdGhpcy5fX3ZhbGlkYXRlSW5wdXQoKTtcblxuICAgIC8vIHNldCBwcm9ncmVzcyBkZWZhdWx0c1xuICAgIHRoaXMudG90YWxCeXRlcyA9IGJ5dGVMZW5ndGgodGhpcy5wYXJhbXMuQm9keSk7XG4gICAgdGhpcy5ieXRlc1VwbG9hZGVkU29GYXIgPSAwO1xuICAgIHRoaXMuYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICB9XG5cbiAgYXN5bmMgYWJvcnQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLyoqXG4gICAgICogQWJvcnQgc3RvcHMgYWxsIG5ldyB1cGxvYWRzIGFuZCBpbW1lZGlhdGVseSBleGlzdHMgdGhlIHRvcCBsZXZlbCBwcm9taXNlIG9uIHRoaXMuZG9uZSgpXG4gICAgICogQ29uY3VycmVudCB0aHJlYWRzIGluIGZsaWdodCBjbGVhbiB1cCBldmVudHVhbGx5LlxuICAgICAqL1xuICAgIHRoaXMuYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XG4gIH1cblxuICBhc3luYyBkb25lKCk6IFByb21pc2U8U2VydmljZU91dHB1dFR5cGVzPiB7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmFjZShbdGhpcy5fX2RvTXVsdGlwYXJ0VXBsb2FkKCksIHRoaXMuX19hYm9ydFRpbWVvdXQodGhpcy5hYm9ydENvbnRyb2xsZXIuc2lnbmFsKV0pO1xuICB9XG5cbiAgb24oZXZlbnQ6IFwiaHR0cFVwbG9hZFByb2dyZXNzXCIsIGxpc3RlbmVyOiAocHJvZ3Jlc3M6IFByb2dyZXNzKSA9PiB2b2lkKTogYW55IHtcbiAgICB0aGlzLnVwbG9hZEV2ZW50ID0gZXZlbnQ7XG4gICAgc3VwZXIub24oZXZlbnQsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIGFzeW5jIF9fZG9Db25jdXJyZW50VXBsb2FkKGRhdGFGZWVkZXI6IEFzeW5jR2VuZXJhdG9yPFJhd0RhdGFQYXJ0LCB2b2lkLCB1bmRlZmluZWQ+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgZm9yIGF3YWl0IChjb25zdCBkYXRhUGFydCBvZiBkYXRhRmVlZGVyKSB7XG4gICAgICBpZiAodGhpcy51cGxvYWRlZFBhcnRzLmxlbmd0aCA+IHRoaXMuTUFYX1BBUlRTKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRXhjZWVkZWQgJHt0aGlzLk1BWF9QQVJUU30gYXMgcGFydCBvZiB0aGUgdXBsb2FkIHRvICR7dGhpcy5wYXJhbXMuS2V5fSBhbmQgJHt0aGlzLnBhcmFtcy5CdWNrZXR9LmBcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGFydFJlc3VsdCA9IGF3YWl0IHRoaXMuY2xpZW50LnNlbmQoXG4gICAgICAgICAgbmV3IFVwbG9hZFBhcnRDb21tYW5kKHtcbiAgICAgICAgICAgIC4uLnRoaXMucGFyYW1zLFxuICAgICAgICAgICAgVXBsb2FkSWQ6IHRoaXMudXBsb2FkSWQsXG4gICAgICAgICAgICBCb2R5OiBkYXRhUGFydC5kYXRhLFxuICAgICAgICAgICAgUGFydE51bWJlcjogZGF0YVBhcnQucGFydE51bWJlcixcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIGlmICh0aGlzLmFib3J0Q29udHJvbGxlci5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBsb2FkZWRQYXJ0cy5wdXNoKHtcbiAgICAgICAgICBQYXJ0TnVtYmVyOiBkYXRhUGFydC5wYXJ0TnVtYmVyLFxuICAgICAgICAgIEVUYWc6IHBhcnRSZXN1bHQuRVRhZyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5ieXRlc1VwbG9hZGVkU29GYXIgKz0gYnl0ZUxlbmd0aChkYXRhUGFydC5kYXRhKTtcbiAgICAgICAgdGhpcy5fX25vdGlmeVByb2dyZXNzKHtcbiAgICAgICAgICBsb2FkZWQ6IHRoaXMuYnl0ZXNVcGxvYWRlZFNvRmFyLFxuICAgICAgICAgIHRvdGFsOiB0aGlzLnRvdGFsQnl0ZXMsXG4gICAgICAgICAgcGFydDogZGF0YVBhcnQucGFydE51bWJlcixcbiAgICAgICAgICBLZXk6IHRoaXMucGFyYW1zLktleSxcbiAgICAgICAgICBCdWNrZXQ6IHRoaXMucGFyYW1zLkJ1Y2tldCxcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIG9uIGxlYXZlUGFydHNPbkVycm9yIHRocm93IGFuIGVycm9yIHNvIHVzZXJzIGNhbiBkZWFsIHdpdGggaXQgdGhlbXNlbHZlcyxcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHN3YWxsb3cgdGhlIGVycm9yLlxuICAgICAgICBpZiAodGhpcy5sZWF2ZVBhcnRzT25FcnJvcikge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBfX2RvTXVsdGlwYXJ0VXBsb2FkKCk6IFByb21pc2U8U2VydmljZU91dHB1dFR5cGVzPiB7XG4gICAgY29uc3QgY3JlYXRlTXVsdGlwYXJ0VXBsb2FkUmVzdWx0ID0gYXdhaXQgdGhpcy5jbGllbnQuc2VuZChuZXcgQ3JlYXRlTXVsdGlwYXJ0VXBsb2FkQ29tbWFuZCh0aGlzLnBhcmFtcykpO1xuICAgIHRoaXMudXBsb2FkSWQgPSBjcmVhdGVNdWx0aXBhcnRVcGxvYWRSZXN1bHQuVXBsb2FkSWQ7XG5cbiAgICAvLyBTZXQgdXAgZGF0YSBpbnB1dCBjaHVua3MuXG4gICAgY29uc3QgZGF0YUZlZWRlciA9IGdldENodW5rKHRoaXMucGFyYW1zLkJvZHksIHRoaXMucGFydFNpemUpO1xuXG4gICAgLy8gQ3JlYXRlIGFuZCBzdGFydCBjb25jdXJyZW50IHVwbG9hZHMuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMucXVldWVTaXplOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50VXBsb2FkID0gdGhpcy5fX2RvQ29uY3VycmVudFVwbG9hZChkYXRhRmVlZGVyKTtcbiAgICAgIHRoaXMuY29uY3VycmVudFVwbG9hZGVycy5wdXNoKGN1cnJlbnRVcGxvYWQpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhbmQgc3RhcnQgY29uY3VycmVudCB1cGxvYWRzLlxuICAgIGF3YWl0IFByb21pc2UuYWxsKHRoaXMuY29uY3VycmVudFVwbG9hZGVycyk7XG4gICAgaWYgKHRoaXMuYWJvcnRDb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICB0aHJvdyBPYmplY3QuYXNzaWduKG5ldyBFcnJvcihcIlVwbG9hZCBhYm9ydGVkLlwiKSwgeyBuYW1lOiBcIkFib3J0RXJyb3JcIiB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnVwbG9hZGVkUGFydHMuc29ydCgoYSwgYikgPT4gYS5QYXJ0TnVtYmVyISAtIGIuUGFydE51bWJlciEpO1xuICAgIGNvbnN0IGNvbXBsZXRlTXVsdGlwYXJ0VXBsb2FkID0gYXdhaXQgdGhpcy5jbGllbnQuc2VuZChcbiAgICAgIG5ldyBDb21wbGV0ZU11bHRpcGFydFVwbG9hZENvbW1hbmQoe1xuICAgICAgICAuLi50aGlzLnBhcmFtcyxcbiAgICAgICAgVXBsb2FkSWQ6IHRoaXMudXBsb2FkSWQsXG4gICAgICAgIE11bHRpcGFydFVwbG9hZDoge1xuICAgICAgICAgIFBhcnRzOiB0aGlzLnVwbG9hZGVkUGFydHMsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBBZGQgdGFncyB0byB0aGUgb2JqZWN0IGFmdGVyIGl0J3MgY29tcGxldGVkIHRoZSB1cGxvYWQuXG4gICAgaWYgKHRoaXMudGFncy5sZW5ndGgpIHtcbiAgICAgIGF3YWl0IHRoaXMuY2xpZW50LnNlbmQoXG4gICAgICAgIG5ldyBQdXRPYmplY3RUYWdnaW5nQ29tbWFuZCh7XG4gICAgICAgICAgLi4udGhpcy5wYXJhbXMsXG4gICAgICAgICAgVGFnZ2luZzoge1xuICAgICAgICAgICAgVGFnU2V0OiB0aGlzLnRhZ3MsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBsZXRlTXVsdGlwYXJ0VXBsb2FkO1xuICB9XG5cbiAgX19ub3RpZnlQcm9ncmVzcyhwcm9ncmVzczogUHJvZ3Jlc3MpIHtcbiAgICBpZiAodGhpcy51cGxvYWRFdmVudCkge1xuICAgICAgdGhpcy5lbWl0KHRoaXMudXBsb2FkRXZlbnQsIHByb2dyZXNzKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBfX2Fib3J0VGltZW91dChhYm9ydFNpZ25hbDogQWJvcnRTaWduYWwpOiBQcm9taXNlPFNlcnZpY2VPdXRwdXRUeXBlcz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBhYm9ydFNpZ25hbC5vbmFib3J0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhYm9ydEVycm9yID0gbmV3IEVycm9yKFwiVXBsb2FkIGFib3J0ZWQuXCIpO1xuICAgICAgICBhYm9ydEVycm9yLm5hbWUgPSBcIkFib3J0RXJyb3JcIjtcbiAgICAgICAgcmVqZWN0KGFib3J0RXJyb3IpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIF9fdmFsaWRhdGVJbnB1dCgpIHtcbiAgICBpZiAoIXRoaXMucGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYElucHV0RXJyb3I6IFVwbG9hZCByZXF1aXJlcyBwYXJhbXMgdG8gYmUgcGFzc2VkIHRvIHVwbG9hZC5gKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuY2xpZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYElucHV0RXJyb3I6IFVwbG9hZCByZXF1aXJlcyBhIEFXUyBjbGllbnQgdG8gZG8gdXBsb2FkcyB3aXRoLmApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBhcnRTaXplIDwgTUlOX1BBUlRfU0laRSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRW50aXR5VG9vU21hbGw6IFlvdXIgcHJvcG9zZWQgdXBsb2FkIHBhcnRzaXplIFske3RoaXMucGFydFNpemV9XSBpcyBzbWFsbGVyIHRoYW4gdGhlIG1pbmltdW0gYWxsb3dlZCBzaXplIFske01JTl9QQVJUX1NJWkV9XSAoNU1CKWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucXVldWVTaXplIDwgMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBRdWV1ZSBzaXplOiBNdXN0IGhhdmUgYXQgbGVhc3Qgb25lIHVwbG9hZGluZyBxdWV1ZS5gKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==