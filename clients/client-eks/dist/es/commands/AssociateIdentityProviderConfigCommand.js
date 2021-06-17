import { __extends } from "tslib";
import { AssociateIdentityProviderConfigRequest, AssociateIdentityProviderConfigResponse } from "../models/models_0";
import { deserializeAws_restJson1AssociateIdentityProviderConfigCommand, serializeAws_restJson1AssociateIdentityProviderConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associate an identity provider configuration to a cluster.</p>
 *         <p>If you want to authenticate identities using an identity provider, you can create an
 *             identity provider configuration and associate it to your cluster. After configuring
 *             authentication to your cluster you can create Kubernetes <code>roles</code> and
 *                 <code>clusterroles</code> to assign permissions to the roles, and then bind the
 *             roles to the identities using Kubernetes <code>rolebindings</code> and
 *                 <code>clusterrolebindings</code>. For more information see <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/">Using RBAC
 *                 Authorization</a> in the Kubernetes documentation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, AssociateIdentityProviderConfigCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, AssociateIdentityProviderConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new AssociateIdentityProviderConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateIdentityProviderConfigCommandInput} for command's `input` shape.
 * @see {@link AssociateIdentityProviderConfigCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateIdentityProviderConfigCommand = /** @class */ (function (_super) {
    __extends(AssociateIdentityProviderConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateIdentityProviderConfigCommand(input) {
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
    AssociateIdentityProviderConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "AssociateIdentityProviderConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateIdentityProviderConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateIdentityProviderConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateIdentityProviderConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateIdentityProviderConfigCommand(input, context);
    };
    AssociateIdentityProviderConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateIdentityProviderConfigCommand(output, context);
    };
    return AssociateIdentityProviderConfigCommand;
}($Command));
export { AssociateIdentityProviderConfigCommand };
//# sourceMappingURL=AssociateIdentityProviderConfigCommand.js.map