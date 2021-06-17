import { __extends } from "tslib";
import { DeleteSuiteDefinitionRequest, DeleteSuiteDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteSuiteDefinitionCommand, serializeAws_restJson1DeleteSuiteDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a Device Advisor test suite.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, DeleteSuiteDefinitionCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, DeleteSuiteDefinitionCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const command = new DeleteSuiteDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSuiteDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteSuiteDefinitionCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSuiteDefinitionCommand = /** @class */ (function (_super) {
    __extends(DeleteSuiteDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSuiteDefinitionCommand(input) {
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
    DeleteSuiteDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IotDeviceAdvisorClient";
        var commandName = "DeleteSuiteDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSuiteDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteSuiteDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSuiteDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteSuiteDefinitionCommand(input, context);
    };
    DeleteSuiteDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteSuiteDefinitionCommand(output, context);
    };
    return DeleteSuiteDefinitionCommand;
}($Command));
export { DeleteSuiteDefinitionCommand };
//# sourceMappingURL=DeleteSuiteDefinitionCommand.js.map