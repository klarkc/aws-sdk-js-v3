import { __extends } from "tslib";
import { InstallToRemoteAccessSessionRequest, InstallToRemoteAccessSessionResult } from "../models/models_0";
import { deserializeAws_json1_1InstallToRemoteAccessSessionCommand, serializeAws_json1_1InstallToRemoteAccessSessionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Installs an application to the device in a remote access session. For Android
 *             applications, the file must be in .apk format. For iOS applications, the file must be in
 *             .ipa format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, InstallToRemoteAccessSessionCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, InstallToRemoteAccessSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new InstallToRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InstallToRemoteAccessSessionCommandInput} for command's `input` shape.
 * @see {@link InstallToRemoteAccessSessionCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var InstallToRemoteAccessSessionCommand = /** @class */ (function (_super) {
    __extends(InstallToRemoteAccessSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function InstallToRemoteAccessSessionCommand(input) {
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
    InstallToRemoteAccessSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "InstallToRemoteAccessSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: InstallToRemoteAccessSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: InstallToRemoteAccessSessionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    InstallToRemoteAccessSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1InstallToRemoteAccessSessionCommand(input, context);
    };
    InstallToRemoteAccessSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1InstallToRemoteAccessSessionCommand(output, context);
    };
    return InstallToRemoteAccessSessionCommand;
}($Command));
export { InstallToRemoteAccessSessionCommand };
//# sourceMappingURL=InstallToRemoteAccessSessionCommand.js.map