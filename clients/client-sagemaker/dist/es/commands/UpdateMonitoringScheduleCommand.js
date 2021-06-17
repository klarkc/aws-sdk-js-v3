import { __extends } from "tslib";
import { UpdateMonitoringScheduleRequest, UpdateMonitoringScheduleResponse } from "../models/models_2";
import { deserializeAws_json1_1UpdateMonitoringScheduleCommand, serializeAws_json1_1UpdateMonitoringScheduleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a previously created schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateMonitoringScheduleCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateMonitoringScheduleCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateMonitoringScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMonitoringScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateMonitoringScheduleCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMonitoringScheduleCommand = /** @class */ (function (_super) {
    __extends(UpdateMonitoringScheduleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateMonitoringScheduleCommand(input) {
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
    UpdateMonitoringScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdateMonitoringScheduleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMonitoringScheduleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateMonitoringScheduleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMonitoringScheduleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateMonitoringScheduleCommand(input, context);
    };
    UpdateMonitoringScheduleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateMonitoringScheduleCommand(output, context);
    };
    return UpdateMonitoringScheduleCommand;
}($Command));
export { UpdateMonitoringScheduleCommand };
//# sourceMappingURL=UpdateMonitoringScheduleCommand.js.map