import { __extends } from "tslib";
import { AcceptHandshakeRequest, AcceptHandshakeResponse } from "../models/models_0";
import { deserializeAws_json1_1AcceptHandshakeCommand, serializeAws_json1_1AcceptHandshakeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends a response to the originator of a handshake agreeing to the action proposed by
 *             the handshake request.</p>
 *         <p>This operation can be called only by the following principals when they also have the
 *             relevant IAM permissions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>Invitation to join</b> or <b>Approve all features request</b> handshakes: only a principal from
 *                     the member account.</p>
 *                 <p>The user who calls the API for an invitation to join must have the
 *                         <code>organizations:AcceptHandshake</code> permission. If you enabled all
 *                     features in the organization, the user must also have the
 *                         <code>iam:CreateServiceLinkedRole</code> permission so that AWS Organizations can
 *                     create the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For
 *                     more information, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integration_services.html#orgs_integration_service-linked-roles">AWS Organizations and Service-Linked Roles</a> in the
 *                         <i>AWS Organizations User Guide</i>.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Enable all features final confirmation</b>
 *                     handshake: only a principal from the management account.</p>
 *                 <p>For more information about invitations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html">Inviting an AWS Account to Join Your Organization</a> in the
 *                         <i>AWS Organizations User Guide.</i> For more information about requests to
 *                     enable all features in the organization, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling All Features in Your Organization</a> in
 *                     the <i>AWS Organizations User Guide.</i>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>After you accept a handshake, it continues to appear in the results of relevant APIs
 *             for only 30 days. After that, it's deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, AcceptHandshakeCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, AcceptHandshakeCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new AcceptHandshakeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptHandshakeCommandInput} for command's `input` shape.
 * @see {@link AcceptHandshakeCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AcceptHandshakeCommand = /** @class */ (function (_super) {
    __extends(AcceptHandshakeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcceptHandshakeCommand(input) {
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
    AcceptHandshakeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "AcceptHandshakeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcceptHandshakeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AcceptHandshakeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcceptHandshakeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AcceptHandshakeCommand(input, context);
    };
    AcceptHandshakeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AcceptHandshakeCommand(output, context);
    };
    return AcceptHandshakeCommand;
}($Command));
export { AcceptHandshakeCommand };
//# sourceMappingURL=AcceptHandshakeCommand.js.map