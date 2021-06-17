import { __extends } from "tslib";
import { UpdateSuiteDefinitionRequest, UpdateSuiteDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateSuiteDefinitionCommand, serializeAws_restJson1UpdateSuiteDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a Device Advisor test suite.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, UpdateSuiteDefinitionCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, UpdateSuiteDefinitionCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const command = new UpdateSuiteDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSuiteDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateSuiteDefinitionCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSuiteDefinitionCommand = /** @class */ (function (_super) {
    __extends(UpdateSuiteDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSuiteDefinitionCommand(input) {
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
    UpdateSuiteDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IotDeviceAdvisorClient";
        var commandName = "UpdateSuiteDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSuiteDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSuiteDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSuiteDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateSuiteDefinitionCommand(input, context);
    };
    UpdateSuiteDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateSuiteDefinitionCommand(output, context);
    };
    return UpdateSuiteDefinitionCommand;
}($Command));
export { UpdateSuiteDefinitionCommand };
//# sourceMappingURL=UpdateSuiteDefinitionCommand.js.map