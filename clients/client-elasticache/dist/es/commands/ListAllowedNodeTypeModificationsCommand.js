import { __extends } from "tslib";
import { AllowedNodeTypeModificationsMessage, ListAllowedNodeTypeModificationsMessage } from "../models/models_0";
import { deserializeAws_queryListAllowedNodeTypeModificationsCommand, serializeAws_queryListAllowedNodeTypeModificationsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all available node types that you
 *             can scale your Redis cluster's or replication group's current node type.</p>
 *
 *         <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to
 *             scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter
 *             must be one of the node types returned by this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ListAllowedNodeTypeModificationsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ListAllowedNodeTypeModificationsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ListAllowedNodeTypeModificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAllowedNodeTypeModificationsCommandInput} for command's `input` shape.
 * @see {@link ListAllowedNodeTypeModificationsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAllowedNodeTypeModificationsCommand = /** @class */ (function (_super) {
    __extends(ListAllowedNodeTypeModificationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAllowedNodeTypeModificationsCommand(input) {
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
    ListAllowedNodeTypeModificationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "ListAllowedNodeTypeModificationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAllowedNodeTypeModificationsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: AllowedNodeTypeModificationsMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAllowedNodeTypeModificationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListAllowedNodeTypeModificationsCommand(input, context);
    };
    ListAllowedNodeTypeModificationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListAllowedNodeTypeModificationsCommand(output, context);
    };
    return ListAllowedNodeTypeModificationsCommand;
}($Command));
export { ListAllowedNodeTypeModificationsCommand };
//# sourceMappingURL=ListAllowedNodeTypeModificationsCommand.js.map