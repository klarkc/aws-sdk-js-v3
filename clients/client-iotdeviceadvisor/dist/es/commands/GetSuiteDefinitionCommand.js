import { __extends } from "tslib";
import { GetSuiteDefinitionRequest, GetSuiteDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetSuiteDefinitionCommand, serializeAws_restJson1GetSuiteDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a Device Advisor test suite.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, GetSuiteDefinitionCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, GetSuiteDefinitionCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const command = new GetSuiteDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSuiteDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetSuiteDefinitionCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSuiteDefinitionCommand = /** @class */ (function (_super) {
    __extends(GetSuiteDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSuiteDefinitionCommand(input) {
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
    GetSuiteDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IotDeviceAdvisorClient";
        var commandName = "GetSuiteDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSuiteDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSuiteDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSuiteDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSuiteDefinitionCommand(input, context);
    };
    GetSuiteDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSuiteDefinitionCommand(output, context);
    };
    return GetSuiteDefinitionCommand;
}($Command));
export { GetSuiteDefinitionCommand };
//# sourceMappingURL=GetSuiteDefinitionCommand.js.map