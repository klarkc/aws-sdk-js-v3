import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { CreateImagePipelineRequest, CreateImagePipelineResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateImagePipelineCommandInput extends CreateImagePipelineRequest {
}
export interface CreateImagePipelineCommandOutput extends CreateImagePipelineResponse, __MetadataBearer {
}
/**
 * <p> Creates a new image pipeline. Image pipelines enable you to automate the creation and
 *       distribution of images.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateImagePipelineCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateImagePipelineCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new CreateImagePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateImagePipelineCommandInput} for command's `input` shape.
 * @see {@link CreateImagePipelineCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateImagePipelineCommand extends $Command<CreateImagePipelineCommandInput, CreateImagePipelineCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: CreateImagePipelineCommandInput;
    constructor(input: CreateImagePipelineCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateImagePipelineCommandInput, CreateImagePipelineCommandOutput>;
    private serialize;
    private deserialize;
}
