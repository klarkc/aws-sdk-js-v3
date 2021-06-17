import { __extends } from "tslib";
import { CreateSuiteDefinitionRequest, CreateSuiteDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateSuiteDefinitionCommand, serializeAws_restJson1CreateSuiteDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Device Advisor test suite.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, CreateSuiteDefinitionCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, CreateSuiteDefinitionCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const command = new CreateSuiteDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSuiteDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateSuiteDefinitionCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSuiteDefinitionCommand = /** @class */ (function (_super) {
    __extends(CreateSuiteDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSuiteDefinitionCommand(input) {
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
    CreateSuiteDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IotDeviceAdvisorClient";
        var commandName = "CreateSuiteDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSuiteDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSuiteDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSuiteDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateSuiteDefinitionCommand(input, context);
    };
    CreateSuiteDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateSuiteDefinitionCommand(output, context);
    };
    return CreateSuiteDefinitionCommand;
}($Command));
export { CreateSuiteDefinitionCommand };
//# sourceMappingURL=CreateSuiteDefinitionCommand.js.map