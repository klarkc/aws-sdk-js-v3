import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import { ListLexiconsInput, ListLexiconsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLexiconsCommandInput extends ListLexiconsInput {
}
export interface ListLexiconsCommandOutput extends ListLexiconsOutput, __MetadataBearer {
}
/**
 * <p>Returns a list of pronunciation lexicons stored in an AWS Region. For more information,
 *       see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing
 *         Lexicons</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, ListLexiconsCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, ListLexiconsCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * const client = new PollyClient(config);
 * const command = new ListLexiconsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLexiconsCommandInput} for command's `input` shape.
 * @see {@link ListLexiconsCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLexiconsCommand extends $Command<ListLexiconsCommandInput, ListLexiconsCommandOutput, PollyClientResolvedConfig> {
    readonly input: ListLexiconsCommandInput;
    constructor(input: ListLexiconsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PollyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLexiconsCommandInput, ListLexiconsCommandOutput>;
    private serialize;
    private deserialize;
}
