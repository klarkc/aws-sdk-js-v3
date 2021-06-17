import { __extends } from "tslib";
import { SetV2LoggingLevelRequest } from "../models/models_2";
import { deserializeAws_restJson1SetV2LoggingLevelCommand, serializeAws_restJson1SetV2LoggingLevelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the logging level.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, SetV2LoggingLevelCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, SetV2LoggingLevelCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new SetV2LoggingLevelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetV2LoggingLevelCommandInput} for command's `input` shape.
 * @see {@link SetV2LoggingLevelCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetV2LoggingLevelCommand = /** @class */ (function (_super) {
    __extends(SetV2LoggingLevelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetV2LoggingLevelCommand(input) {
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
    SetV2LoggingLevelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "SetV2LoggingLevelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetV2LoggingLevelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetV2LoggingLevelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SetV2LoggingLevelCommand(input, context);
    };
    SetV2LoggingLevelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SetV2LoggingLevelCommand(output, context);
    };
    return SetV2LoggingLevelCommand;
}($Command));
export { SetV2LoggingLevelCommand };
//# sourceMappingURL=SetV2LoggingLevelCommand.js.map