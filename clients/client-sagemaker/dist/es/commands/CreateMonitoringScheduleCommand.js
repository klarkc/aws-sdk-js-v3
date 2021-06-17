import { __extends } from "tslib";
import { CreateMonitoringScheduleRequest, CreateMonitoringScheduleResponse } from "../models/models_1";
import { deserializeAws_json1_1CreateMonitoringScheduleCommand, serializeAws_json1_1CreateMonitoringScheduleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a schedule that regularly starts Amazon SageMaker Processing Jobs to monitor the data
 *          captured for an Amazon SageMaker Endoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateMonitoringScheduleCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateMonitoringScheduleCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateMonitoringScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMonitoringScheduleCommandInput} for command's `input` shape.
 * @see {@link CreateMonitoringScheduleCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateMonitoringScheduleCommand = /** @class */ (function (_super) {
    __extends(CreateMonitoringScheduleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateMonitoringScheduleCommand(input) {
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
    CreateMonitoringScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateMonitoringScheduleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateMonitoringScheduleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateMonitoringScheduleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateMonitoringScheduleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateMonitoringScheduleCommand(input, context);
    };
    CreateMonitoringScheduleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateMonitoringScheduleCommand(output, context);
    };
    return CreateMonitoringScheduleCommand;
}($Command));
export { CreateMonitoringScheduleCommand };
//# sourceMappingURL=CreateMonitoringScheduleCommand.js.map