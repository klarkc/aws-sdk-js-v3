import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import { DeleteLexiconInput, DeleteLexiconOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteLexiconCommandInput extends DeleteLexiconInput {
}
export interface DeleteLexiconCommandOutput extends DeleteLexiconOutput, __MetadataBearer {
}
/**
 * <p>Deletes the specified pronunciation lexicon stored in an AWS Region. A lexicon which
 *       has been deleted is not available for speech synthesis, nor is it possible to retrieve it
 *       using either the <code>GetLexicon</code> or <code>ListLexicon</code> APIs.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing
 *         Lexicons</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, DeleteLexiconCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, DeleteLexiconCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * const client = new PollyClient(config);
 * const command = new DeleteLexiconCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLexiconCommandInput} for command's `input` shape.
 * @see {@link DeleteLexiconCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteLexiconCommand extends $Command<DeleteLexiconCommandInput, DeleteLexiconCommandOutput, PollyClientResolvedConfig> {
    readonly input: DeleteLexiconCommandInput;
    constructor(input: DeleteLexiconCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PollyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLexiconCommandInput, DeleteLexiconCommandOutput>;
    private serialize;
    private deserialize;
}
