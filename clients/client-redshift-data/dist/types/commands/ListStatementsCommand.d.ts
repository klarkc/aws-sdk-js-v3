import { RedshiftDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftDataClient";
import { ListStatementsRequest, ListStatementsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListStatementsCommandInput extends ListStatementsRequest {
}
export interface ListStatementsCommandOutput extends ListStatementsResponse, __MetadataBearer {
}
/**
 * <p>List of SQL statements. By default, only finished statements are shown.
 *         A token is returned to page through the statement list. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, ListStatementsCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, ListStatementsCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * const client = new RedshiftDataClient(config);
 * const command = new ListStatementsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStatementsCommandInput} for command's `input` shape.
 * @see {@link ListStatementsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListStatementsCommand extends $Command<ListStatementsCommandInput, ListStatementsCommandOutput, RedshiftDataClientResolvedConfig> {
    readonly input: ListStatementsCommandInput;
    constructor(input: ListStatementsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStatementsCommandInput, ListStatementsCommandOutput>;
    private serialize;
    private deserialize;
}
