import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { ListMetricStreamsInput, ListMetricStreamsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListMetricStreamsCommandInput extends ListMetricStreamsInput {
}
export interface ListMetricStreamsCommandOutput extends ListMetricStreamsOutput, __MetadataBearer {
}
/**
 * <p>Returns a list of metric streams in this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, ListMetricStreamsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, ListMetricStreamsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new ListMetricStreamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMetricStreamsCommandInput} for command's `input` shape.
 * @see {@link ListMetricStreamsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListMetricStreamsCommand extends $Command<ListMetricStreamsCommandInput, ListMetricStreamsCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: ListMetricStreamsCommandInput;
    constructor(input: ListMetricStreamsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMetricStreamsCommandInput, ListMetricStreamsCommandOutput>;
    private serialize;
    private deserialize;
}
