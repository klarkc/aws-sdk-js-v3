/// <reference types="node" />
import { ServiceOutputTypes } from "@aws-sdk/client-s3";
import { EventEmitter } from "events";
import { BodyDataTypes, Options, Progress } from "./types";
import { AbortSignal } from "@aws-sdk/abort-controller";
export interface RawDataPart {
    partNumber: number;
    data: BodyDataTypes;
}
export declare class Upload extends EventEmitter {
    /**
     * S3 multipart upload does not allow more than 10000 parts.
     */
    private MAX_PARTS;
    private queueSize;
    private partSize;
    private leavePartsOnError;
    private tags;
    private client;
    private params;
    private totalBytes?;
    private bytesUploadedSoFar;
    private abortController;
    private concurrentUploaders;
    private uploadedParts;
    private uploadId?;
    uploadEvent?: string;
    constructor(options: Options);
    abort(): Promise<void>;
    done(): Promise<ServiceOutputTypes>;
    on(event: "httpUploadProgress", listener: (progress: Progress) => void): any;
    __doConcurrentUpload(dataFeeder: AsyncGenerator<RawDataPart, void, undefined>): Promise<void>;
    __doMultipartUpload(): Promise<ServiceOutputTypes>;
    __notifyProgress(progress: Progress): void;
    __abortTimeout(abortSignal: AbortSignal): Promise<ServiceOutputTypes>;
    __validateInput(): void;
}
