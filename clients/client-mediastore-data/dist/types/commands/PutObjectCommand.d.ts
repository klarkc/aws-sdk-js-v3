/// <reference types="node" />
import { MediaStoreDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreDataClient";
import { PutObjectRequest, PutObjectResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
declare type PutObjectCommandInputType = Omit<PutObjectRequest, "Body"> & {
    /**
     * For *`PutObjectRequest["Body"]`*, see {@link PutObjectRequest.Body}.
     */
    Body: PutObjectRequest["Body"] | string | Uint8Array | Buffer;
};
/**
 * This interface extends from `PutObjectRequest` interface. There are more parameters than `Body` defined in {@link PutObjectRequest}
 */
export interface PutObjectCommandInput extends PutObjectCommandInputType {
}
export interface PutObjectCommandOutput extends PutObjectResponse, __MetadataBearer {
}
/**
 * <p>Uploads an object to the specified path. Object sizes are limited to 25 MB for standard upload availability and 10 MB for streaming upload availability.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreDataClient, PutObjectCommand } from "@aws-sdk/client-mediastore-data"; // ES Modules import
 * // const { MediaStoreDataClient, PutObjectCommand } = require("@aws-sdk/client-mediastore-data"); // CommonJS import
 * const client = new MediaStoreDataClient(config);
 * const command = new PutObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutObjectCommandInput} for command's `input` shape.
 * @see {@link PutObjectCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutObjectCommand extends $Command<PutObjectCommandInput, PutObjectCommandOutput, MediaStoreDataClientResolvedConfig> {
    readonly input: PutObjectCommandInput;
    constructor(input: PutObjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutObjectCommandInput, PutObjectCommandOutput>;
    private serialize;
    private deserialize;
}
export {};
