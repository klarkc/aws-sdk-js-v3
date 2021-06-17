import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DisassociateBudgetFromResourceInput, DisassociateBudgetFromResourceOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateBudgetFromResourceCommandInput extends DisassociateBudgetFromResourceInput {
}
export interface DisassociateBudgetFromResourceCommandOutput extends DisassociateBudgetFromResourceOutput, __MetadataBearer {
}
/**
 * <p>Disassociates the specified budget from the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DisassociateBudgetFromResourceCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DisassociateBudgetFromResourceCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DisassociateBudgetFromResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateBudgetFromResourceCommandInput} for command's `input` shape.
 * @see {@link DisassociateBudgetFromResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateBudgetFromResourceCommand extends $Command<DisassociateBudgetFromResourceCommandInput, DisassociateBudgetFromResourceCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DisassociateBudgetFromResourceCommandInput;
    constructor(input: DisassociateBudgetFromResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateBudgetFromResourceCommandInput, DisassociateBudgetFromResourceCommandOutput>;
    private serialize;
    private deserialize;
}
