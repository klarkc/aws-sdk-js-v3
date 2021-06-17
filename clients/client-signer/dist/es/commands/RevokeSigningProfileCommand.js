import { __extends } from "tslib";
import { RevokeSigningProfileRequest } from "../models/models_0";
import { deserializeAws_restJson1RevokeSigningProfileCommand, serializeAws_restJson1RevokeSigningProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes the state of a signing profile to REVOKED. This indicates that signatures
 * 			generated using the signing profile after an effective start date are no longer
 * 			valid.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, RevokeSigningProfileCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, RevokeSigningProfileCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new RevokeSigningProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeSigningProfileCommandInput} for command's `input` shape.
 * @see {@link RevokeSigningProfileCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RevokeSigningProfileCommand = /** @class */ (function (_super) {
    __extends(RevokeSigningProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RevokeSigningProfileCommand(input) {
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
    RevokeSigningProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SignerClient";
        var commandName = "RevokeSigningProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RevokeSigningProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RevokeSigningProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RevokeSigningProfileCommand(input, context);
    };
    RevokeSigningProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RevokeSigningProfileCommand(output, context);
    };
    return RevokeSigningProfileCommand;
}($Command));
export { RevokeSigningProfileCommand };
//# sourceMappingURL=RevokeSigningProfileCommand.js.map