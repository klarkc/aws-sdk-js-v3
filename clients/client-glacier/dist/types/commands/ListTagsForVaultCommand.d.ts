import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { ListTagsForVaultInput, ListTagsForVaultOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTagsForVaultCommandInput extends ListTagsForVaultInput {
}
export interface ListTagsForVaultCommandOutput extends ListTagsForVaultOutput, __MetadataBearer {
}
/**
 * <p>This operation lists all the tags attached to a vault. The operation returns an empty
 *          map if there are no tags. For more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier
 *          Resources</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, ListTagsForVaultCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, ListTagsForVaultCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new ListTagsForVaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForVaultCommandInput} for command's `input` shape.
 * @see {@link ListTagsForVaultCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTagsForVaultCommand extends $Command<ListTagsForVaultCommandInput, ListTagsForVaultCommandOutput, GlacierClientResolvedConfig> {
    readonly input: ListTagsForVaultCommandInput;
    constructor(input: ListTagsForVaultCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlacierClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsForVaultCommandInput, ListTagsForVaultCommandOutput>;
    private serialize;
    private deserialize;
}
