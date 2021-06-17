"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitiateVaultLockCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>This operation initiates the vault locking process by doing the following:</p>
 *          <ul>
 *             <li>
 *                <p>Installing a vault lock policy on the specified vault.</p>
 *             </li>
 *             <li>
 *                <p>Setting the lock state of vault lock to <code>InProgress</code>.</p>
 *             </li>
 *             <li>
 *                <p>Returning a lock ID, which is used to complete the vault locking
 *                process.</p>
 *             </li>
 *          </ul>
 *
 *          <p>You can set one vault lock policy for each vault and this policy can be up to 20 KB
 *          in size. For more information about vault lock policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon Glacier Access Control with
 *             Vault Lock Policies</a>. </p>
 *          <p>You must complete the vault locking process within 24 hours after the vault lock
 *          enters the <code>InProgress</code> state. After the 24 hour window ends, the lock ID
 *          expires, the vault automatically exits the <code>InProgress</code> state, and the vault
 *          lock policy is removed from the vault. You call <a>CompleteVaultLock</a> to
 *          complete the vault locking process by setting the state of the vault lock to
 *             <code>Locked</code>. </p>
 *          <p>After a vault lock is in the <code>Locked</code> state, you cannot initiate a new
 *          vault lock for the vault.</p>
 *
 *          <p>You can abort the vault locking process by calling <a>AbortVaultLock</a>.
 *          You can get the state of the vault lock by calling <a>GetVaultLock</a>. For more
 *          information about the vault locking process, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault
 *          Lock</a>.</p>
 *
 *          <p>If this operation is called when the vault lock is in the <code>InProgress</code>
 *          state, the operation returns an <code>AccessDeniedException</code> error. When the vault
 *          lock is in the <code>InProgress</code> state you must call <a>AbortVaultLock</a>
 *          before you can initiate a new vault lock policy. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, InitiateVaultLockCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, InitiateVaultLockCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new InitiateVaultLockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InitiateVaultLockCommandInput} for command's `input` shape.
 * @see {@link InitiateVaultLockCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
class InitiateVaultLockCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "GlacierClient";
        const commandName = "InitiateVaultLockCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.InitiateVaultLockInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.InitiateVaultLockOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1InitiateVaultLockCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1InitiateVaultLockCommand(output, context);
    }
}
exports.InitiateVaultLockCommand = InitiateVaultLockCommand;
//# sourceMappingURL=InitiateVaultLockCommand.js.map