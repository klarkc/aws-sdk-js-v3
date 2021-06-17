import { __extends } from "tslib";
import { CreateCacheClusterMessage, CreateCacheClusterResult } from "../models/models_0";
import { deserializeAws_queryCreateCacheClusterCommand, serializeAws_queryCreateCacheClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a cluster. All nodes in the
 *             cluster run the same protocol-compliant cache engine software, either Memcached
 *             or Redis.</p>
 *         <p>This operation is not supported for Redis (cluster mode enabled) clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateCacheClusterCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateCacheClusterCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new CreateCacheClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCacheClusterCommandInput} for command's `input` shape.
 * @see {@link CreateCacheClusterCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCacheClusterCommand = /** @class */ (function (_super) {
    __extends(CreateCacheClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCacheClusterCommand(input) {
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
    CreateCacheClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "CreateCacheClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCacheClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCacheClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCacheClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateCacheClusterCommand(input, context);
    };
    CreateCacheClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateCacheClusterCommand(output, context);
    };
    return CreateCacheClusterCommand;
}($Command));
export { CreateCacheClusterCommand };
//# sourceMappingURL=CreateCacheClusterCommand.js.map