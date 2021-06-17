import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ImportAsProvisionedProductInput, ImportAsProvisionedProductOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ImportAsProvisionedProductCommandInput extends ImportAsProvisionedProductInput {
}
export interface ImportAsProvisionedProductCommandOutput extends ImportAsProvisionedProductOutput, __MetadataBearer {
}
/**
 * <p>Requests the import of a resource as a Service Catalog provisioned product that is
 *          associated to a Service Catalog product and provisioning artifact. Once imported, all
 *          supported Service Catalog governance actions are supported on the provisioned
 *          product.</p>
 *          <p>Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets and
 *          non-root nested stacks are not supported.</p>
 *          <p>The CloudFormation stack must have one of the following statuses to be imported:
 *          <code>CREATE_COMPLETE</code>, <code>UPDATE_COMPLETE</code>, <code>UPDATE_ROLLBACK_COMPLETE</code>, <code>IMPORT_COMPLETE</code>,
 *          <code>IMPORT_ROLLBACK_COMPLETE</code>.</p>
 *          <p>Import of the resource requires that the CloudFormation stack template matches the
 *          associated Service Catalog product provisioning artifact. </p>
 *
 *          <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code>
 *          and <code>cloudformation:DescribeStacks</code> IAM policy permissions. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ImportAsProvisionedProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ImportAsProvisionedProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ImportAsProvisionedProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportAsProvisionedProductCommandInput} for command's `input` shape.
 * @see {@link ImportAsProvisionedProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ImportAsProvisionedProductCommand extends $Command<ImportAsProvisionedProductCommandInput, ImportAsProvisionedProductCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ImportAsProvisionedProductCommandInput;
    constructor(input: ImportAsProvisionedProductCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportAsProvisionedProductCommandInput, ImportAsProvisionedProductCommandOutput>;
    private serialize;
    private deserialize;
}
