import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { ListSubscriptionsInput, ListSubscriptionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSubscriptionsCommandInput extends ListSubscriptionsInput {
}
export interface ListSubscriptionsCommandOutput extends ListSubscriptionsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of the requester's subscriptions. Each call returns a limited list of
 *             subscriptions, up to 100. If there are more subscriptions, a <code>NextToken</code> is
 *             also returned. Use the <code>NextToken</code> parameter in a new
 *                 <code>ListSubscriptions</code> call to get further results.</p>
 *         <p>This action is throttled at 30 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListSubscriptionsCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListSubscriptionsCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new ListSubscriptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link ListSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSubscriptionsCommand extends $Command<ListSubscriptionsCommandInput, ListSubscriptionsCommandOutput, SNSClientResolvedConfig> {
    readonly input: ListSubscriptionsCommandInput;
    constructor(input: ListSubscriptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSubscriptionsCommandInput, ListSubscriptionsCommandOutput>;
    private serialize;
    private deserialize;
}
