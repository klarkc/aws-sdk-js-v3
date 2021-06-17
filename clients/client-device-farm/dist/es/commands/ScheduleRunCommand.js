import { __extends } from "tslib";
import { ScheduleRunRequest, ScheduleRunResult } from "../models/models_0";
import { deserializeAws_json1_1ScheduleRunCommand, serializeAws_json1_1ScheduleRunCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Schedules a run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ScheduleRunCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ScheduleRunCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ScheduleRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ScheduleRunCommandInput} for command's `input` shape.
 * @see {@link ScheduleRunCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ScheduleRunCommand = /** @class */ (function (_super) {
    __extends(ScheduleRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ScheduleRunCommand(input) {
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
    ScheduleRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "ScheduleRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ScheduleRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ScheduleRunResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ScheduleRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ScheduleRunCommand(input, context);
    };
    ScheduleRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ScheduleRunCommand(output, context);
    };
    return ScheduleRunCommand;
}($Command));
export { ScheduleRunCommand };
//# sourceMappingURL=ScheduleRunCommand.js.map