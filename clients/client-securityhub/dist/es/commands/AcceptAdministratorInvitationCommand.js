import { __extends } from "tslib";
import { AcceptAdministratorInvitationRequest, AcceptAdministratorInvitationResponse } from "../models/models_0";
import { deserializeAws_restJson1AcceptAdministratorInvitationCommand, serializeAws_restJson1AcceptAdministratorInvitationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Accepts the invitation to be a member account and be monitored by the Security Hub administrator
 *          account that the invitation was sent from.</p>
 *          <p>This operation is only used by member accounts that are not added through
 *          Organizations.</p>
 *          <p>When the member account accepts the invitation, permission is granted to the administrator
 *          account to view findings generated in the member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, AcceptAdministratorInvitationCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, AcceptAdministratorInvitationCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new AcceptAdministratorInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptAdministratorInvitationCommandInput} for command's `input` shape.
 * @see {@link AcceptAdministratorInvitationCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AcceptAdministratorInvitationCommand = /** @class */ (function (_super) {
    __extends(AcceptAdministratorInvitationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcceptAdministratorInvitationCommand(input) {
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
    AcceptAdministratorInvitationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "AcceptAdministratorInvitationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcceptAdministratorInvitationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AcceptAdministratorInvitationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcceptAdministratorInvitationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AcceptAdministratorInvitationCommand(input, context);
    };
    AcceptAdministratorInvitationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AcceptAdministratorInvitationCommand(output, context);
    };
    return AcceptAdministratorInvitationCommand;
}($Command));
export { AcceptAdministratorInvitationCommand };
//# sourceMappingURL=AcceptAdministratorInvitationCommand.js.map