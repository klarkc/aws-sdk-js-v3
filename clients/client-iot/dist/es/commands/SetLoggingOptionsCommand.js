import { __extends } from "tslib";
import { SetLoggingOptionsRequest } from "../models/models_2";
import { deserializeAws_restJson1SetLoggingOptionsCommand, serializeAws_restJson1SetLoggingOptionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the logging options.</p>
 *          <p>NOTE: use of this command is not recommended. Use <code>SetV2LoggingOptions</code>
 *          instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, SetLoggingOptionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, SetLoggingOptionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new SetLoggingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetLoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link SetLoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetLoggingOptionsCommand = /** @class */ (function (_super) {
    __extends(SetLoggingOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetLoggingOptionsCommand(input) {
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
    SetLoggingOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "SetLoggingOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetLoggingOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetLoggingOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SetLoggingOptionsCommand(input, context);
    };
    SetLoggingOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SetLoggingOptionsCommand(output, context);
    };
    return SetLoggingOptionsCommand;
}($Command));
export { SetLoggingOptionsCommand };
//# sourceMappingURL=SetLoggingOptionsCommand.js.map