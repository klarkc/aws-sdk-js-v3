import { __extends } from "tslib";
import { AbortVaultLockInput } from "../models/models_0";
import { deserializeAws_restJson1AbortVaultLockCommand, serializeAws_restJson1AbortVaultLockCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation aborts the vault locking process if the vault lock is not in the
 *             <code>Locked</code> state. If the vault lock is in the <code>Locked</code> state when
 *          this operation is requested, the operation returns an <code>AccessDeniedException</code>
 *          error. Aborting the vault locking process removes the vault lock policy from the specified
 *          vault. </p>
 *          <p>A vault lock is put into the <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. A vault lock is put into the <code>Locked</code> state by
 *          calling <a>CompleteVaultLock</a>. You can get the state of a vault lock by
 *          calling <a>GetVaultLock</a>. For more information about the vault locking
 *          process, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>. For more information about vault lock policies, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon
 *             Glacier Access Control with Vault Lock Policies</a>. </p>
 *          <p>This operation is idempotent. You can successfully invoke this operation multiple
 *          times, if the vault lock is in the <code>InProgress</code> state or if there is no policy
 *          associated with the vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, AbortVaultLockCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, AbortVaultLockCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new AbortVaultLockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AbortVaultLockCommandInput} for command's `input` shape.
 * @see {@link AbortVaultLockCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AbortVaultLockCommand = /** @class */ (function (_super) {
    __extends(AbortVaultLockCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AbortVaultLockCommand(input) {
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
    AbortVaultLockCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlacierClient";
        var commandName = "AbortVaultLockCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AbortVaultLockInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AbortVaultLockCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AbortVaultLockCommand(input, context);
    };
    AbortVaultLockCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AbortVaultLockCommand(output, context);
    };
    return AbortVaultLockCommand;
}($Command));
export { AbortVaultLockCommand };
//# sourceMappingURL=AbortVaultLockCommand.js.map