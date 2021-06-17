import { __extends } from "tslib";
import { StopMonitoringMembersRequest, StopMonitoringMembersResponse } from "../models/models_0";
import { deserializeAws_restJson1StopMonitoringMembersCommand, serializeAws_restJson1StopMonitoringMembersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops GuardDuty monitoring for the specified member accounts. Use the
 *         <code>StartMonitoringMembers</code> operation to restart monitoring for those
 *       accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, StopMonitoringMembersCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, StopMonitoringMembersCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new StopMonitoringMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopMonitoringMembersCommandInput} for command's `input` shape.
 * @see {@link StopMonitoringMembersCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopMonitoringMembersCommand = /** @class */ (function (_super) {
    __extends(StopMonitoringMembersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopMonitoringMembersCommand(input) {
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
    StopMonitoringMembersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "StopMonitoringMembersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopMonitoringMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopMonitoringMembersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopMonitoringMembersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StopMonitoringMembersCommand(input, context);
    };
    StopMonitoringMembersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StopMonitoringMembersCommand(output, context);
    };
    return StopMonitoringMembersCommand;
}($Command));
export { StopMonitoringMembersCommand };
//# sourceMappingURL=StopMonitoringMembersCommand.js.map