import { __extends } from "tslib";
import { ModifyReplicationGroupMessage, ModifyReplicationGroupResult } from "../models/models_0";
import { deserializeAws_queryModifyReplicationGroupCommand, serializeAws_queryModifyReplicationGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the settings for a replication group.</p>
 *
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/scaling-redis-cluster-mode-enabled.html">Scaling for Amazon ElastiCache for Redis (cluster mode enabled)</a>
 *                     in the ElastiCache User Guide</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html">ModifyReplicationGroupShardConfiguration</a>
 *                     in the ElastiCache API Reference</p>
 *             </li>
 *          </ul>
 *         <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ModifyReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyReplicationGroupCommand = /** @class */ (function (_super) {
    __extends(ModifyReplicationGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyReplicationGroupCommand(input) {
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
    ModifyReplicationGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "ModifyReplicationGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyReplicationGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyReplicationGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyReplicationGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyReplicationGroupCommand(input, context);
    };
    ModifyReplicationGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyReplicationGroupCommand(output, context);
    };
    return ModifyReplicationGroupCommand;
}($Command));
export { ModifyReplicationGroupCommand };
//# sourceMappingURL=ModifyReplicationGroupCommand.js.map