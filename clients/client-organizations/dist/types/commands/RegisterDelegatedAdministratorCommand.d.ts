import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { RegisterDelegatedAdministratorRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RegisterDelegatedAdministratorCommandInput extends RegisterDelegatedAdministratorRequest {
}
export interface RegisterDelegatedAdministratorCommandOutput extends __MetadataBearer {
}
/**
 * <p>Enables the specified member account to administer the Organizations features of the specified
 *             AWS service. It grants read-only access to AWS Organizations service data. The account still
 *             requires IAM permissions to access and administer the AWS service.</p>
 *         <p>You can run this action only for AWS services that support this
 *     feature. For a current list of services that support it, see the column <i>Supports
 *     Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">AWS Services that you can use with
 *     AWS Organizations</a> in the <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, RegisterDelegatedAdministratorCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, RegisterDelegatedAdministratorCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new RegisterDelegatedAdministratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterDelegatedAdministratorCommandInput} for command's `input` shape.
 * @see {@link RegisterDelegatedAdministratorCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterDelegatedAdministratorCommand extends $Command<RegisterDelegatedAdministratorCommandInput, RegisterDelegatedAdministratorCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: RegisterDelegatedAdministratorCommandInput;
    constructor(input: RegisterDelegatedAdministratorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterDelegatedAdministratorCommandInput, RegisterDelegatedAdministratorCommandOutput>;
    private serialize;
    private deserialize;
}
