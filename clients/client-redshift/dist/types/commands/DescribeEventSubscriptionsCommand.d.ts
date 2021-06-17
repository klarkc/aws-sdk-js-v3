import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeEventSubscriptionsMessage, EventSubscriptionsMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEventSubscriptionsCommandInput extends DescribeEventSubscriptionsMessage {
}
export interface DescribeEventSubscriptionsCommandOutput extends EventSubscriptionsMessage, __MetadataBearer {
}
/**
 * <p>Lists descriptions of all the Amazon Redshift event notification subscriptions for a
 *             customer account. If you specify a subscription name, lists the description for that
 *             subscription.</p>
 *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all event notification subscriptions that match any combination of the specified keys
 *             and values. For example, if you have <code>owner</code> and <code>environment</code> for
 *             tag keys, and <code>admin</code> and <code>test</code> for tag values, all subscriptions
 *             that have any combination of those values are returned.</p>
 *         <p>If both tag keys and values are omitted from the request, subscriptions are
 *             returned regardless of whether they have tag keys or values associated with
 *             them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeEventSubscriptionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeEventSubscriptionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeEventSubscriptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEventSubscriptionsCommand extends $Command<DescribeEventSubscriptionsCommandInput, DescribeEventSubscriptionsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeEventSubscriptionsCommandInput;
    constructor(input: DescribeEventSubscriptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventSubscriptionsCommandInput, DescribeEventSubscriptionsCommandOutput>;
    private serialize;
    private deserialize;
}
