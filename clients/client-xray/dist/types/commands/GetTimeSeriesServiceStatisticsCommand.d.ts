import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { GetTimeSeriesServiceStatisticsRequest, GetTimeSeriesServiceStatisticsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTimeSeriesServiceStatisticsCommandInput extends GetTimeSeriesServiceStatisticsRequest {
}
export interface GetTimeSeriesServiceStatisticsCommandOutput extends GetTimeSeriesServiceStatisticsResult, __MetadataBearer {
}
/**
 * <p>Get an aggregation of service statistics defined by a specific time
 *             range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetTimeSeriesServiceStatisticsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetTimeSeriesServiceStatisticsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetTimeSeriesServiceStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTimeSeriesServiceStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetTimeSeriesServiceStatisticsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTimeSeriesServiceStatisticsCommand extends $Command<GetTimeSeriesServiceStatisticsCommandInput, GetTimeSeriesServiceStatisticsCommandOutput, XRayClientResolvedConfig> {
    readonly input: GetTimeSeriesServiceStatisticsCommandInput;
    constructor(input: GetTimeSeriesServiceStatisticsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: XRayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTimeSeriesServiceStatisticsCommandInput, GetTimeSeriesServiceStatisticsCommandOutput>;
    private serialize;
    private deserialize;
}
