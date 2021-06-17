import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListAWSServiceAccessForOrganizationRequest, ListAWSServiceAccessForOrganizationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAWSServiceAccessForOrganizationCommandInput extends ListAWSServiceAccessForOrganizationRequest {
}
export interface ListAWSServiceAccessForOrganizationCommandOutput extends ListAWSServiceAccessForOrganizationResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of the AWS services that you enabled to integrate with your
 *             organization. After a service on this list creates the resources that it requires for
 *             the integration, it can perform operations on your organization and its accounts.</p>
 *         <p>For more information about integrating other services with AWS Organizations, including the
 *             list of services that currently work with Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating AWS Organizations with Other
 *                 AWS Services</a> in the <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListAWSServiceAccessForOrganizationCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListAWSServiceAccessForOrganizationCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListAWSServiceAccessForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAWSServiceAccessForOrganizationCommandInput} for command's `input` shape.
 * @see {@link ListAWSServiceAccessForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAWSServiceAccessForOrganizationCommand extends $Command<ListAWSServiceAccessForOrganizationCommandInput, ListAWSServiceAccessForOrganizationCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: ListAWSServiceAccessForOrganizationCommandInput;
    constructor(input: ListAWSServiceAccessForOrganizationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAWSServiceAccessForOrganizationCommandInput, ListAWSServiceAccessForOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
