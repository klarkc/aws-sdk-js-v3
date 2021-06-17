import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListDashboardsRequest, ListDashboardsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDashboardsCommandInput extends ListDashboardsRequest {
}
export interface ListDashboardsCommandOutput extends ListDashboardsResponse, __MetadataBearer {
}
/**
 * <p>Lists dashboards in an AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListDashboardsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListDashboardsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListDashboardsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDashboardsCommandInput} for command's `input` shape.
 * @see {@link ListDashboardsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDashboardsCommand extends $Command<ListDashboardsCommandInput, ListDashboardsCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: ListDashboardsCommandInput;
    constructor(input: ListDashboardsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDashboardsCommandInput, ListDashboardsCommandOutput>;
    private serialize;
    private deserialize;
}
