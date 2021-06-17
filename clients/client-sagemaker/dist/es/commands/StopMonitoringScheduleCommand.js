import { __extends } from "tslib";
import { StopMonitoringScheduleRequest } from "../models/models_2";
import { deserializeAws_json1_1StopMonitoringScheduleCommand, serializeAws_json1_1StopMonitoringScheduleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a previously started monitoring schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopMonitoringScheduleCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopMonitoringScheduleCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopMonitoringScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopMonitoringScheduleCommandInput} for command's `input` shape.
 * @see {@link StopMonitoringScheduleCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopMonitoringScheduleCommand = /** @class */ (function (_super) {
    __extends(StopMonitoringScheduleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopMonitoringScheduleCommand(input) {
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
    StopMonitoringScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "StopMonitoringScheduleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopMonitoringScheduleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopMonitoringScheduleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopMonitoringScheduleCommand(input, context);
    };
    StopMonitoringScheduleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopMonitoringScheduleCommand(output, context);
    };
    return StopMonitoringScheduleCommand;
}($Command));
export { StopMonitoringScheduleCommand };
//# sourceMappingURL=StopMonitoringScheduleCommand.js.map