import { __extends } from "tslib";
import { GetDeviceDefinitionVersionRequest, GetDeviceDefinitionVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDeviceDefinitionVersionCommand, serializeAws_restJson1GetDeviceDefinitionVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves information about a device definition version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetDeviceDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetDeviceDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetDeviceDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeviceDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link GetDeviceDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDeviceDefinitionVersionCommand = /** @class */ (function (_super) {
    __extends(GetDeviceDefinitionVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDeviceDefinitionVersionCommand(input) {
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
    GetDeviceDefinitionVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "GetDeviceDefinitionVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDeviceDefinitionVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDeviceDefinitionVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDeviceDefinitionVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDeviceDefinitionVersionCommand(input, context);
    };
    GetDeviceDefinitionVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDeviceDefinitionVersionCommand(output, context);
    };
    return GetDeviceDefinitionVersionCommand;
}($Command));
export { GetDeviceDefinitionVersionCommand };
//# sourceMappingURL=GetDeviceDefinitionVersionCommand.js.map