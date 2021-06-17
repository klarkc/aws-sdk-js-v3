import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { RemoveTagsFromVaultInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RemoveTagsFromVaultCommandInput extends RemoveTagsFromVaultInput {
}
export interface RemoveTagsFromVaultCommandOutput extends __MetadataBearer {
}
/**
 * <p>This operation removes one or more tags from the set of tags attached to a vault. For
 *          more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier Resources</a>.
 *          This operation is idempotent. The operation will be successful, even if there are no tags
 *          attached to the vault. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, RemoveTagsFromVaultCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, RemoveTagsFromVaultCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new RemoveTagsFromVaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveTagsFromVaultCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsFromVaultCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemoveTagsFromVaultCommand extends $Command<RemoveTagsFromVaultCommandInput, RemoveTagsFromVaultCommandOutput, GlacierClientResolvedConfig> {
    readonly input: RemoveTagsFromVaultCommandInput;
    constructor(input: RemoveTagsFromVaultCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlacierClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveTagsFromVaultCommandInput, RemoveTagsFromVaultCommandOutput>;
    private serialize;
    private deserialize;
}
