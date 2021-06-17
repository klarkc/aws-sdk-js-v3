import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { DeleteImagePipelineRequest, DeleteImagePipelineResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteImagePipelineCommandInput extends DeleteImagePipelineRequest {
}
export interface DeleteImagePipelineCommandOutput extends DeleteImagePipelineResponse, __MetadataBearer {
}
/**
 * <p> Deletes an image pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, DeleteImagePipelineCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, DeleteImagePipelineCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new DeleteImagePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteImagePipelineCommandInput} for command's `input` shape.
 * @see {@link DeleteImagePipelineCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteImagePipelineCommand extends $Command<DeleteImagePipelineCommandInput, DeleteImagePipelineCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: DeleteImagePipelineCommandInput;
    constructor(input: DeleteImagePipelineCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteImagePipelineCommandInput, DeleteImagePipelineCommandOutput>;
    private serialize;
    private deserialize;
}
