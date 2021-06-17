"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncreaseReplicaCountCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Dynamically increases the number of replicas in a Redis (cluster mode disabled) replication group or the number of
 *             replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation
 *             is performed with no cluster down time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, IncreaseReplicaCountCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, IncreaseReplicaCountCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new IncreaseReplicaCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link IncreaseReplicaCountCommandInput} for command's `input` shape.
 * @see {@link IncreaseReplicaCountCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
class IncreaseReplicaCountCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "ElastiCacheClient";
        const commandName = "IncreaseReplicaCountCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.IncreaseReplicaCountMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.IncreaseReplicaCountResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryIncreaseReplicaCountCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryIncreaseReplicaCountCommand(output, context);
    }
}
exports.IncreaseReplicaCountCommand = IncreaseReplicaCountCommand;
//# sourceMappingURL=IncreaseReplicaCountCommand.js.map