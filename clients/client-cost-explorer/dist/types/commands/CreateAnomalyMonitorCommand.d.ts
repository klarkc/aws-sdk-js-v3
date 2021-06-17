import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { CreateAnomalyMonitorRequest, CreateAnomalyMonitorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAnomalyMonitorCommandInput extends CreateAnomalyMonitorRequest {
}
export interface CreateAnomalyMonitorCommandOutput extends CreateAnomalyMonitorResponse, __MetadataBearer {
}
/**
 * <p>Creates a new cost anomaly detection monitor with the requested type and monitor
 *       specification. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, CreateAnomalyMonitorCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, CreateAnomalyMonitorCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new CreateAnomalyMonitorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAnomalyMonitorCommandInput} for command's `input` shape.
 * @see {@link CreateAnomalyMonitorCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAnomalyMonitorCommand extends $Command<CreateAnomalyMonitorCommandInput, CreateAnomalyMonitorCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: CreateAnomalyMonitorCommandInput;
    constructor(input: CreateAnomalyMonitorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAnomalyMonitorCommandInput, CreateAnomalyMonitorCommandOutput>;
    private serialize;
    private deserialize;
}
