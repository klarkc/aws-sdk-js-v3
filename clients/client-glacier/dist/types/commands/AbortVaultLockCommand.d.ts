import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { AbortVaultLockInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AbortVaultLockCommandInput extends AbortVaultLockInput {
}
export interface AbortVaultLockCommandOutput extends __MetadataBearer {
}
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
export declare class AbortVaultLockCommand extends $Command<AbortVaultLockCommandInput, AbortVaultLockCommandOutput, GlacierClientResolvedConfig> {
    readonly input: AbortVaultLockCommandInput;
    constructor(input: AbortVaultLockCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlacierClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AbortVaultLockCommandInput, AbortVaultLockCommandOutput>;
    private serialize;
    private deserialize;
}
