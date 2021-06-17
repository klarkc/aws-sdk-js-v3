import { __extends } from "tslib";
import { ActivateKeySigningKeyRequest, ActivateKeySigningKeyResponse } from "../models/models_0";
import { deserializeAws_restXmlActivateKeySigningKeyCommand, serializeAws_restXmlActivateKeySigningKeyCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Activates a key-signing key (KSK) so that it can be used for signing by DNSSEC. This operation changes the
 * 			KSK status to <code>ACTIVE</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ActivateKeySigningKeyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ActivateKeySigningKeyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ActivateKeySigningKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ActivateKeySigningKeyCommandInput} for command's `input` shape.
 * @see {@link ActivateKeySigningKeyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ActivateKeySigningKeyCommand = /** @class */ (function (_super) {
    __extends(ActivateKeySigningKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ActivateKeySigningKeyCommand(input) {
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
    ActivateKeySigningKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "ActivateKeySigningKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ActivateKeySigningKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ActivateKeySigningKeyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ActivateKeySigningKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlActivateKeySigningKeyCommand(input, context);
    };
    ActivateKeySigningKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlActivateKeySigningKeyCommand(output, context);
    };
    return ActivateKeySigningKeyCommand;
}($Command));
export { ActivateKeySigningKeyCommand };
//# sourceMappingURL=ActivateKeySigningKeyCommand.js.map