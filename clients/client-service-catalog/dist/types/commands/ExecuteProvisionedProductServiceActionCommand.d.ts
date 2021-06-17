import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ExecuteProvisionedProductServiceActionInput, ExecuteProvisionedProductServiceActionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ExecuteProvisionedProductServiceActionCommandInput extends ExecuteProvisionedProductServiceActionInput {
}
export interface ExecuteProvisionedProductServiceActionCommandOutput extends ExecuteProvisionedProductServiceActionOutput, __MetadataBearer {
}
/**
 * <p>Executes a self-service action against a provisioned product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ExecuteProvisionedProductServiceActionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ExecuteProvisionedProductServiceActionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ExecuteProvisionedProductServiceActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteProvisionedProductServiceActionCommandInput} for command's `input` shape.
 * @see {@link ExecuteProvisionedProductServiceActionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExecuteProvisionedProductServiceActionCommand extends $Command<ExecuteProvisionedProductServiceActionCommandInput, ExecuteProvisionedProductServiceActionCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ExecuteProvisionedProductServiceActionCommandInput;
    constructor(input: ExecuteProvisionedProductServiceActionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExecuteProvisionedProductServiceActionCommandInput, ExecuteProvisionedProductServiceActionCommandOutput>;
    private serialize;
    private deserialize;
}
