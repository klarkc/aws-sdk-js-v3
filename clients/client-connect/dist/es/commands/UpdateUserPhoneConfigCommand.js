import { __extends } from "tslib";
import { UpdateUserPhoneConfigRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateUserPhoneConfigCommand, serializeAws_restJson1UpdateUserPhoneConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the phone configuration settings for the specified user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserPhoneConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserPhoneConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateUserPhoneConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserPhoneConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateUserPhoneConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateUserPhoneConfigCommand = /** @class */ (function (_super) {
    __extends(UpdateUserPhoneConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateUserPhoneConfigCommand(input) {
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
    UpdateUserPhoneConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "UpdateUserPhoneConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateUserPhoneConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateUserPhoneConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateUserPhoneConfigCommand(input, context);
    };
    UpdateUserPhoneConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateUserPhoneConfigCommand(output, context);
    };
    return UpdateUserPhoneConfigCommand;
}($Command));
export { UpdateUserPhoneConfigCommand };
//# sourceMappingURL=UpdateUserPhoneConfigCommand.js.map