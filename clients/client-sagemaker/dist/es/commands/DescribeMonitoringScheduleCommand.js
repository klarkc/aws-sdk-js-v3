import { __extends } from "tslib";
import { DescribeMonitoringScheduleRequest, DescribeMonitoringScheduleResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeMonitoringScheduleCommand, serializeAws_json1_1DescribeMonitoringScheduleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the schedule for a monitoring job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeMonitoringScheduleCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeMonitoringScheduleCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeMonitoringScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMonitoringScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeMonitoringScheduleCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeMonitoringScheduleCommand = /** @class */ (function (_super) {
    __extends(DescribeMonitoringScheduleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeMonitoringScheduleCommand(input) {
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
    DescribeMonitoringScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeMonitoringScheduleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMonitoringScheduleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMonitoringScheduleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMonitoringScheduleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeMonitoringScheduleCommand(input, context);
    };
    DescribeMonitoringScheduleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeMonitoringScheduleCommand(output, context);
    };
    return DescribeMonitoringScheduleCommand;
}($Command));
export { DescribeMonitoringScheduleCommand };
//# sourceMappingURL=DescribeMonitoringScheduleCommand.js.map