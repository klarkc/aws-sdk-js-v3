import { __extends } from "tslib";
import { DeleteKeySigningKeyRequest, DeleteKeySigningKeyResponse } from "../models/models_0";
import { deserializeAws_restXmlDeleteKeySigningKeyCommand, serializeAws_restXmlDeleteKeySigningKeyCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a key-signing key (KSK). Before you can delete a KSK, you must deactivate it. The KSK must be
 * 		deactivated before you can delete it regardless of whether the hosted zone is enabled for DNSSEC signing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteKeySigningKeyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteKeySigningKeyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeleteKeySigningKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteKeySigningKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteKeySigningKeyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteKeySigningKeyCommand = /** @class */ (function (_super) {
    __extends(DeleteKeySigningKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteKeySigningKeyCommand(input) {
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
    DeleteKeySigningKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "DeleteKeySigningKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteKeySigningKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteKeySigningKeyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteKeySigningKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlDeleteKeySigningKeyCommand(input, context);
    };
    DeleteKeySigningKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlDeleteKeySigningKeyCommand(output, context);
    };
    return DeleteKeySigningKeyCommand;
}($Command));
export { DeleteKeySigningKeyCommand };
//# sourceMappingURL=DeleteKeySigningKeyCommand.js.map