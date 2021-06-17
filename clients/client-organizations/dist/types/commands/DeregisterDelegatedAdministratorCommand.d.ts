import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DeregisterDelegatedAdministratorRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeregisterDelegatedAdministratorCommandInput extends DeregisterDelegatedAdministratorRequest {
}
export interface DeregisterDelegatedAdministratorCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes the specified member AWS account as a delegated administrator for the
 *             specified AWS service.</p>
 *         <important>
 *             <p>Deregistering a delegated administrator can have unintended impacts on the
 *                 functionality of the enabled AWS service. See the documentation for the enabled
 *                 service before you deregister a delegated administrator so that you understand any
 *                 potential impacts.</p>
 *         </important>
 *         <p>You can run this action only for AWS services that support this
 *     feature. For a current list of services that support it, see the column <i>Supports
 *     Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">AWS Services that you can use with
 *     AWS Organizations</a> in the <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DeregisterDelegatedAdministratorCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DeregisterDelegatedAdministratorCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DeregisterDelegatedAdministratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterDelegatedAdministratorCommandInput} for command's `input` shape.
 * @see {@link DeregisterDelegatedAdministratorCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterDelegatedAdministratorCommand extends $Command<DeregisterDelegatedAdministratorCommandInput, DeregisterDelegatedAdministratorCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: DeregisterDelegatedAdministratorCommandInput;
    constructor(input: DeregisterDelegatedAdministratorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterDelegatedAdministratorCommandInput, DeregisterDelegatedAdministratorCommandOutput>;
    private serialize;
    private deserialize;
}
