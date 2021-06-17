import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import { BatchDeleteTableRowsRequest, BatchDeleteTableRowsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchDeleteTableRowsCommandInput extends BatchDeleteTableRowsRequest {
}
export interface BatchDeleteTableRowsCommandOutput extends BatchDeleteTableRowsResult, __MetadataBearer {
}
/**
 * <p>
 *             The BatchDeleteTableRows API allows you to delete one or more rows from a table in a workbook.
 *             You need to specify the ids of the rows that you want to delete from the table.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, BatchDeleteTableRowsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, BatchDeleteTableRowsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new BatchDeleteTableRowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteTableRowsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteTableRowsCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchDeleteTableRowsCommand extends $Command<BatchDeleteTableRowsCommandInput, BatchDeleteTableRowsCommandOutput, HoneycodeClientResolvedConfig> {
    readonly input: BatchDeleteTableRowsCommandInput;
    constructor(input: BatchDeleteTableRowsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HoneycodeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDeleteTableRowsCommandInput, BatchDeleteTableRowsCommandOutput>;
    private serialize;
    private deserialize;
}
