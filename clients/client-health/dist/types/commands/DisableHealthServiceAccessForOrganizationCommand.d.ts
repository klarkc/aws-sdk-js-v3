import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableHealthServiceAccessForOrganizationCommandInput {
}
export interface DisableHealthServiceAccessForOrganizationCommandOutput extends __MetadataBearer {
}
/**
 * <p>Disables AWS Health from working with AWS Organizations. To call this operation, you must sign
 *          in as an AWS Identity and Access Management (IAM) user, assume an IAM role, or sign in as the root user (not
 *          recommended) in the organization's management account. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating
 *             AWS Health events</a> in the
 *             <i>AWS Health User Guide</i>.</p>
 *          <p>This operation doesn't remove the service-linked role from the management account in your organization. You must use the IAM console, API, or AWS Command Line Interface (AWS CLI) to
 *          remove the service-linked role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html#delete-service-linked-role">Deleting a Service-Linked Role</a> in the
 *          <i>IAM User Guide</i>.</p>
 *          <note>
 *             <p>You can also disable the organizational feature by using the Organizations <a href="https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisableAWSServiceAccess.html">DisableAWSServiceAccess</a> API operation. After you call this operation,
 *             AWS Health stops aggregating events for all other AWS accounts in your organization.
 *             If you call the AWS Health API operations for organizational view, AWS Health returns
 *             an error. AWS Health continues to aggregate health events for your AWS
 *             account.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DisableHealthServiceAccessForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DisableHealthServiceAccessForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DisableHealthServiceAccessForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableHealthServiceAccessForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DisableHealthServiceAccessForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableHealthServiceAccessForOrganizationCommand extends $Command<DisableHealthServiceAccessForOrganizationCommandInput, DisableHealthServiceAccessForOrganizationCommandOutput, HealthClientResolvedConfig> {
    readonly input: DisableHealthServiceAccessForOrganizationCommandInput;
    constructor(input: DisableHealthServiceAccessForOrganizationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableHealthServiceAccessForOrganizationCommandInput, DisableHealthServiceAccessForOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
