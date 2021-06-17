"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteAccountToOrganizationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Sends an invitation to another account to join your organization as a member account.
 *             AWS Organizations sends email on your behalf to the email address that is associated with the
 *             other account's owner. The invitation is implemented as a <a>Handshake</a>
 *             whose details are in the response.</p>
 *         <important>
 *             <ul>
 *                <li>
 *                     <p>You can invite AWS accounts only from the same seller as the management
 *                         account. For example, if your organization's management account was created
 *                         by Amazon Internet Services Pvt. Ltd (AISPL), an AWS seller in India, you
 *                         can invite only other AISPL accounts to your organization. You can't combine
 *                         accounts from AISPL and AWS or from any other AWS seller. For more
 *                         information, see <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/useconsolidatedbilliing-India.html">Consolidated
 *                             Billing in India</a>.</p>
 *                 </li>
 *                <li>
 *                     <p>If you receive an exception that indicates that you exceeded your account
 *                         limits for the organization or that the operation failed because your
 *                         organization is still initializing, wait one hour and then try again. If the
 *                         error persists after an hour, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Support</a>.</p>
 *                 </li>
 *             </ul>
 *         </important>
 *         <p>If the request includes tags, then the requester must have the
 *                 <code>organizations:TagResource</code> permission.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, InviteAccountToOrganizationCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, InviteAccountToOrganizationCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new InviteAccountToOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InviteAccountToOrganizationCommandInput} for command's `input` shape.
 * @see {@link InviteAccountToOrganizationCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
class InviteAccountToOrganizationCommand extends smithy_client_1.Command {
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
        const commandName = "InviteAccountToOrganizationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.InviteAccountToOrganizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.InviteAccountToOrganizationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1InviteAccountToOrganizationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1InviteAccountToOrganizationCommand(output, context);
    }
}
exports.InviteAccountToOrganizationCommand = InviteAccountToOrganizationCommand;
//# sourceMappingURL=InviteAccountToOrganizationCommand.js.map