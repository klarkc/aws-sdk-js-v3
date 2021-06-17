/// <reference types="node" />
import { Readable } from "stream";
export declare function streamReader(stream: Readable, onChunk: (chunk: Uint8Array) => void, chunkSize?: number): Promise<void>;
