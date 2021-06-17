import { __extends } from "tslib";
import { DeleteOpenIDConnectProviderRequest } from "../models/models_0";
import { deserializeAws_queryDeleteOpenIDConnectProviderCommand, serializeAws_queryDeleteOpenIDConnectProviderCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an OpenID Connect identity provider (IdP) resource object in IAM.</p>
 *         <p>Deleting an IAM OIDC provider resource does not update any roles that reference the
 *             provider as a principal in their trust policies. Any attempt to assume a role that
 *             references a deleted provider fails.</p>
 *         <p>This operation is idempotent; it does not fail or return an error if you call the
 *             operation for a provider that does not exist.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteOpenIDConnectProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteOpenIDConnectProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOpenIDConnectProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteOpenIDConnectProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteOpenIDConnectProviderCommand = /** @class */ (function (_super) {
    __extends(DeleteOpenIDConnectProviderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteOpenIDConnectProviderCommand(input) {
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
    DeleteOpenIDConnectProviderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DeleteOpenIDConnectProviderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteOpenIDConnectProviderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteOpenIDConnectProviderCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteOpenIDConnectProviderCommand(input, context);
    };
    DeleteOpenIDConnectProviderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteOpenIDConnectProviderCommand(output, context);
    };
    return DeleteOpenIDConnectProviderCommand;
}($Command));
export { DeleteOpenIDConnectProviderCommand };
//# sourceMappingURL=DeleteOpenIDConnectProviderCommand.js.map