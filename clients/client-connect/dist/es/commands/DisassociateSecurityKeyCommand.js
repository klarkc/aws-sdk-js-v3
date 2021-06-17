import { __extends } from "tslib";
import { DisassociateSecurityKeyRequest } from "../models/models_0";
import { deserializeAws_restJson1DisassociateSecurityKeyCommand, serializeAws_restJson1DisassociateSecurityKeyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Deletes the specified security key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateSecurityKeyCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateSecurityKeyCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DisassociateSecurityKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateSecurityKeyCommandInput} for command's `input` shape.
 * @see {@link DisassociateSecurityKeyCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateSecurityKeyCommand = /** @class */ (function (_super) {
    __extends(DisassociateSecurityKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateSecurityKeyCommand(input) {
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
    DisassociateSecurityKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "DisassociateSecurityKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateSecurityKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateSecurityKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateSecurityKeyCommand(input, context);
    };
    DisassociateSecurityKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateSecurityKeyCommand(output, context);
    };
    return DisassociateSecurityKeyCommand;
}($Command));
export { DisassociateSecurityKeyCommand };
//# sourceMappingURL=DisassociateSecurityKeyCommand.js.map