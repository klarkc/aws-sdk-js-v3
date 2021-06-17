import { __extends } from "tslib";
import { StopRemoteAccessSessionRequest, StopRemoteAccessSessionResult } from "../models/models_0";
import { deserializeAws_json1_1StopRemoteAccessSessionCommand, serializeAws_json1_1StopRemoteAccessSessionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Ends a specified remote access session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, StopRemoteAccessSessionCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, StopRemoteAccessSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new StopRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopRemoteAccessSessionCommandInput} for command's `input` shape.
 * @see {@link StopRemoteAccessSessionCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopRemoteAccessSessionCommand = /** @class */ (function (_super) {
    __extends(StopRemoteAccessSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopRemoteAccessSessionCommand(input) {
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
    StopRemoteAccessSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "StopRemoteAccessSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopRemoteAccessSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopRemoteAccessSessionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopRemoteAccessSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopRemoteAccessSessionCommand(input, context);
    };
    StopRemoteAccessSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopRemoteAccessSessionCommand(output, context);
    };
    return StopRemoteAccessSessionCommand;
}($Command));
export { StopRemoteAccessSessionCommand };
//# sourceMappingURL=StopRemoteAccessSessionCommand.js.map