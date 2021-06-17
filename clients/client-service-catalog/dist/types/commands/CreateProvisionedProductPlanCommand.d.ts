import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { CreateProvisionedProductPlanInput, CreateProvisionedProductPlanOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateProvisionedProductPlanCommandInput extends CreateProvisionedProductPlanInput {
}
export interface CreateProvisionedProductPlanCommandOutput extends CreateProvisionedProductPlanOutput, __MetadataBearer {
}
/**
 * <p>Creates a plan. A plan includes the list of resources to be
 *          created (when provisioning a new product) or modified (when updating a provisioned product)
 *          when the plan is executed.</p>
 *          <p>You can create one plan per provisioned product. To create a plan for an existing
 *          provisioned product, the product status must be AVAILBLE or TAINTED.</p>
 *          <p>To view the resource changes in the change set, use <a>DescribeProvisionedProductPlan</a>.
 *          To create or modify the provisioned product, use <a>ExecuteProvisionedProductPlan</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreateProvisionedProductPlanCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreateProvisionedProductPlanCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new CreateProvisionedProductPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProvisionedProductPlanCommandInput} for command's `input` shape.
 * @see {@link CreateProvisionedProductPlanCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateProvisionedProductPlanCommand extends $Command<CreateProvisionedProductPlanCommandInput, CreateProvisionedProductPlanCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: CreateProvisionedProductPlanCommandInput;
    constructor(input: CreateProvisionedProductPlanCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProvisionedProductPlanCommandInput, CreateProvisionedProductPlanCommandOutput>;
    private serialize;
    private deserialize;
}
