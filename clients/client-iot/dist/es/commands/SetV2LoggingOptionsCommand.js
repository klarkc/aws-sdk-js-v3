import { __extends } from "tslib";
import { SetV2LoggingOptionsRequest } from "../models/models_2";
import { deserializeAws_restJson1SetV2LoggingOptionsCommand, serializeAws_restJson1SetV2LoggingOptionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the logging options for the V2 logging service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, SetV2LoggingOptionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, SetV2LoggingOptionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new SetV2LoggingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetV2LoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link SetV2LoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetV2LoggingOptionsCommand = /** @class */ (function (_super) {
    __extends(SetV2LoggingOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetV2LoggingOptionsCommand(input) {
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
    SetV2LoggingOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "SetV2LoggingOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetV2LoggingOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetV2LoggingOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SetV2LoggingOptionsCommand(input, context);
    };
    SetV2LoggingOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SetV2LoggingOptionsCommand(output, context);
    };
    return SetV2LoggingOptionsCommand;
}($Command));
export { SetV2LoggingOptionsCommand };
//# sourceMappingURL=SetV2LoggingOptionsCommand.js.map