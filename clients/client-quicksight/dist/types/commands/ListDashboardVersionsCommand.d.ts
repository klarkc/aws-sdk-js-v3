import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListDashboardVersionsRequest, ListDashboardVersionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDashboardVersionsCommandInput extends ListDashboardVersionsRequest {
}
export interface ListDashboardVersionsCommandOutput extends ListDashboardVersionsResponse, __MetadataBearer {
}
/**
 * <p>Lists all the versions of the dashboards in the QuickSight subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListDashboardVersionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListDashboardVersionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListDashboardVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDashboardVersionsCommandInput} for command's `input` shape.
 * @see {@link ListDashboardVersionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDashboardVersionsCommand extends $Command<ListDashboardVersionsCommandInput, ListDashboardVersionsCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: ListDashboardVersionsCommandInput;
    constructor(input: ListDashboardVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDashboardVersionsCommandInput, ListDashboardVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
