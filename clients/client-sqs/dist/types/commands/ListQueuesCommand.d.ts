import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { ListQueuesRequest, ListQueuesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListQueuesCommandInput extends ListQueuesRequest {
}
export interface ListQueuesCommandOutput extends ListQueuesResult, __MetadataBearer {
}
/**
 * <p>Returns a list of your queues in the current region. The response includes a maximum of 1,000 results. If you specify a value for the optional
 *           <code>QueueNamePrefix</code> parameter, only queues with a name that begins with the specified value are returned.</p>
 *          <p> The <code>listQueues</code> methods supports
 *           pagination. Set parameter <code>MaxResults</code> in the request to specify the maximum number of
 *           results to be returned in the response. If you do not set <code>MaxResults</code>,
 *           the response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are additional results to
 *           display, the response includes a value for <code>NextToken</code>. Use
 *           <code>NextToken</code> as a parameter in your next request to
 *           <code>listQueues</code> to receive the next page of results.  </p>
 *          <note>
 *             <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, ListQueuesCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, ListQueuesCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new ListQueuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQueuesCommandInput} for command's `input` shape.
 * @see {@link ListQueuesCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListQueuesCommand extends $Command<ListQueuesCommandInput, ListQueuesCommandOutput, SQSClientResolvedConfig> {
    readonly input: ListQueuesCommandInput;
    constructor(input: ListQueuesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListQueuesCommandInput, ListQueuesCommandOutput>;
    private serialize;
    private deserialize;
}
