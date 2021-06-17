import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { SetVaultAccessPolicyInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetVaultAccessPolicyCommandInput extends SetVaultAccessPolicyInput {
}
export interface SetVaultAccessPolicyCommandOutput extends __MetadataBearer {
}
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
export declare class SetVaultAccessPolicyCommand extends $Command<SetVaultAccessPolicyCommandInput, SetVaultAccessPolicyCommandOutput, GlacierClientResolvedConfig> {
    readonly input: SetVaultAccessPolicyCommandInput;
    constructor(input: SetVaultAccessPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlacierClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetVaultAccessPolicyCommandInput, SetVaultAccessPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
