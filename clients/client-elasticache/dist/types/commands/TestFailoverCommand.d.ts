import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { TestFailoverMessage, TestFailoverResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TestFailoverCommandInput extends TestFailoverMessage {
}
export interface TestFailoverCommandOutput extends TestFailoverResult, __MetadataBearer {
}
/**
 * <p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on
 *             a specified node group (called shard in the console) in a replication group (called cluster in the console).</p>
 *
 *         <p class="title">
 *             <b>Note the following</b>
 *          </p>
 *          <ul>
 *             <li>
 *                 <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and AWS CLI)
 *                     in any rolling 24-hour period.</p>
 *             </li>
 *             <li>
 *                 <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p>
 *                 <p> </p>
 *             </li>
 *             <li>
 *                 <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group,
 *                     the first node replacement must complete before a subsequent call can be made.</p>
 *             </li>
 *             <li>
 *                 <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console,
 *                     the AWS CLI, or the ElastiCache API.
 *                     Look for the following automatic failover related events, listed here in order of occurrance:</p>
 *                 <ol>
 *                   <li>
 *                         <p>Replication group message: <code>Test Failover API called for node group <node-group-id></code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                         <p>Cache cluster message: <code>Failover from primary node <primary-node-id> to replica node <node-id> completed</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                         <p>Replication group message: <code>Failover from primary node <primary-node-id> to replica node <node-id> completed</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                         <p>Cache cluster message: <code>Recovering cache nodes <node-id></code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                         <p>Cache cluster message: <code>Finished recovery for cache nodes <node-id></code>
 *                      </p>
 *                   </li>
 *                </ol>
 *
 *                 <p>For more information see:</p>
 *                 <ul>
 *                   <li>
 *                         <p>
 *                         <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a>
 *                             in the <i>ElastiCache User Guide</i>
 *                      </p>
 *                   </li>
 *                   <li>
 *                         <p>
 *                         <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *
 *         <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, TestFailoverCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, TestFailoverCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new TestFailoverCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestFailoverCommandInput} for command's `input` shape.
 * @see {@link TestFailoverCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TestFailoverCommand extends $Command<TestFailoverCommandInput, TestFailoverCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: TestFailoverCommandInput;
    constructor(input: TestFailoverCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TestFailoverCommandInput, TestFailoverCommandOutput>;
    private serialize;
    private deserialize;
}
