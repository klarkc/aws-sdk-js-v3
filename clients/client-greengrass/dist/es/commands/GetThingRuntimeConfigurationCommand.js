import { __extends } from "tslib";
import { GetThingRuntimeConfigurationRequest, GetThingRuntimeConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1GetThingRuntimeConfigurationCommand, serializeAws_restJson1GetThingRuntimeConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Get the runtime configuration of a thing.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetThingRuntimeConfigurationCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetThingRuntimeConfigurationCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetThingRuntimeConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetThingRuntimeConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetThingRuntimeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetThingRuntimeConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetThingRuntimeConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetThingRuntimeConfigurationCommand(input) {
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
    GetThingRuntimeConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "GetThingRuntimeConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetThingRuntimeConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetThingRuntimeConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetThingRuntimeConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetThingRuntimeConfigurationCommand(input, context);
    };
    GetThingRuntimeConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetThingRuntimeConfigurationCommand(output, context);
    };
    return GetThingRuntimeConfigurationCommand;
}($Command));
export { GetThingRuntimeConfigurationCommand };
//# sourceMappingURL=GetThingRuntimeConfigurationCommand.js.map