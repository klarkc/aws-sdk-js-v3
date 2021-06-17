import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListStackInstancesForProvisionedProductInput, ListStackInstancesForProvisionedProductOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListStackInstancesForProvisionedProductCommandInput extends ListStackInstancesForProvisionedProductInput {
}
export interface ListStackInstancesForProvisionedProductCommandOutput extends ListStackInstancesForProvisionedProductOutput, __MetadataBearer {
}
/**
 * <p>Returns summary information about stack instances that are associated with the specified <code>CFN_STACKSET</code> type provisioned product. You can filter for stack instances that are associated with a specific AWS account name or region. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListStackInstancesForProvisionedProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListStackInstancesForProvisionedProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListStackInstancesForProvisionedProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStackInstancesForProvisionedProductCommandInput} for command's `input` shape.
 * @see {@link ListStackInstancesForProvisionedProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListStackInstancesForProvisionedProductCommand extends $Command<ListStackInstancesForProvisionedProductCommandInput, ListStackInstancesForProvisionedProductCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListStackInstancesForProvisionedProductCommandInput;
    constructor(input: ListStackInstancesForProvisionedProductCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStackInstancesForProvisionedProductCommandInput, ListStackInstancesForProvisionedProductCommandOutput>;
    private serialize;
    private deserialize;
}
