import { __extends } from "tslib";
import { GetLoggingOptionsRequest, GetLoggingOptionsResponse } from "../models/models_1";
import { deserializeAws_restJson1GetLoggingOptionsCommand, serializeAws_restJson1GetLoggingOptionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the logging options.</p>
 *          <p>NOTE: use of this command is not recommended. Use <code>GetV2LoggingOptions</code>
 *          instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetLoggingOptionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetLoggingOptionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetLoggingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link GetLoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLoggingOptionsCommand = /** @class */ (function (_super) {
    __extends(GetLoggingOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLoggingOptionsCommand(input) {
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
    GetLoggingOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "GetLoggingOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLoggingOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLoggingOptionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLoggingOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetLoggingOptionsCommand(input, context);
    };
    GetLoggingOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetLoggingOptionsCommand(output, context);
    };
    return GetLoggingOptionsCommand;
}($Command));
export { GetLoggingOptionsCommand };
//# sourceMappingURL=GetLoggingOptionsCommand.js.map