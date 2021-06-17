import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { DeleteContainerRecipeRequest, DeleteContainerRecipeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteContainerRecipeCommandInput extends DeleteContainerRecipeRequest {
}
export interface DeleteContainerRecipeCommandOutput extends DeleteContainerRecipeResponse, __MetadataBearer {
}
/**
 * <p>Deletes a container recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, DeleteContainerRecipeCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, DeleteContainerRecipeCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new DeleteContainerRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteContainerRecipeCommandInput} for command's `input` shape.
 * @see {@link DeleteContainerRecipeCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteContainerRecipeCommand extends $Command<DeleteContainerRecipeCommandInput, DeleteContainerRecipeCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: DeleteContainerRecipeCommandInput;
    constructor(input: DeleteContainerRecipeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteContainerRecipeCommandInput, DeleteContainerRecipeCommandOutput>;
    private serialize;
    private deserialize;
}
