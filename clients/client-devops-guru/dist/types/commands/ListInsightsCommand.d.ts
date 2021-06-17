import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { ListInsightsRequest, ListInsightsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListInsightsCommandInput extends ListInsightsRequest {
}
export interface ListInsightsCommandOutput extends ListInsightsResponse, __MetadataBearer {
}
/**
 * <p>
 *    		Returns a list of insights in your AWS account. You can specify which insights are returned by their start time and
 *    		status (<code>ONGOING</code>, <code>CLOSED</code>, or <code>ANY</code>).
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, ListInsightsCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, ListInsightsCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new ListInsightsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInsightsCommandInput} for command's `input` shape.
 * @see {@link ListInsightsCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListInsightsCommand extends $Command<ListInsightsCommandInput, ListInsightsCommandOutput, DevOpsGuruClientResolvedConfig> {
    readonly input: ListInsightsCommandInput;
    constructor(input: ListInsightsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DevOpsGuruClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInsightsCommandInput, ListInsightsCommandOutput>;
    private serialize;
    private deserialize;
}
