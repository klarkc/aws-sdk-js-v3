import { __extends } from "tslib";
import { CreateDeviceDefinitionVersionRequest, CreateDeviceDefinitionVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateDeviceDefinitionVersionCommand, serializeAws_restJson1CreateDeviceDefinitionVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a version of a device definition that has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateDeviceDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateDeviceDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateDeviceDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeviceDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateDeviceDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDeviceDefinitionVersionCommand = /** @class */ (function (_super) {
    __extends(CreateDeviceDefinitionVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDeviceDefinitionVersionCommand(input) {
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
    CreateDeviceDefinitionVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "CreateDeviceDefinitionVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDeviceDefinitionVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDeviceDefinitionVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDeviceDefinitionVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateDeviceDefinitionVersionCommand(input, context);
    };
    CreateDeviceDefinitionVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDeviceDefinitionVersionCommand(output, context);
    };
    return CreateDeviceDefinitionVersionCommand;
}($Command));
export { CreateDeviceDefinitionVersionCommand };
//# sourceMappingURL=CreateDeviceDefinitionVersionCommand.js.map