import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { UpdateImagePipelineRequest, UpdateImagePipelineResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateImagePipelineCommandInput extends UpdateImagePipelineRequest {
}
export interface UpdateImagePipelineCommandOutput extends UpdateImagePipelineResponse, __MetadataBearer {
}
/**
 * <p> Updates an image pipeline. Image pipelines enable you to automate the creation and
 *       distribution of images.</p>
 *   	      <note>
 *             <p>UpdateImagePipeline does not support selective updates for the pipeline.
 *   		You must specify all of the required properties in the update request, not just
 *   		the properties that have changed.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, UpdateImagePipelineCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, UpdateImagePipelineCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new UpdateImagePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateImagePipelineCommandInput} for command's `input` shape.
 * @see {@link UpdateImagePipelineCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateImagePipelineCommand extends $Command<UpdateImagePipelineCommandInput, UpdateImagePipelineCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: UpdateImagePipelineCommandInput;
    constructor(input: UpdateImagePipelineCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateImagePipelineCommandInput, UpdateImagePipelineCommandOutput>;
    private serialize;
    private deserialize;
}
