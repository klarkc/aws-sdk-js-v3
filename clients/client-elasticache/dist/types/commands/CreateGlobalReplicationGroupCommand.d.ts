import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CreateGlobalReplicationGroupMessage, CreateGlobalReplicationGroupResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateGlobalReplicationGroupCommandInput extends CreateGlobalReplicationGroupMessage {
}
export interface CreateGlobalReplicationGroupCommandOutput extends CreateGlobalReplicationGroupResult, __MetadataBearer {
}
/**
 * <p>Global Datastore for Redis offers fully managed, fast,
 *             reliable and secure cross-region replication.
 *             Using Global Datastore for Redis, you can create cross-region
 *             read replica clusters for ElastiCache for Redis to enable low-latency reads
 *             and disaster recovery across regions. For more information,
 *
 *             see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p>
 *
 *          <ul>
 *             <li>
 *                <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p>
 *             </li>
 *             <li>
 *                <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new CreateGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link CreateGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateGlobalReplicationGroupCommand extends $Command<CreateGlobalReplicationGroupCommandInput, CreateGlobalReplicationGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: CreateGlobalReplicationGroupCommandInput;
    constructor(input: CreateGlobalReplicationGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGlobalReplicationGroupCommandInput, CreateGlobalReplicationGroupCommandOutput>;
    private serialize;
    private deserialize;
}
