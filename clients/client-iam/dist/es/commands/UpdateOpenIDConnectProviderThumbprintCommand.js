import { __extends } from "tslib";
import { UpdateOpenIDConnectProviderThumbprintRequest } from "../models/models_1";
import { deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand, serializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Replaces the existing list of server certificate thumbprints associated with an OpenID
 *             Connect (OIDC) provider resource object with a new list of thumbprints.</p>
 *         <p>The list that you pass with this operation completely replaces the existing list of
 *             thumbprints. (The lists are not merged.)</p>
 *         <p>Typically, you need to update a thumbprint only when the identity provider's
 *             certificate changes, which occurs rarely. However, if the provider's certificate
 *                 <i>does</i> change, any attempt to assume an IAM role that specifies
 *             the OIDC provider as a principal fails until the certificate thumbprint is
 *             updated.</p>
 *         <note>
 *             <p>Trust for the OIDC provider is derived from the provider's certificate and is
 *                 validated by the thumbprint. Therefore, it is best to limit access to the
 *                     <code>UpdateOpenIDConnectProviderThumbprint</code> operation to highly
 *                 privileged users.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateOpenIDConnectProviderThumbprintCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateOpenIDConnectProviderThumbprintCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateOpenIDConnectProviderThumbprintCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateOpenIDConnectProviderThumbprintCommandInput} for command's `input` shape.
 * @see {@link UpdateOpenIDConnectProviderThumbprintCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateOpenIDConnectProviderThumbprintCommand = /** @class */ (function (_super) {
    __extends(UpdateOpenIDConnectProviderThumbprintCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateOpenIDConnectProviderThumbprintCommand(input) {
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
    UpdateOpenIDConnectProviderThumbprintCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "UpdateOpenIDConnectProviderThumbprintCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateOpenIDConnectProviderThumbprintRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateOpenIDConnectProviderThumbprintCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand(input, context);
    };
    UpdateOpenIDConnectProviderThumbprintCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand(output, context);
    };
    return UpdateOpenIDConnectProviderThumbprintCommand;
}($Command));
export { UpdateOpenIDConnectProviderThumbprintCommand };
//# sourceMappingURL=UpdateOpenIDConnectProviderThumbprintCommand.js.map