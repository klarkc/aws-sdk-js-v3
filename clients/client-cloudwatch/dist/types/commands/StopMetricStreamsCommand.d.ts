import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { StopMetricStreamsInput, StopMetricStreamsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopMetricStreamsCommandInput extends StopMetricStreamsInput {
}
export interface StopMetricStreamsCommandOutput extends StopMetricStreamsOutput, __MetadataBearer {
}
/**
 * <p>Stops the streaming of metrics for one or more of your metric streams.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, StopMetricStreamsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, StopMetricStreamsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new StopMetricStreamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopMetricStreamsCommandInput} for command's `input` shape.
 * @see {@link StopMetricStreamsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopMetricStreamsCommand extends $Command<StopMetricStreamsCommandInput, StopMetricStreamsCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: StopMetricStreamsCommandInput;
    constructor(input: StopMetricStreamsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopMetricStreamsCommandInput, StopMetricStreamsCommandOutput>;
    private serialize;
    private deserialize;
}
