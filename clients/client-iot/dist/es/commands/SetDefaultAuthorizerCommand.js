import { __extends } from "tslib";
import { SetDefaultAuthorizerRequest, SetDefaultAuthorizerResponse } from "../models/models_2";
import { deserializeAws_restJson1SetDefaultAuthorizerCommand, serializeAws_restJson1SetDefaultAuthorizerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the default authorizer. This will be used if a websocket connection is made
 *          without specifying an authorizer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, SetDefaultAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, SetDefaultAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new SetDefaultAuthorizerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetDefaultAuthorizerCommandInput} for command's `input` shape.
 * @see {@link SetDefaultAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetDefaultAuthorizerCommand = /** @class */ (function (_super) {
    __extends(SetDefaultAuthorizerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetDefaultAuthorizerCommand(input) {
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
    SetDefaultAuthorizerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "SetDefaultAuthorizerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetDefaultAuthorizerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SetDefaultAuthorizerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetDefaultAuthorizerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SetDefaultAuthorizerCommand(input, context);
    };
    SetDefaultAuthorizerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SetDefaultAuthorizerCommand(output, context);
    };
    return SetDefaultAuthorizerCommand;
}($Command));
export { SetDefaultAuthorizerCommand };
//# sourceMappingURL=SetDefaultAuthorizerCommand.js.map