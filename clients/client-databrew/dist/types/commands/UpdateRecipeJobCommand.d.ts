import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { UpdateRecipeJobRequest, UpdateRecipeJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRecipeJobCommandInput extends UpdateRecipeJobRequest {
}
export interface UpdateRecipeJobCommandOutput extends UpdateRecipeJobResponse, __MetadataBearer {
}
/**
 * <p>Modifies the definition of an existing DataBrew recipe job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, UpdateRecipeJobCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, UpdateRecipeJobCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new UpdateRecipeJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRecipeJobCommandInput} for command's `input` shape.
 * @see {@link UpdateRecipeJobCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRecipeJobCommand extends $Command<UpdateRecipeJobCommandInput, UpdateRecipeJobCommandOutput, DataBrewClientResolvedConfig> {
    readonly input: UpdateRecipeJobCommandInput;
    constructor(input: UpdateRecipeJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataBrewClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRecipeJobCommandInput, UpdateRecipeJobCommandOutput>;
    private serialize;
    private deserialize;
}
