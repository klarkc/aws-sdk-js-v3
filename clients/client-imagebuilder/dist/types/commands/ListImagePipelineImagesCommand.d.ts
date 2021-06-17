import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListImagePipelineImagesRequest, ListImagePipelineImagesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListImagePipelineImagesCommandInput extends ListImagePipelineImagesRequest {
}
export interface ListImagePipelineImagesCommandOutput extends ListImagePipelineImagesResponse, __MetadataBearer {
}
/**
 * <p> Returns a list of images created by the specified pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImagePipelineImagesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImagePipelineImagesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ListImagePipelineImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImagePipelineImagesCommandInput} for command's `input` shape.
 * @see {@link ListImagePipelineImagesCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListImagePipelineImagesCommand extends $Command<ListImagePipelineImagesCommandInput, ListImagePipelineImagesCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: ListImagePipelineImagesCommandInput;
    constructor(input: ListImagePipelineImagesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListImagePipelineImagesCommandInput, ListImagePipelineImagesCommandOutput>;
    private serialize;
    private deserialize;
}
