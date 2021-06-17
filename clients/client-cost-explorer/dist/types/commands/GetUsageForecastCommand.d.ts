import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetUsageForecastRequest, GetUsageForecastResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetUsageForecastCommandInput extends GetUsageForecastRequest {
}
export interface GetUsageForecastCommandOutput extends GetUsageForecastResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetUsageForecastCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetUsageForecastCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetUsageForecastCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUsageForecastCommandInput} for command's `input` shape.
 * @see {@link GetUsageForecastCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetUsageForecastCommand extends $Command<GetUsageForecastCommandInput, GetUsageForecastCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetUsageForecastCommandInput;
    constructor(input: GetUsageForecastCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetUsageForecastCommandInput, GetUsageForecastCommandOutput>;
    private serialize;
    private deserialize;
}
