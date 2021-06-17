"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveAccountFromOrganizationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Removes the specified account from the organization.</p>
 *         <p>The removed account becomes a standalone account that isn't a member of any
 *             organization. It's no longer subject to any policies and is responsible for its own bill
 *             payments. The organization's management account is no longer charged for any expenses
 *             accrued by the member account after it's removed from the organization.</p>
 *         <p>This operation can be called only from the organization's management account. Member accounts can remove themselves with <a>LeaveOrganization</a> instead.</p>
 *         <important>
 *             <ul>
 *                <li>
 *                     <p>You can remove an account from your organization only if the account is
 *                         configured with the information required to operate as a standalone account.
 *                         When you create an account in an organization using the AWS Organizations console,
 *                         API, or CLI commands, the information required of standalone accounts is
 *                             <i>not</i> automatically collected. For an account that
 *                         you want to make standalone, you must choose a support plan, provide and
 *                         verify the required contact information, and provide a current payment
 *                         method. AWS uses the payment method to charge for any billable (not free
 *                         tier) AWS activity that occurs while the account isn't attached to an
 *                         organization. To remove an account that doesn't yet have this information,
 *                         you must sign in as the member account and follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization when all required account information has not
 *                             yet been provided</a> in the
 *                         <i>AWS Organizations User Guide.</i>
 *                   </p>
 *                 </li>
 *                <li>
 *                     <p>The account that you want to leave must not be a delegated administrator
 *                         account for any AWS service enabled for your organization. If the account
 *                         is a delegated administrator, you must first change the delegated
 *                         administrator account to another account that is remaining in the
 *                         organization.</p>
 *                 </li>
 *                <li>
 *                     <p>After the account leaves the organization, all tags that were attached to
 *                         the account object in the organization are deleted. AWS accounts outside
 *                         of an organization do not support tags.</p>
 *                 </li>
 *             </ul>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, RemoveAccountFromOrganizationCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, RemoveAccountFromOrganizationCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new RemoveAccountFromOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveAccountFromOrganizationCommandInput} for command's `input` shape.
 * @see {@link RemoveAccountFromOrganizationCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RemoveAccountFromOrganizationCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "OrganizationsClient";
        const commandName = "RemoveAccountFromOrganizationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RemoveAccountFromOrganizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1RemoveAccountFromOrganizationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1RemoveAccountFromOrganizationCommand(output, context);
    }
}
exports.RemoveAccountFromOrganizationCommand = RemoveAccountFromOrganizationCommand;
//# sourceMappingURL=RemoveAccountFromOrganizationCommand.js.map