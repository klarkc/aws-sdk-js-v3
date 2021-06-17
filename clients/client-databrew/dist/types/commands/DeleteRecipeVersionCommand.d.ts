import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { DeleteRecipeVersionRequest, DeleteRecipeVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRecipeVersionCommandInput extends DeleteRecipeVersionRequest {
}
export interface DeleteRecipeVersionCommandOutput extends DeleteRecipeVersionResponse, __MetadataBearer {
}
/**
 * <p>Deletes a single version of a DataBrew recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DeleteRecipeVersionCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DeleteRecipeVersionCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new DeleteRecipeVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRecipeVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteRecipeVersionCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRecipeVersionCommand extends $Command<DeleteRecipeVersionCommandInput, DeleteRecipeVersionCommandOutput, DataBrewClientResolvedConfig> {
    readonly input: DeleteRecipeVersionCommandInput;
    constructor(input: DeleteRecipeVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataBrewClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRecipeVersionCommandInput, DeleteRecipeVersionCommandOutput>;
    private serialize;
    private deserialize;
}
