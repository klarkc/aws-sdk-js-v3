import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetAnomalyMonitorsRequest, GetAnomalyMonitorsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAnomalyMonitorsCommandInput extends GetAnomalyMonitorsRequest {
}
export interface GetAnomalyMonitorsCommandOutput extends GetAnomalyMonitorsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the cost anomaly monitor definitions for your account. You can filter using a
 *       list of cost anomaly monitor Amazon Resource Names (ARNs). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetAnomalyMonitorsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetAnomalyMonitorsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetAnomalyMonitorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAnomalyMonitorsCommandInput} for command's `input` shape.
 * @see {@link GetAnomalyMonitorsCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAnomalyMonitorsCommand extends $Command<GetAnomalyMonitorsCommandInput, GetAnomalyMonitorsCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetAnomalyMonitorsCommandInput;
    constructor(input: GetAnomalyMonitorsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAnomalyMonitorsCommandInput, GetAnomalyMonitorsCommandOutput>;
    private serialize;
    private deserialize;
}
