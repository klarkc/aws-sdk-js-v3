import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { UpdateStreamingImageRequest, UpdateStreamingImageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateStreamingImageCommandInput extends UpdateStreamingImageRequest {
}
export interface UpdateStreamingImageCommandOutput extends UpdateStreamingImageResponse, __MetadataBearer {
}
/**
 * <p>Update streaming image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, UpdateStreamingImageCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, UpdateStreamingImageCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new UpdateStreamingImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStreamingImageCommandInput} for command's `input` shape.
 * @see {@link UpdateStreamingImageCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateStreamingImageCommand extends $Command<UpdateStreamingImageCommandInput, UpdateStreamingImageCommandOutput, NimbleClientResolvedConfig> {
    readonly input: UpdateStreamingImageCommandInput;
    constructor(input: UpdateStreamingImageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateStreamingImageCommandInput, UpdateStreamingImageCommandOutput>;
    private serialize;
    private deserialize;
}
