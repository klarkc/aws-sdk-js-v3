import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { ListDashboardsInput, ListDashboardsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDashboardsCommandInput extends ListDashboardsInput {
}
export interface ListDashboardsCommandOutput extends ListDashboardsOutput, __MetadataBearer {
}
/**
 * <p>Returns a list of the dashboards for your account. If you include <code>DashboardNamePrefix</code>, only
 * 			those dashboards with names starting with the prefix are listed. Otherwise, all dashboards in your account are
 * 			listed.
 * 	    </p>
 * 		       <p>
 *             <code>ListDashboards</code> returns up to 1000 results on one page. If there
 * 			are more than 1000 dashboards, you can call <code>ListDashboards</code> again and
 * 		include the value you received for <code>NextToken</code> in the first call, to receive
 * 		the next 1000 results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, ListDashboardsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, ListDashboardsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new ListDashboardsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDashboardsCommandInput} for command's `input` shape.
 * @see {@link ListDashboardsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDashboardsCommand extends $Command<ListDashboardsCommandInput, ListDashboardsCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: ListDashboardsCommandInput;
    constructor(input: ListDashboardsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDashboardsCommandInput, ListDashboardsCommandOutput>;
    private serialize;
    private deserialize;
}
