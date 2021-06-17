import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { CreateRecipeJobRequest, CreateRecipeJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateRecipeJobCommandInput extends CreateRecipeJobRequest {
}
export interface CreateRecipeJobCommandOutput extends CreateRecipeJobResponse, __MetadataBearer {
}
/**
 * <p>Creates a new job to transform input data, using steps defined in an existing AWS Glue
 *             DataBrew recipe</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, CreateRecipeJobCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, CreateRecipeJobCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new CreateRecipeJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRecipeJobCommandInput} for command's `input` shape.
 * @see {@link CreateRecipeJobCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateRecipeJobCommand extends $Command<CreateRecipeJobCommandInput, CreateRecipeJobCommandOutput, DataBrewClientResolvedConfig> {
    readonly input: CreateRecipeJobCommandInput;
    constructor(input: CreateRecipeJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataBrewClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRecipeJobCommandInput, CreateRecipeJobCommandOutput>;
    private serialize;
    private deserialize;
}
