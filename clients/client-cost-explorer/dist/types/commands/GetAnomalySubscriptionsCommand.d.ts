import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetAnomalySubscriptionsRequest, GetAnomalySubscriptionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAnomalySubscriptionsCommandInput extends GetAnomalySubscriptionsRequest {
}
export interface GetAnomalySubscriptionsCommandOutput extends GetAnomalySubscriptionsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the cost anomaly subscription objects for your account. You can filter using a
 *       list of cost anomaly monitor Amazon Resource Names (ARNs). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetAnomalySubscriptionsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetAnomalySubscriptionsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetAnomalySubscriptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAnomalySubscriptionsCommandInput} for command's `input` shape.
 * @see {@link GetAnomalySubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAnomalySubscriptionsCommand extends $Command<GetAnomalySubscriptionsCommandInput, GetAnomalySubscriptionsCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetAnomalySubscriptionsCommandInput;
    constructor(input: GetAnomalySubscriptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAnomalySubscriptionsCommandInput, GetAnomalySubscriptionsCommandOutput>;
    private serialize;
    private deserialize;
}
