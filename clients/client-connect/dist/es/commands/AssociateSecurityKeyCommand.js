import { __extends } from "tslib";
import { AssociateSecurityKeyRequest, AssociateSecurityKeyResponse } from "../models/models_0";
import { deserializeAws_restJson1AssociateSecurityKeyCommand, serializeAws_restJson1AssociateSecurityKeyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Associates a security key to the instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateSecurityKeyCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateSecurityKeyCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new AssociateSecurityKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateSecurityKeyCommandInput} for command's `input` shape.
 * @see {@link AssociateSecurityKeyCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateSecurityKeyCommand = /** @class */ (function (_super) {
    __extends(AssociateSecurityKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateSecurityKeyCommand(input) {
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
    AssociateSecurityKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "AssociateSecurityKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateSecurityKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateSecurityKeyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateSecurityKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateSecurityKeyCommand(input, context);
    };
    AssociateSecurityKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateSecurityKeyCommand(output, context);
    };
    return AssociateSecurityKeyCommand;
}($Command));
export { AssociateSecurityKeyCommand };
//# sourceMappingURL=AssociateSecurityKeyCommand.js.map