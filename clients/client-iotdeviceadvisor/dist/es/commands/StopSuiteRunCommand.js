import { __extends } from "tslib";
import { StopSuiteRunRequest, StopSuiteRunResponse } from "../models/models_0";
import { deserializeAws_restJson1StopSuiteRunCommand, serializeAws_restJson1StopSuiteRunCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a Device Advisor test suite run that is currently running.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, StopSuiteRunCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, StopSuiteRunCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const command = new StopSuiteRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopSuiteRunCommandInput} for command's `input` shape.
 * @see {@link StopSuiteRunCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopSuiteRunCommand = /** @class */ (function (_super) {
    __extends(StopSuiteRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopSuiteRunCommand(input) {
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
    StopSuiteRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IotDeviceAdvisorClient";
        var commandName = "StopSuiteRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopSuiteRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopSuiteRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopSuiteRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StopSuiteRunCommand(input, context);
    };
    StopSuiteRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StopSuiteRunCommand(output, context);
    };
    return StopSuiteRunCommand;
}($Command));
export { StopSuiteRunCommand };
//# sourceMappingURL=StopSuiteRunCommand.js.map