import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import { BatchCreateTableRowsRequest, BatchCreateTableRowsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchCreateTableRowsCommandInput extends BatchCreateTableRowsRequest {
}
export interface BatchCreateTableRowsCommandOutput extends BatchCreateTableRowsResult, __MetadataBearer {
}
/**
 * <p>
 *             The BatchCreateTableRows API allows you to create one or more rows at the end of a table in a workbook.
 *             The API allows you to specify the values to set in some or all of the columns in the new rows.
 *         </p>
 *         <p>
 *             If a column is not explicitly set in a specific row, then the column level formula specified in the table
 *             will be applied to the new row. If there is no column level formula but the last row of the table has a
 *             formula, then that formula will be copied down to the new row. If there is no column level formula and
 *             no formula in the last row of the table, then that column will be left blank for the new rows.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, BatchCreateTableRowsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, BatchCreateTableRowsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new BatchCreateTableRowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchCreateTableRowsCommandInput} for command's `input` shape.
 * @see {@link BatchCreateTableRowsCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchCreateTableRowsCommand extends $Command<BatchCreateTableRowsCommandInput, BatchCreateTableRowsCommandOutput, HoneycodeClientResolvedConfig> {
    readonly input: BatchCreateTableRowsCommandInput;
    constructor(input: BatchCreateTableRowsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HoneycodeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchCreateTableRowsCommandInput, BatchCreateTableRowsCommandOutput>;
    private serialize;
    private deserialize;
}
