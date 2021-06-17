import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { DeleteAnomalyMonitorRequest, DeleteAnomalyMonitorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAnomalyMonitorCommandInput extends DeleteAnomalyMonitorRequest {
}
export interface DeleteAnomalyMonitorCommandOutput extends DeleteAnomalyMonitorResponse, __MetadataBearer {
}
/**
 * <p>Deletes a cost anomaly monitor. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, DeleteAnomalyMonitorCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, DeleteAnomalyMonitorCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new DeleteAnomalyMonitorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAnomalyMonitorCommandInput} for command's `input` shape.
 * @see {@link DeleteAnomalyMonitorCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAnomalyMonitorCommand extends $Command<DeleteAnomalyMonitorCommandInput, DeleteAnomalyMonitorCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: DeleteAnomalyMonitorCommandInput;
    constructor(input: DeleteAnomalyMonitorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAnomalyMonitorCommandInput, DeleteAnomalyMonitorCommandOutput>;
    private serialize;
    private deserialize;
}
