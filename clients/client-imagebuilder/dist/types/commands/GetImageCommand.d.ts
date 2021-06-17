import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetImageRequest, GetImageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetImageCommandInput extends GetImageRequest {
}
export interface GetImageCommandOutput extends GetImageResponse, __MetadataBearer {
}
/**
 * <p> Gets an image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetImageCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetImageCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new GetImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetImageCommandInput} for command's `input` shape.
 * @see {@link GetImageCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetImageCommand extends $Command<GetImageCommandInput, GetImageCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: GetImageCommandInput;
    constructor(input: GetImageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetImageCommandInput, GetImageCommandOutput>;
    private serialize;
    private deserialize;
}
