import { __extends } from "tslib";
import { GetVaultAccessPolicyInput, GetVaultAccessPolicyOutput } from "../models/models_0";
import { deserializeAws_restJson1GetVaultAccessPolicyCommand, serializeAws_restJson1GetVaultAccessPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation retrieves the <code>access-policy</code> subresource set on the vault;
 *          for more information on setting this subresource, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetVaultAccessPolicy.html">Set Vault Access Policy
 *             (PUT access-policy)</a>. If there is no access policy set on the vault, the
 *          operation returns a <code>404 Not found</code> error. For more information about vault
 *          access policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control
 *             with Vault Access Policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, GetVaultAccessPolicyCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, GetVaultAccessPolicyCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new GetVaultAccessPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVaultAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link GetVaultAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetVaultAccessPolicyCommand = /** @class */ (function (_super) {
    __extends(GetVaultAccessPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetVaultAccessPolicyCommand(input) {
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
    GetVaultAccessPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlacierClient";
        var commandName = "GetVaultAccessPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetVaultAccessPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetVaultAccessPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetVaultAccessPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetVaultAccessPolicyCommand(input, context);
    };
    GetVaultAccessPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetVaultAccessPolicyCommand(output, context);
    };
    return GetVaultAccessPolicyCommand;
}($Command));
export { GetVaultAccessPolicyCommand };
//# sourceMappingURL=GetVaultAccessPolicyCommand.js.map