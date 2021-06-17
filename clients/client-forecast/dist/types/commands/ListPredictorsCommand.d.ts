import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ListPredictorsRequest, ListPredictorsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPredictorsCommandInput extends ListPredictorsRequest {
}
export interface ListPredictorsCommandOutput extends ListPredictorsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of predictors created using the <a>CreatePredictor</a>
 *       operation. For each predictor, this operation returns a summary of its properties, including
 *       its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the
 *       ARN with the <a>DescribePredictor</a> operation. You can filter the list using an
 *       array of <a>Filter</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListPredictorsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListPredictorsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListPredictorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPredictorsCommandInput} for command's `input` shape.
 * @see {@link ListPredictorsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPredictorsCommand extends $Command<ListPredictorsCommandInput, ListPredictorsCommandOutput, ForecastClientResolvedConfig> {
    readonly input: ListPredictorsCommandInput;
    constructor(input: ListPredictorsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ForecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPredictorsCommandInput, ListPredictorsCommandOutput>;
    private serialize;
    private deserialize;
}
