import { __extends } from "tslib";
import { GetVaultLockInput, GetVaultLockOutput } from "../models/models_0";
import { deserializeAws_restJson1GetVaultLockCommand, serializeAws_restJson1GetVaultLockCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation retrieves the following attributes from the <code>lock-policy</code>
 *          subresource set on the specified vault: </p>
 *          <ul>
 *             <li>
 *                <p>The vault lock policy set on the vault.</p>
 *             </li>
 *             <li>
 *                <p>The state of the vault lock, which is either <code>InProgess</code> or
 *                   <code>Locked</code>.</p>
 *             </li>
 *             <li>
 *                <p>When the lock ID expires. The lock ID is used to complete the vault locking
 *                process.</p>
 *             </li>
 *             <li>
 *                <p>When the vault lock was initiated and put into the <code>InProgress</code>
 *                state.</p>
 *             </li>
 *          </ul>
 *
 *          <p>A vault lock is put into the <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. A vault lock is put into the <code>Locked</code> state by
 *          calling <a>CompleteVaultLock</a>. You can abort the vault locking process by
 *          calling <a>AbortVaultLock</a>. For more information about the vault locking
 *          process, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon
 *             Glacier Vault Lock</a>. </p>
 *          <p>If there is no vault lock policy set on the vault, the operation returns a <code>404
 *             Not found</code> error. For more information about vault lock policies, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon
 *             Glacier Access Control with Vault Lock Policies</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, GetVaultLockCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, GetVaultLockCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new GetVaultLockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVaultLockCommandInput} for command's `input` shape.
 * @see {@link GetVaultLockCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetVaultLockCommand = /** @class */ (function (_super) {
    __extends(GetVaultLockCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetVaultLockCommand(input) {
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
    GetVaultLockCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlacierClient";
        var commandName = "GetVaultLockCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetVaultLockInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetVaultLockOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetVaultLockCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetVaultLockCommand(input, context);
    };
    GetVaultLockCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetVaultLockCommand(output, context);
    };
    return GetVaultLockCommand;
}($Command));
export { GetVaultLockCommand };
//# sourceMappingURL=GetVaultLockCommand.js.map