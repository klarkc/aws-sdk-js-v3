import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { SearchDashboardsRequest, SearchDashboardsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SearchDashboardsCommandInput extends SearchDashboardsRequest {
}
export interface SearchDashboardsCommandOutput extends SearchDashboardsResponse, __MetadataBearer {
}
/**
 * <p>Searches for dashboards that belong to a user. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, SearchDashboardsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, SearchDashboardsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new SearchDashboardsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchDashboardsCommandInput} for command's `input` shape.
 * @see {@link SearchDashboardsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SearchDashboardsCommand extends $Command<SearchDashboardsCommandInput, SearchDashboardsCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: SearchDashboardsCommandInput;
    constructor(input: SearchDashboardsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchDashboardsCommandInput, SearchDashboardsCommandOutput>;
    private serialize;
    private deserialize;
}
