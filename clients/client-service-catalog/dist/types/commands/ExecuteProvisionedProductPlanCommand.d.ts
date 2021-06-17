import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ExecuteProvisionedProductPlanInput, ExecuteProvisionedProductPlanOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ExecuteProvisionedProductPlanCommandInput extends ExecuteProvisionedProductPlanInput {
}
export interface ExecuteProvisionedProductPlanCommandOutput extends ExecuteProvisionedProductPlanOutput, __MetadataBearer {
}
/**
 * <p>Provisions or modifies a product based on the resource changes for the specified plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ExecuteProvisionedProductPlanCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ExecuteProvisionedProductPlanCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ExecuteProvisionedProductPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteProvisionedProductPlanCommandInput} for command's `input` shape.
 * @see {@link ExecuteProvisionedProductPlanCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExecuteProvisionedProductPlanCommand extends $Command<ExecuteProvisionedProductPlanCommandInput, ExecuteProvisionedProductPlanCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ExecuteProvisionedProductPlanCommandInput;
    constructor(input: ExecuteProvisionedProductPlanCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExecuteProvisionedProductPlanCommandInput, ExecuteProvisionedProductPlanCommandOutput>;
    private serialize;
    private deserialize;
}
