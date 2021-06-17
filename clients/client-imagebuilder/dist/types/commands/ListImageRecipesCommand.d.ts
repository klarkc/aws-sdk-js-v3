import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListImageRecipesRequest, ListImageRecipesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListImageRecipesCommandInput extends ListImageRecipesRequest {
}
export interface ListImageRecipesCommandOutput extends ListImageRecipesResponse, __MetadataBearer {
}
/**
 * <p> Returns a list of image recipes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImageRecipesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImageRecipesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ListImageRecipesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImageRecipesCommandInput} for command's `input` shape.
 * @see {@link ListImageRecipesCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListImageRecipesCommand extends $Command<ListImageRecipesCommandInput, ListImageRecipesCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: ListImageRecipesCommandInput;
    constructor(input: ListImageRecipesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListImageRecipesCommandInput, ListImageRecipesCommandOutput>;
    private serialize;
    private deserialize;
}
