import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { GetCurrentMetricDataRequest, GetCurrentMetricDataResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCurrentMetricDataCommandInput extends GetCurrentMetricDataRequest {
}
export interface GetCurrentMetricDataCommandOutput extends GetCurrentMetricDataResponse, __MetadataBearer {
}
/**
 * <p>Gets the real-time metric data from the specified Amazon Connect instance.</p>
 *          <p>For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics
 *     Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetCurrentMetricDataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetCurrentMetricDataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new GetCurrentMetricDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCurrentMetricDataCommandInput} for command's `input` shape.
 * @see {@link GetCurrentMetricDataCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCurrentMetricDataCommand extends $Command<GetCurrentMetricDataCommandInput, GetCurrentMetricDataCommandOutput, ConnectClientResolvedConfig> {
    readonly input: GetCurrentMetricDataCommandInput;
    constructor(input: GetCurrentMetricDataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCurrentMetricDataCommandInput, GetCurrentMetricDataCommandOutput>;
    private serialize;
    private deserialize;
}
