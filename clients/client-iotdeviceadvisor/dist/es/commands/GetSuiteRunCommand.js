import { __extends } from "tslib";
import { GetSuiteRunRequest, GetSuiteRunResponse } from "../models/models_0";
import { deserializeAws_restJson1GetSuiteRunCommand, serializeAws_restJson1GetSuiteRunCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a Device Advisor test suite run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, GetSuiteRunCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, GetSuiteRunCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const command = new GetSuiteRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSuiteRunCommandInput} for command's `input` shape.
 * @see {@link GetSuiteRunCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSuiteRunCommand = /** @class */ (function (_super) {
    __extends(GetSuiteRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSuiteRunCommand(input) {
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
    GetSuiteRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IotDeviceAdvisorClient";
        var commandName = "GetSuiteRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSuiteRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSuiteRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSuiteRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSuiteRunCommand(input, context);
    };
    GetSuiteRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSuiteRunCommand(output, context);
    };
    return GetSuiteRunCommand;
}($Command));
export { GetSuiteRunCommand };
//# sourceMappingURL=GetSuiteRunCommand.js.map