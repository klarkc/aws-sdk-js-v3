import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { UpdateRecipeRequest, UpdateRecipeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRecipeCommandInput extends UpdateRecipeRequest {
}
export interface UpdateRecipeCommandOutput extends UpdateRecipeResponse, __MetadataBearer {
}
/**
 * <p>Modifies the definition of the <code>LATEST_WORKING</code> version of a DataBrew
 *             recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, UpdateRecipeCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, UpdateRecipeCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new UpdateRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRecipeCommandInput} for command's `input` shape.
 * @see {@link UpdateRecipeCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRecipeCommand extends $Command<UpdateRecipeCommandInput, UpdateRecipeCommandOutput, DataBrewClientResolvedConfig> {
    readonly input: UpdateRecipeCommandInput;
    constructor(input: UpdateRecipeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataBrewClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRecipeCommandInput, UpdateRecipeCommandOutput>;
    private serialize;
    private deserialize;
}
