import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import { QueryTableRowsRequest, QueryTableRowsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface QueryTableRowsCommandInput extends QueryTableRowsRequest {
}
export interface QueryTableRowsCommandOutput extends QueryTableRowsResult, __MetadataBearer {
}
/**
 * <p>
 *             The QueryTableRows API allows you to use a filter formula to query for specific rows in a table.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, QueryTableRowsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, QueryTableRowsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new QueryTableRowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link QueryTableRowsCommandInput} for command's `input` shape.
 * @see {@link QueryTableRowsCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class QueryTableRowsCommand extends $Command<QueryTableRowsCommandInput, QueryTableRowsCommandOutput, HoneycodeClientResolvedConfig> {
    readonly input: QueryTableRowsCommandInput;
    constructor(input: QueryTableRowsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HoneycodeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<QueryTableRowsCommandInput, QueryTableRowsCommandOutput>;
    private serialize;
    private deserialize;
}
