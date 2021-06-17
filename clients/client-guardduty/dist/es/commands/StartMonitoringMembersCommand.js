import { __extends } from "tslib";
import { StartMonitoringMembersRequest, StartMonitoringMembersResponse } from "../models/models_0";
import { deserializeAws_restJson1StartMonitoringMembersCommand, serializeAws_restJson1StartMonitoringMembersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Turns on GuardDuty monitoring of the specified member accounts. Use this operation to
 *       restart monitoring of accounts that you stopped monitoring with the
 *         <code>StopMonitoringMembers</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, StartMonitoringMembersCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, StartMonitoringMembersCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new StartMonitoringMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMonitoringMembersCommandInput} for command's `input` shape.
 * @see {@link StartMonitoringMembersCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartMonitoringMembersCommand = /** @class */ (function (_super) {
    __extends(StartMonitoringMembersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartMonitoringMembersCommand(input) {
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
    StartMonitoringMembersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "StartMonitoringMembersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartMonitoringMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartMonitoringMembersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartMonitoringMembersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartMonitoringMembersCommand(input, context);
    };
    StartMonitoringMembersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartMonitoringMembersCommand(output, context);
    };
    return StartMonitoringMembersCommand;
}($Command));
export { StartMonitoringMembersCommand };
//# sourceMappingURL=StartMonitoringMembersCommand.js.map