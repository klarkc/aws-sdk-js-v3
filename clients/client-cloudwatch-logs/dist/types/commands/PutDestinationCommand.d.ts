import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { PutDestinationRequest, PutDestinationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutDestinationCommandInput extends PutDestinationRequest {
}
export interface PutDestinationCommandOutput extends PutDestinationResponse, __MetadataBearer {
}
/**
 * <p>Creates or updates a destination. This operation is used only to create destinations for cross-account subscriptions.</p>
 *          <p>A destination encapsulates a physical resource (such
 *       as an Amazon Kinesis stream) and enables you to subscribe to a real-time stream of log events
 *       for a different account, ingested using <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>.</p>
 *          <p>Through an access policy, a destination controls what is written to it.
 *       By default, <code>PutDestination</code> does not set any access policy with the destination,
 *       which means a cross-account user cannot call <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutSubscriptionFilter.html">PutSubscriptionFilter</a> against
 *       this destination. To enable this, the destination owner must call <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html">PutDestinationPolicy</a> after <code>PutDestination</code>.</p>
 *          <p>To perform a <code>PutDestination</code> operation, you must also have the
 *     <code>iam:PassRole</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutDestinationCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutDestinationCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new PutDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDestinationCommandInput} for command's `input` shape.
 * @see {@link PutDestinationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutDestinationCommand extends $Command<PutDestinationCommandInput, PutDestinationCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: PutDestinationCommandInput;
    constructor(input: PutDestinationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutDestinationCommandInput, PutDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
