import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { UpdateAnomalyMonitorRequest, UpdateAnomalyMonitorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateAnomalyMonitorCommandInput extends UpdateAnomalyMonitorRequest {
}
export interface UpdateAnomalyMonitorCommandOutput extends UpdateAnomalyMonitorResponse, __MetadataBearer {
}
/**
 * <p>Updates an existing cost anomaly monitor. The changes made are applied going forward, and
 *       does not change anomalies detected in the past. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, UpdateAnomalyMonitorCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, UpdateAnomalyMonitorCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new UpdateAnomalyMonitorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAnomalyMonitorCommandInput} for command's `input` shape.
 * @see {@link UpdateAnomalyMonitorCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAnomalyMonitorCommand extends $Command<UpdateAnomalyMonitorCommandInput, UpdateAnomalyMonitorCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: UpdateAnomalyMonitorCommandInput;
    constructor(input: UpdateAnomalyMonitorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAnomalyMonitorCommandInput, UpdateAnomalyMonitorCommandOutput>;
    private serialize;
    private deserialize;
}
