import { __extends } from "tslib";
import { ModifyCacheClusterMessage, ModifyCacheClusterResult } from "../models/models_0";
import { deserializeAws_queryModifyCacheClusterCommand, serializeAws_queryModifyCacheClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the settings for a cluster. You
 *             can use this operation to change one or more cluster configuration parameters by
 *             specifying the parameters and the new values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyCacheClusterCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyCacheClusterCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ModifyCacheClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyCacheClusterCommandInput} for command's `input` shape.
 * @see {@link ModifyCacheClusterCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyCacheClusterCommand = /** @class */ (function (_super) {
    __extends(ModifyCacheClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyCacheClusterCommand(input) {
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
    ModifyCacheClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "ModifyCacheClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyCacheClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyCacheClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyCacheClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyCacheClusterCommand(input, context);
    };
    ModifyCacheClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyCacheClusterCommand(output, context);
    };
    return ModifyCacheClusterCommand;
}($Command));
export { ModifyCacheClusterCommand };
//# sourceMappingURL=ModifyCacheClusterCommand.js.map