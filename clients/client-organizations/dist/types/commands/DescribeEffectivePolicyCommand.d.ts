import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DescribeEffectivePolicyRequest, DescribeEffectivePolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEffectivePolicyCommandInput extends DescribeEffectivePolicyRequest {
}
export interface DescribeEffectivePolicyCommandOutput extends DescribeEffectivePolicyResponse, __MetadataBearer {
}
/**
 * <p>Returns the contents of the effective policy for specified policy type and account.
 *             The effective policy is the aggregation of any policies of the specified type that the
 *             account inherits, plus any policy of that type that is directly attached to the
 *             account.</p>
 *         <p>This operation applies only to policy types <i>other</i> than service
 *             control policies (SCPs).</p>
 *         <p>For more information about policy inheritance, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies-inheritance.html">How Policy Inheritance
 *                 Works</a> in the <i>AWS Organizations User Guide</i>.</p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DescribeEffectivePolicyCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DescribeEffectivePolicyCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DescribeEffectivePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEffectivePolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeEffectivePolicyCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEffectivePolicyCommand extends $Command<DescribeEffectivePolicyCommandInput, DescribeEffectivePolicyCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: DescribeEffectivePolicyCommandInput;
    constructor(input: DescribeEffectivePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEffectivePolicyCommandInput, DescribeEffectivePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
