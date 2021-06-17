import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetJourneyExecutionMetricsRequest, GetJourneyExecutionMetricsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetJourneyExecutionMetricsCommandInput extends GetJourneyExecutionMetricsRequest {
}
export interface GetJourneyExecutionMetricsCommandOutput extends GetJourneyExecutionMetricsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetJourneyExecutionMetricsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetJourneyExecutionMetricsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetJourneyExecutionMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJourneyExecutionMetricsCommandInput} for command's `input` shape.
 * @see {@link GetJourneyExecutionMetricsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetJourneyExecutionMetricsCommand extends $Command<GetJourneyExecutionMetricsCommandInput, GetJourneyExecutionMetricsCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetJourneyExecutionMetricsCommandInput;
    constructor(input: GetJourneyExecutionMetricsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetJourneyExecutionMetricsCommandInput, GetJourneyExecutionMetricsCommandOutput>;
    private serialize;
    private deserialize;
}
