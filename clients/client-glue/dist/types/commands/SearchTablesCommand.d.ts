import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { SearchTablesRequest, SearchTablesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SearchTablesCommandInput extends SearchTablesRequest {
}
export interface SearchTablesCommandOutput extends SearchTablesResponse, __MetadataBearer {
}
/**
 * <p>Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions. </p>
 *          <p>You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, SearchTablesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, SearchTablesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new SearchTablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchTablesCommandInput} for command's `input` shape.
 * @see {@link SearchTablesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SearchTablesCommand extends $Command<SearchTablesCommandInput, SearchTablesCommandOutput, GlueClientResolvedConfig> {
    readonly input: SearchTablesCommandInput;
    constructor(input: SearchTablesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchTablesCommandInput, SearchTablesCommandOutput>;
    private serialize;
    private deserialize;
}
