import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetAnomaliesRequest, GetAnomaliesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAnomaliesCommandInput extends GetAnomaliesRequest {
}
export interface GetAnomaliesCommandOutput extends GetAnomaliesResponse, __MetadataBearer {
}
/**
 * <p>Retrieves all of the cost anomalies detected on your account, during the time period
 *       specified by the <code>DateInterval</code> object. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetAnomaliesCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetAnomaliesCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetAnomaliesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAnomaliesCommandInput} for command's `input` shape.
 * @see {@link GetAnomaliesCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAnomaliesCommand extends $Command<GetAnomaliesCommandInput, GetAnomaliesCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetAnomaliesCommandInput;
    constructor(input: GetAnomaliesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAnomaliesCommandInput, GetAnomaliesCommandOutput>;
    private serialize;
    private deserialize;
}
