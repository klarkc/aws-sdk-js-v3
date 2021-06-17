import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import { BatchUpdateTableRowsRequest, BatchUpdateTableRowsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchUpdateTableRowsCommandInput extends BatchUpdateTableRowsRequest {
}
export interface BatchUpdateTableRowsCommandOutput extends BatchUpdateTableRowsResult, __MetadataBearer {
}
/**
 * <p>
 *             The BatchUpdateTableRows API allows you to update one or more rows in a table in a workbook.
 *         </p>
 *         <p>
 *             You can specify the values to set in some or all of the columns in the table for the specified
 *             rows.
 *             If a column is not explicitly specified in a particular row, then that column will not be updated
 *             for that row. To clear out the data in a specific cell, you need to set the value as an empty string
 *             ("").
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, BatchUpdateTableRowsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, BatchUpdateTableRowsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new BatchUpdateTableRowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpdateTableRowsCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateTableRowsCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchUpdateTableRowsCommand extends $Command<BatchUpdateTableRowsCommandInput, BatchUpdateTableRowsCommandOutput, HoneycodeClientResolvedConfig> {
    readonly input: BatchUpdateTableRowsCommandInput;
    constructor(input: BatchUpdateTableRowsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HoneycodeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchUpdateTableRowsCommandInput, BatchUpdateTableRowsCommandOutput>;
    private serialize;
    private deserialize;
}
