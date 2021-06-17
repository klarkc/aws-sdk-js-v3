import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetCostForecastRequest, GetCostForecastResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCostForecastCommandInput extends GetCostForecastRequest {
}
export interface GetCostForecastCommandOutput extends GetCostForecastResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetCostForecastCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetCostForecastCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetCostForecastCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCostForecastCommandInput} for command's `input` shape.
 * @see {@link GetCostForecastCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCostForecastCommand extends $Command<GetCostForecastCommandInput, GetCostForecastCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetCostForecastCommandInput;
    constructor(input: GetCostForecastCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCostForecastCommandInput, GetCostForecastCommandOutput>;
    private serialize;
    private deserialize;
}
