import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListContainerRecipesRequest, ListContainerRecipesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListContainerRecipesCommandInput extends ListContainerRecipesRequest {
}
export interface ListContainerRecipesCommandOutput extends ListContainerRecipesResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of container recipes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListContainerRecipesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListContainerRecipesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ListContainerRecipesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContainerRecipesCommandInput} for command's `input` shape.
 * @see {@link ListContainerRecipesCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListContainerRecipesCommand extends $Command<ListContainerRecipesCommandInput, ListContainerRecipesCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: ListContainerRecipesCommandInput;
    constructor(input: ListContainerRecipesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListContainerRecipesCommandInput, ListContainerRecipesCommandOutput>;
    private serialize;
    private deserialize;
}
