import { __extends } from "tslib";
import { CreateReplicationGroupMessage, CreateReplicationGroupResult } from "../models/models_0";
import { deserializeAws_queryCreateReplicationGroupCommand, serializeAws_queryCreateReplicationGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group.</p>
 *         <p>This API can be used to create a standalone regional replication group or a secondary replication group associated with a Global datastore.</p>
 *         <p>A Redis (cluster mode disabled) replication group is a collection of clusters,
 *             where one of the clusters is a read/write primary and the others are read-only replicas.
 *             Writes to the primary are asynchronously propagated to the replicas.</p>
 *         <p>A Redis cluster-mode enabled cluster is comprised of from 1 to 90 shards (API/CLI: node groups).
 *             Each shard has a primary node and up to 5 read-only replica nodes. The configuration can range from 90 shards and 0 replicas to 15 shards and 5 replicas, which is the maximum number or replicas allowed.
 *
 *         </p>
 *         <p>The node or shard limit can be increased to a maximum of 500 per cluster if the Redis engine version is 5.0.6 or higher. For example, you can choose to configure a 500 node cluster that ranges between
 *             83 shards (one primary and 5 replicas per shard) and 500 shards (single primary and no replicas). Make sure there are enough available IP addresses to accommodate the increase.
 *             Common pitfalls include the subnets in the subnet group have too small a CIDR range or the subnets are shared and heavily used by other clusters. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.Creating.html">Creating a Subnet Group</a>. For versions below 5.0.6,
 *             the limit is 250 per cluster.</p>
 *         <p>To request a limit increase, see
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">AWS Service Limits</a>
 *             and choose the limit type <b>Nodes per cluster per instance type</b>. </p>
 *         <p>When a Redis (cluster mode disabled) replication group has been successfully created,
 *             you can add one or more read replicas to it, up to a total of 5 read replicas.
 *             If you need to increase or decrease the number of node groups (console: shards),
 *             you can avail yourself of ElastiCache for Redis' scaling. For more information,
 *             see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Scaling.html">Scaling ElastiCache for Redis Clusters</a> in the <i>ElastiCache User Guide</i>.</p>
 *
 *
 *         <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new CreateReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateReplicationGroupCommand = /** @class */ (function (_super) {
    __extends(CreateReplicationGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateReplicationGroupCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    CreateReplicationGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "CreateReplicationGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateReplicationGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateReplicationGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateReplicationGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateReplicationGroupCommand(input, context);
    };
    CreateReplicationGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateReplicationGroupCommand(output, context);
    };
    return CreateReplicationGroupCommand;
}($Command));
export { CreateReplicationGroupCommand };
//# sourceMappingURL=CreateReplicationGroupCommand.js.map