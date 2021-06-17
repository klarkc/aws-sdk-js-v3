import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { AddTagsToVaultInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddTagsToVaultCommandInput extends AddTagsToVaultInput {
}
export interface AddTagsToVaultCommandOutput extends __MetadataBearer {
}
/**
 * <p>This operation adds the specified tags to a vault. Each tag is composed of a key and
 *          a value. Each vault can have up to 10 tags. If your request would cause the tag limit for
 *          the vault to be exceeded, the operation throws the <code>LimitExceededException</code>
 *          error. If a tag already exists on the vault under a specified key, the existing key value
 *          will be overwritten. For more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier Resources</a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, AddTagsToVaultCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, AddTagsToVaultCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new AddTagsToVaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsToVaultCommandInput} for command's `input` shape.
 * @see {@link AddTagsToVaultCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddTagsToVaultCommand extends $Command<AddTagsToVaultCommandInput, AddTagsToVaultCommandOutput, GlacierClientResolvedConfig> {
    readonly input: AddTagsToVaultCommandInput;
    constructor(input: AddTagsToVaultCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlacierClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddTagsToVaultCommandInput, AddTagsToVaultCommandOutput>;
    private serialize;
    private deserialize;
}
