import { __extends } from "tslib";
import { StartMonitoringScheduleRequest } from "../models/models_2";
import { deserializeAws_json1_1StartMonitoringScheduleCommand, serializeAws_json1_1StartMonitoringScheduleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a previously stopped monitoring schedule.</p>
 *          <note>
 *             <p>By default, when you successfully create a new schedule, the status of a monitoring
 *             schedule is <code>scheduled</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StartMonitoringScheduleCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StartMonitoringScheduleCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StartMonitoringScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMonitoringScheduleCommandInput} for command's `input` shape.
 * @see {@link StartMonitoringScheduleCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartMonitoringScheduleCommand = /** @class */ (function (_super) {
    __extends(StartMonitoringScheduleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartMonitoringScheduleCommand(input) {
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
    StartMonitoringScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "StartMonitoringScheduleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartMonitoringScheduleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartMonitoringScheduleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartMonitoringScheduleCommand(input, context);
    };
    StartMonitoringScheduleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartMonitoringScheduleCommand(output, context);
    };
    return StartMonitoringScheduleCommand;
}($Command));
export { StartMonitoringScheduleCommand };
//# sourceMappingURL=StartMonitoringScheduleCommand.js.map