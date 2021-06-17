import { __extends } from "tslib";
import { AcceptInvitationRequest, AcceptInvitationResponse } from "../models/models_0";
import { deserializeAws_restJson1AcceptInvitationCommand, serializeAws_restJson1AcceptInvitationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Accepts the invitation to be monitored by a GuardDuty administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, AcceptInvitationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, AcceptInvitationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new AcceptInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptInvitationCommandInput} for command's `input` shape.
 * @see {@link AcceptInvitationCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AcceptInvitationCommand = /** @class */ (function (_super) {
    __extends(AcceptInvitationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcceptInvitationCommand(input) {
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
    AcceptInvitationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "AcceptInvitationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcceptInvitationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AcceptInvitationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcceptInvitationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AcceptInvitationCommand(input, context);
    };
    AcceptInvitationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AcceptInvitationCommand(output, context);
    };
    return AcceptInvitationCommand;
}($Command));
export { AcceptInvitationCommand };
//# sourceMappingURL=AcceptInvitationCommand.js.map