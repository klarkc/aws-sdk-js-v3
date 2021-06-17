import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetStatisticsRequest, GetStatisticsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetStatisticsCommandInput extends GetStatisticsRequest {
}
export interface GetStatisticsCommandOutput extends GetStatisticsResponse, __MetadataBearer {
}
/**
 * <p>Returns the count, average, sum, minimum, maximum, sum of squares, variance,
 *       and standard deviation for the specified aggregated field. If the aggregation field is of type
 *       <code>String</code>, only the count statistic is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetStatisticsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetStatisticsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetStatisticsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetStatisticsCommand extends $Command<GetStatisticsCommandInput, GetStatisticsCommandOutput, IoTClientResolvedConfig> {
    readonly input: GetStatisticsCommandInput;
    constructor(input: GetStatisticsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetStatisticsCommandInput, GetStatisticsCommandOutput>;
    private serialize;
    private deserialize;
}
