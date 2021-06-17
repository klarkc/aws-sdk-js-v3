import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ListDatasetsRequest, ListDatasetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDatasetsCommandInput extends ListDatasetsRequest {
}
export interface ListDatasetsCommandOutput extends ListDatasetsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of datasets created using the <a>CreateDataset</a> operation.
 *       For each dataset, a summary of its properties, including its Amazon Resource Name (ARN), is
 *       returned. To retrieve the complete set of properties, use the ARN with the <a>DescribeDataset</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListDatasetsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListDatasetsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListDatasetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDatasetsCommand extends $Command<ListDatasetsCommandInput, ListDatasetsCommandOutput, ForecastClientResolvedConfig> {
    readonly input: ListDatasetsCommandInput;
    constructor(input: ListDatasetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ForecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDatasetsCommandInput, ListDatasetsCommandOutput>;
    private serialize;
    private deserialize;
}
