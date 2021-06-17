import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { GetStreamingImageRequest, GetStreamingImageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetStreamingImageCommandInput extends GetStreamingImageRequest {
}
export interface GetStreamingImageCommandOutput extends GetStreamingImageResponse, __MetadataBearer {
}
/**
 * <p>Get streaming image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetStreamingImageCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetStreamingImageCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetStreamingImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStreamingImageCommandInput} for command's `input` shape.
 * @see {@link GetStreamingImageCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetStreamingImageCommand extends $Command<GetStreamingImageCommandInput, GetStreamingImageCommandOutput, NimbleClientResolvedConfig> {
    readonly input: GetStreamingImageCommandInput;
    constructor(input: GetStreamingImageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetStreamingImageCommandInput, GetStreamingImageCommandOutput>;
    private serialize;
    private deserialize;
}
