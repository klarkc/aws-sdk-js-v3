import { __extends } from "tslib";
import { CreateGlobalReplicationGroupMessage, CreateGlobalReplicationGroupResult } from "../models/models_0";
import { deserializeAws_queryCreateGlobalReplicationGroupCommand, serializeAws_queryCreateGlobalReplicationGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateGlobalReplicationGroupCommand = /** @class */ (function (_super) {
    __extends(CreateGlobalReplicationGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateGlobalReplicationGroupCommand(input) {
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
    CreateGlobalReplicationGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "CreateGlobalReplicationGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateGlobalReplicationGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateGlobalReplicationGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateGlobalReplicationGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateGlobalReplicationGroupCommand(input, context);
    };
    CreateGlobalReplicationGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateGlobalReplicationGroupCommand(output, context);
    };
    return CreateGlobalReplicationGroupCommand;
}($Command));
export { CreateGlobalReplicationGroupCommand };
//# sourceMappingURL=CreateGlobalReplicationGroupCommand.js.map