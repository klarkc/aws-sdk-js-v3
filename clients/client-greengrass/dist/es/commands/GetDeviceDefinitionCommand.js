import { __extends } from "tslib";
import { GetDeviceDefinitionRequest, GetDeviceDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDeviceDefinitionCommand, serializeAws_restJson1GetDeviceDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves information about a device definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetDeviceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetDeviceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetDeviceDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeviceDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetDeviceDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDeviceDefinitionCommand = /** @class */ (function (_super) {
    __extends(GetDeviceDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDeviceDefinitionCommand(input) {
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
    GetDeviceDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "GetDeviceDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDeviceDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDeviceDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDeviceDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDeviceDefinitionCommand(input, context);
    };
    GetDeviceDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDeviceDefinitionCommand(output, context);
    };
    return GetDeviceDefinitionCommand;
}($Command));
export { GetDeviceDefinitionCommand };
//# sourceMappingURL=GetDeviceDefinitionCommand.js.map