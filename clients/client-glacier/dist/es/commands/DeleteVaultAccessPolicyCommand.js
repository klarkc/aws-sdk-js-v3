import { __extends } from "tslib";
import { DeleteVaultAccessPolicyInput } from "../models/models_0";
import { deserializeAws_restJson1DeleteVaultAccessPolicyCommand, serializeAws_restJson1DeleteVaultAccessPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation deletes the access policy associated with the specified vault. The
 *          operation is eventually consistent; that is, it might take some time for Amazon S3 Glacier to
 *          completely remove the access policy, and you might still see the effect of the policy for a
 *          short time after you send the delete request.</p>
 *          <p>This operation is idempotent. You can invoke delete multiple times, even if there is
 *          no policy associated with the vault. For more information about vault access policies, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control with Vault Access Policies</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, DeleteVaultAccessPolicyCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, DeleteVaultAccessPolicyCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new DeleteVaultAccessPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVaultAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteVaultAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVaultAccessPolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteVaultAccessPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteVaultAccessPolicyCommand(input) {
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
    DeleteVaultAccessPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlacierClient";
        var commandName = "DeleteVaultAccessPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteVaultAccessPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteVaultAccessPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteVaultAccessPolicyCommand(input, context);
    };
    DeleteVaultAccessPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteVaultAccessPolicyCommand(output, context);
    };
    return DeleteVaultAccessPolicyCommand;
}($Command));
export { DeleteVaultAccessPolicyCommand };
//# sourceMappingURL=DeleteVaultAccessPolicyCommand.js.map