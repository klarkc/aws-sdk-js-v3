import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ListForecastsRequest, ListForecastsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListForecastsCommandInput extends ListForecastsRequest {
}
export interface ListForecastsCommandOutput extends ListForecastsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of forecasts created using the <a>CreateForecast</a> operation.
 *       For each forecast, this operation returns a summary of its properties, including its Amazon
 *       Resource Name (ARN). To retrieve the complete set of properties, specify the ARN with the
 *         <a>DescribeForecast</a> operation. You can filter the list using an array of
 *         <a>Filter</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListForecastsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListForecastsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListForecastsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListForecastsCommandInput} for command's `input` shape.
 * @see {@link ListForecastsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListForecastsCommand extends $Command<ListForecastsCommandInput, ListForecastsCommandOutput, ForecastClientResolvedConfig> {
    readonly input: ListForecastsCommandInput;
    constructor(input: ListForecastsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ForecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListForecastsCommandInput, ListForecastsCommandOutput>;
    private serialize;
    private deserialize;
}
