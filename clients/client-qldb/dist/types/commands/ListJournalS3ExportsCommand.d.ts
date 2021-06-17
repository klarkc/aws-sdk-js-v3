import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import { ListJournalS3ExportsRequest, ListJournalS3ExportsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListJournalS3ExportsCommandInput extends ListJournalS3ExportsRequest {
}
export interface ListJournalS3ExportsCommandOutput extends ListJournalS3ExportsResponse, __MetadataBearer {
}
/**
 * <p>Returns an array of journal export job descriptions for all ledgers that are associated
 *          with the current AWS account and Region.</p>
 *          <p>This action returns a maximum of <code>MaxResults</code> items, and is paginated so that
 *          you can retrieve all the items by calling <code>ListJournalS3Exports</code> multiple
 *          times.</p>
 *          <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export Job Expiration</a> in the <i>Amazon QLDB Developer
 *          Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, ListJournalS3ExportsCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, ListJournalS3ExportsCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new ListJournalS3ExportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJournalS3ExportsCommandInput} for command's `input` shape.
 * @see {@link ListJournalS3ExportsCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListJournalS3ExportsCommand extends $Command<ListJournalS3ExportsCommandInput, ListJournalS3ExportsCommandOutput, QLDBClientResolvedConfig> {
    readonly input: ListJournalS3ExportsCommandInput;
    constructor(input: ListJournalS3ExportsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QLDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListJournalS3ExportsCommandInput, ListJournalS3ExportsCommandOutput>;
    private serialize;
    private deserialize;
}
