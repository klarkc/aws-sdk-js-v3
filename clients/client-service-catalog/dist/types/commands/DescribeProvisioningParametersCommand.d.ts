import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeProvisioningParametersInput, DescribeProvisioningParametersOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeProvisioningParametersCommandInput extends DescribeProvisioningParametersInput {
}
export interface DescribeProvisioningParametersCommandOutput extends DescribeProvisioningParametersOutput, __MetadataBearer {
}
/**
 * <p>Gets information about the configuration required to provision the specified product using
 *          the specified provisioning artifact.</p>
 *          <p>If the output contains a TagOption key with an empty list of values, there is a
 *          TagOption conflict for that key. The end user cannot take action to fix the conflict, and
 *          launch is not blocked. In subsequent calls to <a>ProvisionProduct</a>,
 *          do not include conflicted TagOption keys as tags, or this causes the error
 *          "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>".
 *          Tag the provisioned product with the value <code>sc-tagoption-conflict-portfolioId-productId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProvisioningParametersCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProvisioningParametersCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeProvisioningParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProvisioningParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeProvisioningParametersCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeProvisioningParametersCommand extends $Command<DescribeProvisioningParametersCommandInput, DescribeProvisioningParametersCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribeProvisioningParametersCommandInput;
    constructor(input: DescribeProvisioningParametersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProvisioningParametersCommandInput, DescribeProvisioningParametersCommandOutput>;
    private serialize;
    private deserialize;
}
