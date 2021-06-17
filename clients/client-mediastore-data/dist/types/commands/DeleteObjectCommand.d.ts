import { MediaStoreDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreDataClient";
import { DeleteObjectRequest, DeleteObjectResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteObjectCommandInput extends DeleteObjectRequest {
}
export interface DeleteObjectCommandOutput extends DeleteObjectResponse, __MetadataBearer {
}
/**
 * <p>Deletes an object at the specified path.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreDataClient, DeleteObjectCommand } from "@aws-sdk/client-mediastore-data"; // ES Modules import
 * // const { MediaStoreDataClient, DeleteObjectCommand } = require("@aws-sdk/client-mediastore-data"); // CommonJS import
 * const client = new MediaStoreDataClient(config);
 * const command = new DeleteObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteObjectCommandInput} for command's `input` shape.
 * @see {@link DeleteObjectCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteObjectCommand extends $Command<DeleteObjectCommandInput, DeleteObjectCommandOutput, MediaStoreDataClientResolvedConfig> {
    readonly input: DeleteObjectCommandInput;
    constructor(input: DeleteObjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteObjectCommandInput, DeleteObjectCommandOutput>;
    private serialize;
    private deserialize;
}
