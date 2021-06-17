import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { StartImagePipelineExecutionRequest, StartImagePipelineExecutionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartImagePipelineExecutionCommandInput extends StartImagePipelineExecutionRequest {
}
export interface StartImagePipelineExecutionCommandOutput extends StartImagePipelineExecutionResponse, __MetadataBearer {
}
/**
 * <p> Manually triggers a pipeline to create an image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, StartImagePipelineExecutionCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, StartImagePipelineExecutionCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new StartImagePipelineExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartImagePipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link StartImagePipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartImagePipelineExecutionCommand extends $Command<StartImagePipelineExecutionCommandInput, StartImagePipelineExecutionCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: StartImagePipelineExecutionCommandInput;
    constructor(input: StartImagePipelineExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartImagePipelineExecutionCommandInput, StartImagePipelineExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
