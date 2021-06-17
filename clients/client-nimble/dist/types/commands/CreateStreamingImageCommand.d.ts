import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { CreateStreamingImageRequest, CreateStreamingImageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateStreamingImageCommandInput extends CreateStreamingImageRequest {
}
export interface CreateStreamingImageCommandOutput extends CreateStreamingImageResponse, __MetadataBearer {
}
/**
 * <p>Creates a streaming image resource in a studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, CreateStreamingImageCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, CreateStreamingImageCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new CreateStreamingImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStreamingImageCommandInput} for command's `input` shape.
 * @see {@link CreateStreamingImageCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateStreamingImageCommand extends $Command<CreateStreamingImageCommandInput, CreateStreamingImageCommandOutput, NimbleClientResolvedConfig> {
    readonly input: CreateStreamingImageCommandInput;
    constructor(input: CreateStreamingImageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateStreamingImageCommandInput, CreateStreamingImageCommandOutput>;
    private serialize;
    private deserialize;
}
