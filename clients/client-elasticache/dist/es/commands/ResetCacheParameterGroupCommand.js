import { __extends } from "tslib";
import { CacheParameterGroupNameMessage, ResetCacheParameterGroupMessage } from "../models/models_0";
import { deserializeAws_queryResetCacheParameterGroupCommand, serializeAws_queryResetCacheParameterGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the parameters of a cache
 *             parameter group to the engine or system default value. You can reset specific parameters
 *             by submitting a list of parameter names. To reset the entire cache parameter group,
 *             specify the <code>ResetAllParameters</code> and <code>CacheParameterGroupName</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ResetCacheParameterGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ResetCacheParameterGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ResetCacheParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetCacheParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ResetCacheParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResetCacheParameterGroupCommand = /** @class */ (function (_super) {
    __extends(ResetCacheParameterGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResetCacheParameterGroupCommand(input) {
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
    ResetCacheParameterGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "ResetCacheParameterGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResetCacheParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CacheParameterGroupNameMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResetCacheParameterGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryResetCacheParameterGroupCommand(input, context);
    };
    ResetCacheParameterGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryResetCacheParameterGroupCommand(output, context);
    };
    return ResetCacheParameterGroupCommand;
}($Command));
export { ResetCacheParameterGroupCommand };
//# sourceMappingURL=ResetCacheParameterGroupCommand.js.map