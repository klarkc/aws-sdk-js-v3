import { __extends } from "tslib";
import { RevokeSignatureRequest } from "../models/models_0";
import { deserializeAws_restJson1RevokeSignatureCommand, serializeAws_restJson1RevokeSignatureCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes the state of a signing job to REVOKED. This indicates that the signature is no
 * 			longer valid.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, RevokeSignatureCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, RevokeSignatureCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new RevokeSignatureCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeSignatureCommandInput} for command's `input` shape.
 * @see {@link RevokeSignatureCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RevokeSignatureCommand = /** @class */ (function (_super) {
    __extends(RevokeSignatureCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RevokeSignatureCommand(input) {
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
    RevokeSignatureCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SignerClient";
        var commandName = "RevokeSignatureCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RevokeSignatureRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RevokeSignatureCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RevokeSignatureCommand(input, context);
    };
    RevokeSignatureCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RevokeSignatureCommand(output, context);
    };
    return RevokeSignatureCommand;
}($Command));
export { RevokeSignatureCommand };
//# sourceMappingURL=RevokeSignatureCommand.js.map