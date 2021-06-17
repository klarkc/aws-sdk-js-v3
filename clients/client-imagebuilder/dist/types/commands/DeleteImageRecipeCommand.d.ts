import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { DeleteImageRecipeRequest, DeleteImageRecipeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteImageRecipeCommandInput extends DeleteImageRecipeRequest {
}
export interface DeleteImageRecipeCommandOutput extends DeleteImageRecipeResponse, __MetadataBearer {
}
/**
 * <p> Deletes an image recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, DeleteImageRecipeCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, DeleteImageRecipeCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new DeleteImageRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteImageRecipeCommandInput} for command's `input` shape.
 * @see {@link DeleteImageRecipeCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteImageRecipeCommand extends $Command<DeleteImageRecipeCommandInput, DeleteImageRecipeCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: DeleteImageRecipeCommandInput;
    constructor(input: DeleteImageRecipeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteImageRecipeCommandInput, DeleteImageRecipeCommandOutput>;
    private serialize;
    private deserialize;
}
