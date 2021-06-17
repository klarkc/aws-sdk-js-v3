import { __extends } from "tslib";
import { DeleteMonitoringScheduleRequest } from "../models/models_1";
import { deserializeAws_json1_1DeleteMonitoringScheduleCommand, serializeAws_json1_1DeleteMonitoringScheduleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a monitoring schedule. Also stops the schedule had not already been stopped.
 *          This does not delete the job execution history of the monitoring schedule. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteMonitoringScheduleCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteMonitoringScheduleCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteMonitoringScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMonitoringScheduleCommandInput} for command's `input` shape.
 * @see {@link DeleteMonitoringScheduleCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMonitoringScheduleCommand = /** @class */ (function (_super) {
    __extends(DeleteMonitoringScheduleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteMonitoringScheduleCommand(input) {
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
    DeleteMonitoringScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteMonitoringScheduleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteMonitoringScheduleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteMonitoringScheduleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteMonitoringScheduleCommand(input, context);
    };
    DeleteMonitoringScheduleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteMonitoringScheduleCommand(output, context);
    };
    return DeleteMonitoringScheduleCommand;
}($Command));
export { DeleteMonitoringScheduleCommand };
//# sourceMappingURL=DeleteMonitoringScheduleCommand.js.map