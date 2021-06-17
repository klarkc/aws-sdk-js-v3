import { __extends } from "tslib";
import { SetLocalConsolePasswordInput, SetLocalConsolePasswordOutput } from "../models/models_0";
import { deserializeAws_json1_1SetLocalConsolePasswordCommand, serializeAws_json1_1SetLocalConsolePasswordCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the password for your VM local console. When you log in to the local console for
 *          the first time, you log in to the VM with the default credentials. We recommend that you
 *          set a new password. You don't need to know the default password to set a new
 *          password.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, SetLocalConsolePasswordCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, SetLocalConsolePasswordCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new SetLocalConsolePasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetLocalConsolePasswordCommandInput} for command's `input` shape.
 * @see {@link SetLocalConsolePasswordCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetLocalConsolePasswordCommand = /** @class */ (function (_super) {
    __extends(SetLocalConsolePasswordCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetLocalConsolePasswordCommand(input) {
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
    SetLocalConsolePasswordCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "SetLocalConsolePasswordCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetLocalConsolePasswordInput.filterSensitiveLog,
            outputFilterSensitiveLog: SetLocalConsolePasswordOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetLocalConsolePasswordCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SetLocalConsolePasswordCommand(input, context);
    };
    SetLocalConsolePasswordCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SetLocalConsolePasswordCommand(output, context);
    };
    return SetLocalConsolePasswordCommand;
}($Command));
export { SetLocalConsolePasswordCommand };
//# sourceMappingURL=SetLocalConsolePasswordCommand.js.map