import { __assign, __asyncValues, __awaiter, __extends, __generator } from "tslib";
import { CompleteMultipartUploadCommand, CreateMultipartUploadCommand, PutObjectTaggingCommand, UploadPartCommand, } from "@aws-sdk/client-s3";
import { EventEmitter } from "events";
import { getChunk } from "./chunker";
import { byteLength } from "./bytelength";
import { AbortController } from "@aws-sdk/abort-controller";
var MIN_PART_SIZE = 1024 * 1024 * 5;
var Upload = /** @class */ (function (_super) {
    __extends(Upload, _super);
    function Upload(options) {
        var _this = _super.call(this) || this;
        /**
         * S3 multipart upload does not allow more than 10000 parts.
         */
        _this.MAX_PARTS = 10000;
        // Defaults.
        _this.queueSize = 4;
        _this.partSize = MIN_PART_SIZE;
        _this.leavePartsOnError = false;
        _this.tags = [];
        _this.concurrentUploaders = [];
        _this.uploadedParts = [];
        // set defaults from options.
        _this.queueSize = options.queueSize || _this.queueSize;
        _this.partSize = options.partSize || _this.partSize;
        _this.leavePartsOnError = options.leavePartsOnError || _this.leavePartsOnError;
        _this.tags = options.tags || _this.tags;
        _this.client = options.client;
        _this.params = options.params;
        _this.__validateInput();
        // set progress defaults
        _this.totalBytes = byteLength(_this.params.Body);
        _this.bytesUploadedSoFar = 0;
        _this.abortController = new AbortController();
        return _this;
    }
    Upload.prototype.abort = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                /**
                 * Abort stops all new uploads and immediately exists the top level promise on this.done()
                 * Concurrent threads in flight clean up eventually.
                 */
                this.abortController.abort();
                return [2 /*return*/];
            });
        });
    };
    Upload.prototype.done = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.race([this.__doMultipartUpload(), this.__abortTimeout(this.abortController.signal)])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Upload.prototype.on = function (event, listener) {
        this.uploadEvent = event;
        _super.prototype.on.call(this, event, listener);
    };
    Upload.prototype.__doConcurrentUpload = function (dataFeeder) {
        var dataFeeder_1, dataFeeder_1_1;
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function () {
            var dataPart, partResult, e_2, e_1_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 8, 9, 14]);
                        dataFeeder_1 = __asyncValues(dataFeeder);
                        _b.label = 1;
                    case 1: return [4 /*yield*/, dataFeeder_1.next()];
                    case 2:
                        if (!(dataFeeder_1_1 = _b.sent(), !dataFeeder_1_1.done)) return [3 /*break*/, 7];
                        dataPart = dataFeeder_1_1.value;
                        if (this.uploadedParts.length > this.MAX_PARTS) {
                            throw new Error("Exceeded " + this.MAX_PARTS + " as part of the upload to " + this.params.Key + " and " + this.params.Bucket + ".");
                        }
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.client.send(new UploadPartCommand(__assign(__assign({}, this.params), { UploadId: this.uploadId, Body: dataPart.data, PartNumber: dataPart.partNumber })))];
                    case 4:
                        partResult = _b.sent();
                        if (this.abortController.signal.aborted) {
                            return [2 /*return*/];
                        }
                        this.uploadedParts.push({
                            PartNumber: dataPart.partNumber,
                            ETag: partResult.ETag,
                        });
                        this.bytesUploadedSoFar += byteLength(dataPart.data);
                        this.__notifyProgress({
                            loaded: this.bytesUploadedSoFar,
                            total: this.totalBytes,
                            part: dataPart.partNumber,
                            Key: this.params.Key,
                            Bucket: this.params.Bucket,
                        });
                        return [3 /*break*/, 6];
                    case 5:
                        e_2 = _b.sent();
                        // on leavePartsOnError throw an error so users can deal with it themselves,
                        // otherwise swallow the error.
                        if (this.leavePartsOnError) {
                            throw e_2;
                        }
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 1];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _b.trys.push([9, , 12, 13]);
                        if (!(dataFeeder_1_1 && !dataFeeder_1_1.done && (_a = dataFeeder_1.return))) return [3 /*break*/, 11];
                        return [4 /*yield*/, _a.call(dataFeeder_1)];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    Upload.prototype.__doMultipartUpload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var createMultipartUploadResult, dataFeeder, index, currentUpload, completeMultipartUpload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.send(new CreateMultipartUploadCommand(this.params))];
                    case 1:
                        createMultipartUploadResult = _a.sent();
                        this.uploadId = createMultipartUploadResult.UploadId;
                        dataFeeder = getChunk(this.params.Body, this.partSize);
                        // Create and start concurrent uploads.
                        for (index = 0; index < this.queueSize; index++) {
                            currentUpload = this.__doConcurrentUpload(dataFeeder);
                            this.concurrentUploaders.push(currentUpload);
                        }
                        // Create and start concurrent uploads.
                        return [4 /*yield*/, Promise.all(this.concurrentUploaders)];
                    case 2:
                        // Create and start concurrent uploads.
                        _a.sent();
                        if (this.abortController.signal.aborted) {
                            throw Object.assign(new Error("Upload aborted."), { name: "AbortError" });
                        }
                        this.uploadedParts.sort(function (a, b) { return a.PartNumber - b.PartNumber; });
                        return [4 /*yield*/, this.client.send(new CompleteMultipartUploadCommand(__assign(__assign({}, this.params), { UploadId: this.uploadId, MultipartUpload: {
                                    Parts: this.uploadedParts,
                                } })))];
                    case 3:
                        completeMultipartUpload = _a.sent();
                        if (!this.tags.length) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.client.send(new PutObjectTaggingCommand(__assign(__assign({}, this.params), { Tagging: {
                                    TagSet: this.tags,
                                } })))];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, completeMultipartUpload];
                }
            });
        });
    };
    Upload.prototype.__notifyProgress = function (progress) {
        if (this.uploadEvent) {
            this.emit(this.uploadEvent, progress);
        }
    };
    Upload.prototype.__abortTimeout = function (abortSignal) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        abortSignal.onabort = function () {
                            var abortError = new Error("Upload aborted.");
                            abortError.name = "AbortError";
                            reject(abortError);
                        };
                    })];
            });
        });
    };
    Upload.prototype.__validateInput = function () {
        if (!this.params) {
            throw new Error("InputError: Upload requires params to be passed to upload.");
        }
        if (!this.client) {
            throw new Error("InputError: Upload requires a AWS client to do uploads with.");
        }
        if (this.partSize < MIN_PART_SIZE) {
            throw new Error("EntityTooSmall: Your proposed upload partsize [" + this.partSize + "] is smaller than the minimum allowed size [" + MIN_PART_SIZE + "] (5MB)");
        }
        if (this.queueSize < 1) {
            throw new Error("Queue size: Must have at least one uploading queue.");
        }
    };
    return Upload;
}(EventEmitter));
export { Upload };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBsb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1VwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLDhCQUE4QixFQUM5Qiw0QkFBNEIsRUFFNUIsdUJBQXVCLEVBR3ZCLGlCQUFpQixHQUNsQixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFdEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxlQUFlLEVBQWUsTUFBTSwyQkFBMkIsQ0FBQztBQU96RSxJQUFNLGFBQWEsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUV0QztJQUE0QiwwQkFBWTtJQTRCdEMsZ0JBQVksT0FBZ0I7UUFBNUIsWUFDRSxpQkFBTyxTQWlCUjtRQTdDRDs7V0FFRztRQUNLLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFFMUIsWUFBWTtRQUNKLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxjQUFRLEdBQUcsYUFBYSxDQUFDO1FBQ3pCLHVCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixVQUFJLEdBQVUsRUFBRSxDQUFDO1FBV2pCLHlCQUFtQixHQUFvQixFQUFFLENBQUM7UUFFMUMsbUJBQWEsR0FBb0IsRUFBRSxDQUFDO1FBUTFDLDZCQUE2QjtRQUM3QixLQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQztRQUNyRCxLQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQztRQUNsRCxLQUFJLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixJQUFJLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUM3RSxL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SUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLDREQUE0RCxDQUFDLENBQUM7U0FDL0U7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7U0FDakY7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxFQUFFO1lBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQ2Isb0RBQWtELElBQUksQ0FBQyxRQUFRLG9EQUErQyxhQUFhLFlBQVMsQ0FDckksQ0FBQztTQUNIO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTtZQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUE5TEQsQ0FBNEIsWUFBWSxHQThMdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wbGV0ZWRQYXJ0LFxuICBDb21wbGV0ZU11bHRpcGFydFVwbG9hZENvbW1hbmQsXG4gIENyZWF0ZU11bHRpcGFydFVwbG9hZENvbW1hbmQsXG4gIFB1dE9iamVjdENvbW1hbmRJbnB1dCxcbiAgUHV0T2JqZWN0VGFnZ2luZ0NvbW1hbmQsXG4gIFNlcnZpY2VPdXRwdXRUeXBlcyxcbiAgVGFnLFxuICBVcGxvYWRQYXJ0Q29tbWFuZCxcbn0gZnJvbSBcIkBhd3Mtc2RrL2NsaWVudC1zM1wiO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcImV2ZW50c1wiO1xuaW1wb3J0IHsgQm9keURhdGFUeXBlcywgT3B0aW9ucywgUHJvZ3Jlc3MsIFNlcnZpY2VDbGllbnRzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IGdldENodW5rIH0gZnJvbSBcIi4vY2h1bmtlclwiO1xuaW1wb3J0IHsgYnl0ZUxlbmd0aCB9IGZyb20gXCIuL2J5dGVsZW5ndGhcIjtcbmltcG9ydCB7IEFib3J0Q29udHJvbGxlciwgQWJvcnRTaWduYWwgfSBmcm9tIFwiQGF3cy1zZGsvYWJvcnQtY29udHJvbGxlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhd0RhdGFQYXJ0IHtcbiAgcGFydE51bWJlcjogbnVtYmVyO1xuICBkYXRhOiBCb2R5RGF0YVR5cGVzO1xufVxuXG5jb25zdCBNSU5fUEFSVF9TSVpFID0gMTAyNCAqIDEwMjQgKiA1O1xuXG5leHBvcnQgY2xhc3MgVXBsb2FkIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgLyoqXG4gICAqIFMzIG11bHRpcGFydCB1cGxvYWQgZG9lcyBub3QgYWxsb3cgbW9yZSB0aGFuIDEwMDAwIHBhcnRzLlxuICAgKi9cbiAgcHJpdmF0ZSBNQVhfUEFSVFMgPSAxMDAwMDtcblxuICAvLyBEZWZhdWx0cy5cbiAgcHJpdmF0ZSBxdWV1ZVNpemUgPSA0O1xuICBwcml2YXRlIHBhcnRTaXplID0gTUlOX1BBUlRfU0laRTtcbiAgcHJpdmF0ZSBsZWF2ZVBhcnRzT25FcnJvciA9IGZhbHNlO1xuICBwcml2YXRlIHRhZ3M6IFRhZ1tdID0gW107XG5cbiAgcHJpdmF0ZSBjbGllbnQ6IFNlcnZpY2VDbGllbnRzO1xuICBwcml2YXRlIHBhcmFtczogUHV0T2JqZWN0Q29tbWFuZElucHV0O1xuXG4gIC8vIHVzZWQgZm9yIHJlcG9ydGluZyBwcm9ncmVzcy5cbiAgcHJpdmF0ZSB0b3RhbEJ5dGVzPzogbnVtYmVyO1xuICBwcml2YXRlIGJ5dGVzVXBsb2FkZWRTb0ZhcjogbnVtYmVyO1xuXG4gIC8vIHVzZWQgaW4gdGhlIHVwbG9hZC5cbiAgcHJpdmF0ZSBhYm9ydENvbnRyb2xsZXI6IEFib3J0Q29udHJvbGxlcjtcbiAgcHJpdmF0ZSBjb25jdXJyZW50VXBsb2FkZXJzOiBQcm9taXNlPHZvaWQ+W10gPSBbXTtcblxuICBwcml2YXRlIHVwbG9hZGVkUGFydHM6IENvbXBsZXRlZFBhcnRbXSA9IFtdO1xuICBwcml2YXRlIHVwbG9hZElkPzogc3RyaW5nO1xuXG4gIHVwbG9hZEV2ZW50Pzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8gc2V0IGRlZmF1bHRzIGZyb20gb3B0aW9ucy5cbiAgICB0aGlzLnF1ZXVlU2l6ZSA9IG9wdGlvbnMucXVldWVTaXplIHx8IHRoaXMucXVldWVTaXplO1xuICAgIHRoaXMucGFydFNpemUgPSBvcHRpb25zLnBhcnRTaXplIHx8IHRoaXMucGFydFNpemU7XG4gICAgdGhpcy5sZWF2ZVBhcnRzT25FcnJvciA9IG9wdGlvbnMubGVhdmVQYXJ0c09uRXJyb3IgfHwgdGhpcy5sZWF2ZVBhcnRzT25FcnJvcjtcbiAgICB0aGlzLnRhZ3MgPSBvcHRpb25zLnRhZ3MgfHwgdGhpcy50YWdzO1xuXG4gICAgdGhpcy5jbGllbnQgPSBvcHRpb25zLmNsaWVudDtcbiAgICB0aGlzLnBhcmFtcyA9IG9wdGlvbnMucGFyYW1zO1xuXG4gICAgdGhpcy5fX3ZhbGlkYXRlSW5wdXQoKTtcblxuICAgIC8vIHNldCBwcm9ncmVzcyBkZWZhdWx0c1xuICAgIHRoaXMudG90YWxCeXRlcyA9IGJ5dGVMZW5ndGgodGhpcy5wYXJhbXMuQm9keSk7XG4gICAgdGhpcy5ieXRlc1VwbG9hZGVkU29GYXIgPSAwO1xuICAgIHRoaXMuYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICB9XG5cbiAgYXN5bmMgYWJvcnQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLyoqXG4gICAgICogQWJvcnQgc3RvcHMgYWxsIG5ldyB1cGxvYWRzIGFuZCBpbW1lZGlhdGVseSBleGlzdHMgdGhlIHRvcCBsZXZlbCBwcm9taXNlIG9uIHRoaXMuZG9uZSgpXG4gICAgICogQ29uY3VycmVudCB0aHJlYWRzIGluIGZsaWdodCBjbGVhbiB1cCBldmVudHVhbGx5LlxuICAgICAqL1xuICAgIHRoaXMuYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XG4gIH1cblxuICBhc3luYyBkb25lKCk6IFByb21pc2U8U2VydmljZU91dHB1dFR5cGVzPiB7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmFjZShbdGhpcy5fX2RvTXVsdGlwYXJ0VXBsb2FkKCksIHRoaXMuX19hYm9ydFRpbWVvdXQodGhpcy5hYm9ydENvbnRyb2xsZXIuc2lnbmFsKV0pO1xuICB9XG5cbiAgb24oZXZlbnQ6IFwiaHR0cFVwbG9hZFByb2dyZXNzXCIsIGxpc3RlbmVyOiAocHJvZ3Jlc3M6IFByb2dyZXNzKSA9PiB2b2lkKTogYW55IHtcbiAgICB0aGlzLnVwbG9hZEV2ZW50ID0gZXZlbnQ7XG4gICAgc3VwZXIub24oZXZlbnQsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIGFzeW5jIF9fZG9Db25jdXJyZW50VXBsb2FkKGRhdGFGZWVkZXI6IEFzeW5jR2VuZXJhdG9yPFJhd0RhdGFQYXJ0LCB2b2lkLCB1bmRlZmluZWQ+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgZm9yIGF3YWl0IChjb25zdCBkYXRhUGFydCBvZiBkYXRhRmVlZGVyKSB7XG4gICAgICBpZiAodGhpcy51cGxvYWRlZFBhcnRzLmxlbmd0aCA+IHRoaXMuTUFYX1BBUlRTKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRXhjZWVkZWQgJHt0aGlzLk1BWF9QQVJUU30gYXMgcGFydCBvZiB0aGUgdXBsb2FkIHRvICR7dGhpcy5wYXJhbXMuS2V5fSBhbmQgJHt0aGlzLnBhcmFtcy5CdWNrZXR9LmBcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGFydFJlc3VsdCA9IGF3YWl0IHRoaXMuY2xpZW50LnNlbmQoXG4gICAgICAgICAgbmV3IFVwbG9hZFBhcnRDb21tYW5kKHtcbiAgICAgICAgICAgIC4uLnRoaXMucGFyYW1zLFxuICAgICAgICAgICAgVXBsb2FkSWQ6IHRoaXMudXBsb2FkSWQsXG4gICAgICAgICAgICBCb2R5OiBkYXRhUGFydC5kYXRhLFxuICAgICAgICAgICAgUGFydE51bWJlcjogZGF0YVBhcnQucGFydE51bWJlcixcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIGlmICh0aGlzLmFib3J0Q29udHJvbGxlci5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBsb2FkZWRQYXJ0cy5wdXNoKHtcbiAgICAgICAgICBQYXJ0TnVtYmVyOiBkYXRhUGFydC5wYXJ0TnVtYmVyLFxuICAgICAgICAgIEVUYWc6IHBhcnRSZXN1bHQuRVRhZyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5ieXRlc1VwbG9hZGVkU29GYXIgKz0gYnl0ZUxlbmd0aChkYXRhUGFydC5kYXRhKTtcbiAgICAgICAgdGhpcy5fX25vdGlmeVByb2dyZXNzKHtcbiAgICAgICAgICBsb2FkZWQ6IHRoaXMuYnl0ZXNVcGxvYWRlZFNvRmFyLFxuICAgICAgICAgIHRvdGFsOiB0aGlzLnRvdGFsQnl0ZXMsXG4gICAgICAgICAgcGFydDogZGF0YVBhcnQucGFydE51bWJlcixcbiAgICAgICAgICBLZXk6IHRoaXMucGFyYW1zLktleSxcbiAgICAgICAgICBCdWNrZXQ6IHRoaXMucGFyYW1zLkJ1Y2tldCxcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIG9uIGxlYXZlUGFydHNPbkVycm9yIHRocm93IGFuIGVycm9yIHNvIHVzZXJzIGNhbiBkZWFsIHdpdGggaXQgdGhlbXNlbHZlcyxcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHN3YWxsb3cgdGhlIGVycm9yLlxuICAgICAgICBpZiAodGhpcy5sZWF2ZVBhcnRzT25FcnJvcikge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBfX2RvTXVsdGlwYXJ0VXBsb2FkKCk6IFByb21pc2U8U2VydmljZU91dHB1dFR5cGVzPiB7XG4gICAgY29uc3QgY3JlYXRlTXVsdGlwYXJ0VXBsb2FkUmVzdWx0ID0gYXdhaXQgdGhpcy5jbGllbnQuc2VuZChuZXcgQ3JlYXRlTXVsdGlwYXJ0VXBsb2FkQ29tbWFuZCh0aGlzLnBhcmFtcykpO1xuICAgIHRoaXMudXBsb2FkSWQgPSBjcmVhdGVNdWx0aXBhcnRVcGxvYWRSZXN1bHQuVXBsb2FkSWQ7XG5cbiAgICAvLyBTZXQgdXAgZGF0YSBpbnB1dCBjaHVua3MuXG4gICAgY29uc3QgZGF0YUZlZWRlciA9IGdldENodW5rKHRoaXMucGFyYW1zLkJvZHksIHRoaXMucGFydFNpemUpO1xuXG4gICAgLy8gQ3JlYXRlIGFuZCBzdGFydCBjb25jdXJyZW50IHVwbG9hZHMuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMucXVldWVTaXplOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50VXBsb2FkID0gdGhpcy5fX2RvQ29uY3VycmVudFVwbG9hZChkYXRhRmVlZGVyKTtcbiAgICAgIHRoaXMuY29uY3VycmVudFVwbG9hZGVycy5wdXNoKGN1cnJlbnRVcGxvYWQpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhbmQgc3RhcnQgY29uY3VycmVudCB1cGxvYWRzLlxuICAgIGF3YWl0IFByb21pc2UuYWxsKHRoaXMuY29uY3VycmVudFVwbG9hZGVycyk7XG4gICAgaWYgKHRoaXMuYWJvcnRDb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICB0aHJvdyBPYmplY3QuYXNzaWduKG5ldyBFcnJvcihcIlVwbG9hZCBhYm9ydGVkLlwiKSwgeyBuYW1lOiBcIkFib3J0RXJyb3JcIiB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnVwbG9hZGVkUGFydHMuc29ydCgoYSwgYikgPT4gYS5QYXJ0TnVtYmVyISAtIGIuUGFydE51bWJlciEpO1xuICAgIGNvbnN0IGNvbXBsZXRlTXVsdGlwYXJ0VXBsb2FkID0gYXdhaXQgdGhpcy5jbGllbnQuc2VuZChcbiAgICAgIG5ldyBDb21wbGV0ZU11bHRpcGFydFVwbG9hZENvbW1hbmQoe1xuICAgICAgICAuLi50aGlzLnBhcmFtcyxcbiAgICAgICAgVXBsb2FkSWQ6IHRoaXMudXBsb2FkSWQsXG4gICAgICAgIE11bHRpcGFydFVwbG9hZDoge1xuICAgICAgICAgIFBhcnRzOiB0aGlzLnVwbG9hZGVkUGFydHMsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBBZGQgdGFncyB0byB0aGUgb2JqZWN0IGFmdGVyIGl0J3MgY29tcGxldGVkIHRoZSB1cGxvYWQuXG4gICAgaWYgKHRoaXMudGFncy5sZW5ndGgpIHtcbiAgICAgIGF3YWl0IHRoaXMuY2xpZW50LnNlbmQoXG4gICAgICAgIG5ldyBQdXRPYmplY3RUYWdnaW5nQ29tbWFuZCh7XG4gICAgICAgICAgLi4udGhpcy5wYXJhbXMsXG4gICAgICAgICAgVGFnZ2luZzoge1xuICAgICAgICAgICAgVGFnU2V0OiB0aGlzLnRhZ3MsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBsZXRlTXVsdGlwYXJ0VXBsb2FkO1xuICB9XG5cbiAgX19ub3RpZnlQcm9ncmVzcyhwcm9ncmVzczogUHJvZ3Jlc3MpIHtcbiAgICBpZiAodGhpcy51cGxvYWRFdmVudCkge1xuICAgICAgdGhpcy5lbWl0KHRoaXMudXBsb2FkRXZlbnQsIHByb2dyZXNzKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBfX2Fib3J0VGltZW91dChhYm9ydFNpZ25hbDogQWJvcnRTaWduYWwpOiBQcm9taXNlPFNlcnZpY2VPdXRwdXRUeXBlcz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBhYm9ydFNpZ25hbC5vbmFib3J0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhYm9ydEVycm9yID0gbmV3IEVycm9yKFwiVXBsb2FkIGFib3J0ZWQuXCIpO1xuICAgICAgICBhYm9ydEVycm9yLm5hbWUgPSBcIkFib3J0RXJyb3JcIjtcbiAgICAgICAgcmVqZWN0KGFib3J0RXJyb3IpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIF9fdmFsaWRhdGVJbnB1dCgpIHtcbiAgICBpZiAoIXRoaXMucGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYElucHV0RXJyb3I6IFVwbG9hZCByZXF1aXJlcyBwYXJhbXMgdG8gYmUgcGFzc2VkIHRvIHVwbG9hZC5gKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuY2xpZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYElucHV0RXJyb3I6IFVwbG9hZCByZXF1aXJlcyBhIEFXUyBjbGllbnQgdG8gZG8gdXBsb2FkcyB3aXRoLmApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBhcnRTaXplIDwgTUlOX1BBUlRfU0laRSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRW50aXR5VG9vU21hbGw6IFlvdXIgcHJvcG9zZWQgdXBsb2FkIHBhcnRzaXplIFske3RoaXMucGFydFNpemV9XSBpcyBzbWFsbGVyIHRoYW4gdGhlIG1pbmltdW0gYWxsb3dlZCBzaXplIFske01JTl9QQVJUX1NJWkV9XSAoNU1CKWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucXVldWVTaXplIDwgMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBRdWV1ZSBzaXplOiBNdXN0IGhhdmUgYXQgbGVhc3Qgb25lIHVwbG9hZGluZyBxdWV1ZS5gKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==