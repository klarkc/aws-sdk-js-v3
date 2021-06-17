import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { ListAnomaliesForInsightRequest, ListAnomaliesForInsightResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAnomaliesForInsightCommandInput extends ListAnomaliesForInsightRequest {
}
export interface ListAnomaliesForInsightCommandOutput extends ListAnomaliesForInsightResponse, __MetadataBearer {
}
/**
 * <p>
 *    		Returns a list of the anomalies that belong to an insight that you specify using its ID.
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, ListAnomaliesForInsightCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, ListAnomaliesForInsightCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new ListAnomaliesForInsightCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAnomaliesForInsightCommandInput} for command's `input` shape.
 * @see {@link ListAnomaliesForInsightCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAnomaliesForInsightCommand extends $Command<ListAnomaliesForInsightCommandInput, ListAnomaliesForInsightCommandOutput, DevOpsGuruClientResolvedConfig> {
    readonly input: ListAnomaliesForInsightCommandInput;
    constructor(input: ListAnomaliesForInsightCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DevOpsGuruClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAnomaliesForInsightCommandInput, ListAnomaliesForInsightCommandOutput>;
    private serialize;
    private deserialize;
}
