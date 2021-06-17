import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { ListMailboxExportJobsRequest, ListMailboxExportJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListMailboxExportJobsCommandInput extends ListMailboxExportJobsRequest {
}
export interface ListMailboxExportJobsCommandOutput extends ListMailboxExportJobsResponse, __MetadataBearer {
}
/**
 * <p>Lists the mailbox export jobs started for the specified organization within the last
 *          seven days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListMailboxExportJobsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListMailboxExportJobsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new ListMailboxExportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMailboxExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListMailboxExportJobsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListMailboxExportJobsCommand extends $Command<ListMailboxExportJobsCommandInput, ListMailboxExportJobsCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: ListMailboxExportJobsCommandInput;
    constructor(input: ListMailboxExportJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMailboxExportJobsCommandInput, ListMailboxExportJobsCommandOutput>;
    private serialize;
    private deserialize;
}
