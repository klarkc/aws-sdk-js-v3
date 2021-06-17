import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { AssociateBudgetWithResourceInput, AssociateBudgetWithResourceOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateBudgetWithResourceCommandInput extends AssociateBudgetWithResourceInput {
}
export interface AssociateBudgetWithResourceCommandOutput extends AssociateBudgetWithResourceOutput, __MetadataBearer {
}
/**
 * <p>Associates the specified budget with the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, AssociateBudgetWithResourceCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, AssociateBudgetWithResourceCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new AssociateBudgetWithResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateBudgetWithResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateBudgetWithResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateBudgetWithResourceCommand extends $Command<AssociateBudgetWithResourceCommandInput, AssociateBudgetWithResourceCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: AssociateBudgetWithResourceCommandInput;
    constructor(input: AssociateBudgetWithResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateBudgetWithResourceCommandInput, AssociateBudgetWithResourceCommandOutput>;
    private serialize;
    private deserialize;
}
