import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableHealthServiceAccessForOrganizationCommandInput {
}
export interface EnableHealthServiceAccessForOrganizationCommandOutput extends __MetadataBearer {
}
/**
 * <p>Enables AWS Health to work with AWS Organizations. You can use the organizational view feature
 *          to aggregate events from all AWS accounts in your organization in a centralized location. </p>
 *          <p>This operation also creates a service-linked role for the management account in the
 *          organization. </p>
 *          <note>
 *             <p>To call this operation, you must meet the following requirements:</p>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business or Enterprise Support plan from <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a> to use the AWS Health
 *                   API. If you call the AWS Health API from an AWS account that doesn't have a
 *                   Business or Enterprise Support plan, you receive a
 *                      <code>SubscriptionRequiredException</code> error.</p>
 *                </li>
 *                <li>
 *                   <p>You must have permission to call this operation from the organization's
 *                   management account. For example IAM policies, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html">AWS Health
 *                      identity-based policy examples</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>If you don't have the required support plan, you can instead use the AWS Health console
 *          to enable the organizational view feature. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating
 *             AWS Health events</a> in the <i>AWS Health User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, EnableHealthServiceAccessForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, EnableHealthServiceAccessForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new EnableHealthServiceAccessForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableHealthServiceAccessForOrganizationCommandInput} for command's `input` shape.
 * @see {@link EnableHealthServiceAccessForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableHealthServiceAccessForOrganizationCommand extends $Command<EnableHealthServiceAccessForOrganizationCommandInput, EnableHealthServiceAccessForOrganizationCommandOutput, HealthClientResolvedConfig> {
    readonly input: EnableHealthServiceAccessForOrganizationCommandInput;
    constructor(input: EnableHealthServiceAccessForOrganizationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableHealthServiceAccessForOrganizationCommandInput, EnableHealthServiceAccessForOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
