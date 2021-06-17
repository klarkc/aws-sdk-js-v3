import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { DeleteStreamingImageRequest, DeleteStreamingImageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteStreamingImageCommandInput extends DeleteStreamingImageRequest {
}
export interface DeleteStreamingImageCommandOutput extends DeleteStreamingImageResponse, __MetadataBearer {
}
/**
 * <p>Delete streaming image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, DeleteStreamingImageCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, DeleteStreamingImageCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new DeleteStreamingImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStreamingImageCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamingImageCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteStreamingImageCommand extends $Command<DeleteStreamingImageCommandInput, DeleteStreamingImageCommandOutput, NimbleClientResolvedConfig> {
    readonly input: DeleteStreamingImageCommandInput;
    constructor(input: DeleteStreamingImageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteStreamingImageCommandInput, DeleteStreamingImageCommandOutput>;
    private serialize;
    private deserialize;
}
