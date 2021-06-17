import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetImagePipelineRequest, GetImagePipelineResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetImagePipelineCommandInput extends GetImagePipelineRequest {
}
export interface GetImagePipelineCommandOutput extends GetImagePipelineResponse, __MetadataBearer {
}
/**
 * <p> Gets an image pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetImagePipelineCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetImagePipelineCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new GetImagePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetImagePipelineCommandInput} for command's `input` shape.
 * @see {@link GetImagePipelineCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetImagePipelineCommand extends $Command<GetImagePipelineCommandInput, GetImagePipelineCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: GetImagePipelineCommandInput;
    constructor(input: GetImagePipelineCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetImagePipelineCommandInput, GetImagePipelineCommandOutput>;
    private serialize;
    private deserialize;
}
