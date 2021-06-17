import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import { DescribeJournalS3ExportRequest, DescribeJournalS3ExportResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeJournalS3ExportCommandInput extends DescribeJournalS3ExportRequest {
}
export interface DescribeJournalS3ExportCommandOutput extends DescribeJournalS3ExportResponse, __MetadataBearer {
}
/**
 * <p>Returns information about a journal export job, including the ledger name, export ID,
 *          when it was created, current status, and its start and end time export parameters.</p>
 *          <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export Job Expiration</a> in the <i>Amazon QLDB Developer
 *          Guide</i>.</p>
 *          <p>If the export job with the given <code>ExportId</code> doesn't exist, then throws
 *             <code>ResourceNotFoundException</code>.</p>
 *          <p>If the ledger with the given <code>Name</code> doesn't exist, then throws
 *             <code>ResourceNotFoundException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, DescribeJournalS3ExportCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, DescribeJournalS3ExportCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new DescribeJournalS3ExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJournalS3ExportCommandInput} for command's `input` shape.
 * @see {@link DescribeJournalS3ExportCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeJournalS3ExportCommand extends $Command<DescribeJournalS3ExportCommandInput, DescribeJournalS3ExportCommandOutput, QLDBClientResolvedConfig> {
    readonly input: DescribeJournalS3ExportCommandInput;
    constructor(input: DescribeJournalS3ExportCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QLDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeJournalS3ExportCommandInput, DescribeJournalS3ExportCommandOutput>;
    private serialize;
    private deserialize;
}
