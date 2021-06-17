import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import { ListTableRowsRequest, ListTableRowsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTableRowsCommandInput extends ListTableRowsRequest {
}
export interface ListTableRowsCommandOutput extends ListTableRowsResult, __MetadataBearer {
}
/**
 * <p>
 *             The ListTableRows API allows you to retrieve a list of all the rows in a table in a workbook.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, ListTableRowsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, ListTableRowsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new ListTableRowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTableRowsCommandInput} for command's `input` shape.
 * @see {@link ListTableRowsCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTableRowsCommand extends $Command<ListTableRowsCommandInput, ListTableRowsCommandOutput, HoneycodeClientResolvedConfig> {
    readonly input: ListTableRowsCommandInput;
    constructor(input: ListTableRowsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HoneycodeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTableRowsCommandInput, ListTableRowsCommandOutput>;
    private serialize;
    private deserialize;
}
