import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ProvisionProductInput, ProvisionProductOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ProvisionProductCommandInput extends ProvisionProductInput {
}
export interface ProvisionProductCommandOutput extends ProvisionProductOutput, __MetadataBearer {
}
/**
 * <p>Provisions the specified product.</p>
 *          <p>A provisioned product is a resourced instance of a product.
 *          For example, provisioning a product based on a CloudFormation template launches a
 *          CloudFormation stack and its underlying resources.
 *          You can check the status of this request using <a>DescribeRecord</a>.</p>
 *          <p>If the request contains a tag key with an empty list of values, there is a
 *          tag conflict for that key. Do not include conflicted keys as tags, or this causes
 *          the error "Parameter validation failed: Missing required parameter in
 *          Tags[<i>N</i>]:<i>Value</i>".</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ProvisionProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ProvisionProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ProvisionProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ProvisionProductCommandInput} for command's `input` shape.
 * @see {@link ProvisionProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ProvisionProductCommand extends $Command<ProvisionProductCommandInput, ProvisionProductCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ProvisionProductCommandInput;
    constructor(input: ProvisionProductCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ProvisionProductCommandInput, ProvisionProductCommandOutput>;
    private serialize;
    private deserialize;
}
