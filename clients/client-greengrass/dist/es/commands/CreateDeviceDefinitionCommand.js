import { __extends } from "tslib";
import { CreateDeviceDefinitionRequest, CreateDeviceDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateDeviceDefinitionCommand, serializeAws_restJson1CreateDeviceDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateDeviceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateDeviceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateDeviceDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeviceDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateDeviceDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDeviceDefinitionCommand = /** @class */ (function (_super) {
    __extends(CreateDeviceDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDeviceDefinitionCommand(input) {
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
    CreateDeviceDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "CreateDeviceDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDeviceDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDeviceDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDeviceDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateDeviceDefinitionCommand(input, context);
    };
    CreateDeviceDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDeviceDefinitionCommand(output, context);
    };
    return CreateDeviceDefinitionCommand;
}($Command));
export { CreateDeviceDefinitionCommand };
//# sourceMappingURL=CreateDeviceDefinitionCommand.js.map