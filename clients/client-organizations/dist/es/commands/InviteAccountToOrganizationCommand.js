import { __extends } from "tslib";
import { InviteAccountToOrganizationRequest, InviteAccountToOrganizationResponse } from "../models/models_0";
import { deserializeAws_json1_1InviteAccountToOrganizationCommand, serializeAws_json1_1InviteAccountToOrganizationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var InviteAccountToOrganizationCommand = /** @class */ (function (_super) {
    __extends(InviteAccountToOrganizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function InviteAccountToOrganizationCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    InviteAccountToOrganizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "InviteAccountToOrganizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: InviteAccountToOrganizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: InviteAccountToOrganizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    InviteAccountToOrganizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1InviteAccountToOrganizationCommand(input, context);
    };
    InviteAccountToOrganizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1InviteAccountToOrganizationCommand(output, context);
    };
    return InviteAccountToOrganizationCommand;
}($Command));
export { InviteAccountToOrganizationCommand };
//# sourceMappingURL=InviteAccountToOrganizationCommand.js.map