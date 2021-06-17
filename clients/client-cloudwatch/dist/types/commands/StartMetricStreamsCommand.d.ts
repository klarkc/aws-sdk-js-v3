import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { StartMetricStreamsInput, StartMetricStreamsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartMetricStreamsCommandInput extends StartMetricStreamsInput {
}
export interface StartMetricStreamsCommandOutput extends StartMetricStreamsOutput, __MetadataBearer {
}
/**
 * <p>Starts the streaming of metrics for one or more of your metric streams.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, StartMetricStreamsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, StartMetricStreamsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new StartMetricStreamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMetricStreamsCommandInput} for command's `input` shape.
 * @see {@link StartMetricStreamsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartMetricStreamsCommand extends $Command<StartMetricStreamsCommandInput, StartMetricStreamsCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: StartMetricStreamsCommandInput;
    constructor(input: StartMetricStreamsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartMetricStreamsCommandInput, StartMetricStreamsCommandOutput>;
    private serialize;
    private deserialize;
}
