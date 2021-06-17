import { __extends } from "tslib";
import { DeactivateKeySigningKeyRequest, DeactivateKeySigningKeyResponse } from "../models/models_0";
import { deserializeAws_restXmlDeactivateKeySigningKeyCommand, serializeAws_restXmlDeactivateKeySigningKeyCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deactivates a key-signing key (KSK) so that it will not be used for signing by DNSSEC. This operation changes the
 * 			KSK status to <code>INACTIVE</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeactivateKeySigningKeyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeactivateKeySigningKeyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeactivateKeySigningKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeactivateKeySigningKeyCommandInput} for command's `input` shape.
 * @see {@link DeactivateKeySigningKeyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeactivateKeySigningKeyCommand = /** @class */ (function (_super) {
    __extends(DeactivateKeySigningKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeactivateKeySigningKeyCommand(input) {
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
    DeactivateKeySigningKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "DeactivateKeySigningKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeactivateKeySigningKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeactivateKeySigningKeyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeactivateKeySigningKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlDeactivateKeySigningKeyCommand(input, context);
    };
    DeactivateKeySigningKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlDeactivateKeySigningKeyCommand(output, context);
    };
    return DeactivateKeySigningKeyCommand;
}($Command));
export { DeactivateKeySigningKeyCommand };
//# sourceMappingURL=DeactivateKeySigningKeyCommand.js.map