import { __extends } from "tslib";
import { GetV2LoggingOptionsRequest, GetV2LoggingOptionsResponse } from "../models/models_1";
import { deserializeAws_restJson1GetV2LoggingOptionsCommand, serializeAws_restJson1GetV2LoggingOptionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the fine grained logging options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetV2LoggingOptionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetV2LoggingOptionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetV2LoggingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetV2LoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link GetV2LoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetV2LoggingOptionsCommand = /** @class */ (function (_super) {
    __extends(GetV2LoggingOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetV2LoggingOptionsCommand(input) {
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
    GetV2LoggingOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "GetV2LoggingOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetV2LoggingOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetV2LoggingOptionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetV2LoggingOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetV2LoggingOptionsCommand(input, context);
    };
    GetV2LoggingOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetV2LoggingOptionsCommand(output, context);
    };
    return GetV2LoggingOptionsCommand;
}($Command));
export { GetV2LoggingOptionsCommand };
//# sourceMappingURL=GetV2LoggingOptionsCommand.js.map