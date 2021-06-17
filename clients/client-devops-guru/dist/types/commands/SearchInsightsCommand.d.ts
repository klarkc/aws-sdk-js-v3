import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { SearchInsightsRequest, SearchInsightsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SearchInsightsCommandInput extends SearchInsightsRequest {
}
export interface SearchInsightsCommandOutput extends SearchInsightsResponse, __MetadataBearer {
}
/**
 * <p>
 *    		Returns a list of insights in your AWS account. You can specify which insights are returned by their start time, one or more statuses
 *    		(<code>ONGOING</code>, <code>CLOSED</code>, and <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>,
 *    		and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>).
 *    	</p>
 *    	     <p>
 *    		Use the <code>Filters</code> parameter to specify status and severity
 *    		search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search.
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, SearchInsightsCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, SearchInsightsCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new SearchInsightsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchInsightsCommandInput} for command's `input` shape.
 * @see {@link SearchInsightsCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SearchInsightsCommand extends $Command<SearchInsightsCommandInput, SearchInsightsCommandOutput, DevOpsGuruClientResolvedConfig> {
    readonly input: SearchInsightsCommandInput;
    constructor(input: SearchInsightsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DevOpsGuruClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchInsightsCommandInput, SearchInsightsCommandOutput>;
    private serialize;
    private deserialize;
}
