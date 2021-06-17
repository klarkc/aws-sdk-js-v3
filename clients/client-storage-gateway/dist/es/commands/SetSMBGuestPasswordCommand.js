import { __extends } from "tslib";
import { SetSMBGuestPasswordInput, SetSMBGuestPasswordOutput } from "../models/models_0";
import { deserializeAws_json1_1SetSMBGuestPasswordCommand, serializeAws_json1_1SetSMBGuestPasswordCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the password for the guest user <code>smbguest</code>. The <code>smbguest</code>
 *          user is the user when the authentication method for the file share is set to
 *             <code>GuestAccess</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, SetSMBGuestPasswordCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, SetSMBGuestPasswordCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new SetSMBGuestPasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetSMBGuestPasswordCommandInput} for command's `input` shape.
 * @see {@link SetSMBGuestPasswordCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetSMBGuestPasswordCommand = /** @class */ (function (_super) {
    __extends(SetSMBGuestPasswordCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetSMBGuestPasswordCommand(input) {
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
    SetSMBGuestPasswordCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "SetSMBGuestPasswordCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetSMBGuestPasswordInput.filterSensitiveLog,
            outputFilterSensitiveLog: SetSMBGuestPasswordOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetSMBGuestPasswordCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SetSMBGuestPasswordCommand(input, context);
    };
    SetSMBGuestPasswordCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SetSMBGuestPasswordCommand(output, context);
    };
    return SetSMBGuestPasswordCommand;
}($Command));
export { SetSMBGuestPasswordCommand };
//# sourceMappingURL=SetSMBGuestPasswordCommand.js.map