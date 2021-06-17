import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListImagePipelinesRequest, ListImagePipelinesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListImagePipelinesCommandInput extends ListImagePipelinesRequest {
}
export interface ListImagePipelinesCommandOutput extends ListImagePipelinesResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of image pipelines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImagePipelinesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImagePipelinesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ListImagePipelinesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImagePipelinesCommandInput} for command's `input` shape.
 * @see {@link ListImagePipelinesCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListImagePipelinesCommand extends $Command<ListImagePipelinesCommandInput, ListImagePipelinesCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: ListImagePipelinesCommandInput;
    constructor(input: ListImagePipelinesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListImagePipelinesCommandInput, ListImagePipelinesCommandOutput>;
    private serialize;
    private deserialize;
}
