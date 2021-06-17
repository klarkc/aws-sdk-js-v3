import { __extends } from "tslib";
import { RebootCacheClusterMessage, RebootCacheClusterResult } from "../models/models_0";
import { deserializeAws_queryRebootCacheClusterCommand, serializeAws_queryRebootCacheClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Reboots some, or all, of the cache nodes
 *             within a provisioned cluster. This operation applies any modified cache parameter
 *             groups to the cluster. The reboot operation takes place as soon as possible, and
 *             results in a momentary outage to the cluster. During the reboot, the cluster
 *             status is set to REBOOTING.</p>
 *         <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p>
 *         <p>When the reboot is complete, a cluster event is created.</p>
 *
 *         <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters.
 *             Rebooting is not supported on Redis (cluster mode enabled) clusters.</p>
 *
 *         <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied,
 *             see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.Rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, RebootCacheClusterCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, RebootCacheClusterCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new RebootCacheClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootCacheClusterCommandInput} for command's `input` shape.
 * @see {@link RebootCacheClusterCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RebootCacheClusterCommand = /** @class */ (function (_super) {
    __extends(RebootCacheClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RebootCacheClusterCommand(input) {
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
    RebootCacheClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "RebootCacheClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RebootCacheClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: RebootCacheClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RebootCacheClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRebootCacheClusterCommand(input, context);
    };
    RebootCacheClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRebootCacheClusterCommand(output, context);
    };
    return RebootCacheClusterCommand;
}($Command));
export { RebootCacheClusterCommand };
//# sourceMappingURL=RebootCacheClusterCommand.js.map