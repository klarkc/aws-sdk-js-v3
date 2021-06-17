import { __extends } from "tslib";
import { GetRemoteAccessSessionRequest, GetRemoteAccessSessionResult } from "../models/models_0";
import { deserializeAws_json1_1GetRemoteAccessSessionCommand, serializeAws_json1_1GetRemoteAccessSessionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a link to a currently running remote access session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetRemoteAccessSessionCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetRemoteAccessSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRemoteAccessSessionCommandInput} for command's `input` shape.
 * @see {@link GetRemoteAccessSessionCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRemoteAccessSessionCommand = /** @class */ (function (_super) {
    __extends(GetRemoteAccessSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRemoteAccessSessionCommand(input) {
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
    GetRemoteAccessSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "GetRemoteAccessSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRemoteAccessSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRemoteAccessSessionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRemoteAccessSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRemoteAccessSessionCommand(input, context);
    };
    GetRemoteAccessSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRemoteAccessSessionCommand(output, context);
    };
    return GetRemoteAccessSessionCommand;
}($Command));
export { GetRemoteAccessSessionCommand };
//# sourceMappingURL=GetRemoteAccessSessionCommand.js.map