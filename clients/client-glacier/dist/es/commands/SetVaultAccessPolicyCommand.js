import { __extends } from "tslib";
import { SetVaultAccessPolicyInput } from "../models/models_0";
import { deserializeAws_restJson1SetVaultAccessPolicyCommand, serializeAws_restJson1SetVaultAccessPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation configures an access policy for a vault and will overwrite an existing
 *          policy. To configure a vault access policy, send a PUT request to the
 *             <code>access-policy</code> subresource of the vault. An access policy is specific to a
 *          vault and is also called a vault subresource. You can set one access policy per vault and
 *          the policy can be up to 20 KB in size. For more information about vault access policies,
 *          see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control with Vault Access Policies</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, SetVaultAccessPolicyCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, SetVaultAccessPolicyCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new SetVaultAccessPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetVaultAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link SetVaultAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetVaultAccessPolicyCommand = /** @class */ (function (_super) {
    __extends(SetVaultAccessPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetVaultAccessPolicyCommand(input) {
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
    SetVaultAccessPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlacierClient";
        var commandName = "SetVaultAccessPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetVaultAccessPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetVaultAccessPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SetVaultAccessPolicyCommand(input, context);
    };
    SetVaultAccessPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SetVaultAccessPolicyCommand(output, context);
    };
    return SetVaultAccessPolicyCommand;
}($Command));
export { SetVaultAccessPolicyCommand };
//# sourceMappingURL=SetVaultAccessPolicyCommand.js.map