import { __extends } from "tslib";
import { CacheParameterGroupNameMessage, ModifyCacheParameterGroupMessage } from "../models/models_0";
import { deserializeAws_queryModifyCacheParameterGroupCommand, serializeAws_queryModifyCacheParameterGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the parameters of a cache
 *             parameter group. You can modify up to 20 parameters in a single request by submitting a
 *             list parameter name and value pairs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyCacheParameterGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyCacheParameterGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ModifyCacheParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyCacheParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyCacheParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyCacheParameterGroupCommand = /** @class */ (function (_super) {
    __extends(ModifyCacheParameterGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyCacheParameterGroupCommand(input) {
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
    ModifyCacheParameterGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "ModifyCacheParameterGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyCacheParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CacheParameterGroupNameMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyCacheParameterGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyCacheParameterGroupCommand(input, context);
    };
    ModifyCacheParameterGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyCacheParameterGroupCommand(output, context);
    };
    return ModifyCacheParameterGroupCommand;
}($Command));
export { ModifyCacheParameterGroupCommand };
//# sourceMappingURL=ModifyCacheParameterGroupCommand.js.map