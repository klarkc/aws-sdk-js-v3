import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetJourneyExecutionActivityMetricsRequest, GetJourneyExecutionActivityMetricsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetJourneyExecutionActivityMetricsCommandInput extends GetJourneyExecutionActivityMetricsRequest {
}
export interface GetJourneyExecutionActivityMetricsCommandOutput extends GetJourneyExecutionActivityMetricsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey activity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetJourneyExecutionActivityMetricsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetJourneyExecutionActivityMetricsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetJourneyExecutionActivityMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJourneyExecutionActivityMetricsCommandInput} for command's `input` shape.
 * @see {@link GetJourneyExecutionActivityMetricsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetJourneyExecutionActivityMetricsCommand extends $Command<GetJourneyExecutionActivityMetricsCommandInput, GetJourneyExecutionActivityMetricsCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetJourneyExecutionActivityMetricsCommandInput;
    constructor(input: GetJourneyExecutionActivityMetricsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetJourneyExecutionActivityMetricsCommandInput, GetJourneyExecutionActivityMetricsCommandOutput>;
    private serialize;
    private deserialize;
}
