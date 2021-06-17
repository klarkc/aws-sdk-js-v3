import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { EnableAWSServiceAccessRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableAWSServiceAccessCommandInput extends EnableAWSServiceAccessRequest {
}
export interface EnableAWSServiceAccessCommandOutput extends __MetadataBearer {
}
/**
 * <p>Enables the integration of an AWS service (the service that is specified by
 *                 <code>ServicePrincipal</code>) with AWS Organizations. When you enable integration, you allow
 *             the specified service to create a <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">service-linked role</a> in
 *             all the accounts in your organization. This allows the service to perform operations on
 *             your behalf in your organization and its accounts.</p>
 *         <important>
 *             <p>We recommend that you enable integration between AWS Organizations and the specified AWS
 *                 service by using the console or commands that are provided by the specified service.
 *                 Doing so ensures that the service is aware that it can create the resources that are
 *                 required for the integration. How the service creates those resources in the
 *                 organization's accounts depends on that service. For more information, see the
 *                 documentation for the other AWS service.</p>
 *         </important>
 *         <p>For more information about enabling services to integrate with AWS Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating AWS Organizations with Other
 *                 AWS Services</a> in the <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <p>This operation can be called only from the organization's management account and only
 *             if the organization has <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">enabled all
 *                 features</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, EnableAWSServiceAccessCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, EnableAWSServiceAccessCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new EnableAWSServiceAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableAWSServiceAccessCommandInput} for command's `input` shape.
 * @see {@link EnableAWSServiceAccessCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableAWSServiceAccessCommand extends $Command<EnableAWSServiceAccessCommandInput, EnableAWSServiceAccessCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: EnableAWSServiceAccessCommandInput;
    constructor(input: EnableAWSServiceAccessCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableAWSServiceAccessCommandInput, EnableAWSServiceAccessCommandOutput>;
    private serialize;
    private deserialize;
}
