import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { ListSubscriptionsByTopicInput, ListSubscriptionsByTopicResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSubscriptionsByTopicCommandInput extends ListSubscriptionsByTopicInput {
}
export interface ListSubscriptionsByTopicCommandOutput extends ListSubscriptionsByTopicResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of the subscriptions to a specific topic. Each call returns a limited
 *             list of subscriptions, up to 100. If there are more subscriptions, a
 *                 <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in
 *             a new <code>ListSubscriptionsByTopic</code> call to get further results.</p>
 *         <p>This action is throttled at 30 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListSubscriptionsByTopicCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListSubscriptionsByTopicCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new ListSubscriptionsByTopicCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSubscriptionsByTopicCommandInput} for command's `input` shape.
 * @see {@link ListSubscriptionsByTopicCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSubscriptionsByTopicCommand extends $Command<ListSubscriptionsByTopicCommandInput, ListSubscriptionsByTopicCommandOutput, SNSClientResolvedConfig> {
    readonly input: ListSubscriptionsByTopicCommandInput;
    constructor(input: ListSubscriptionsByTopicCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSubscriptionsByTopicCommandInput, ListSubscriptionsByTopicCommandOutput>;
    private serialize;
    private deserialize;
}
