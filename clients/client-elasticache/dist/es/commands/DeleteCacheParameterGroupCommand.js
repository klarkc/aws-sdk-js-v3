import { __extends } from "tslib";
import { DeleteCacheParameterGroupMessage } from "../models/models_0";
import { deserializeAws_queryDeleteCacheParameterGroupCommand, serializeAws_queryDeleteCacheParameterGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified cache parameter
 *             group. You cannot delete a cache parameter group if it is associated with any cache
 *             clusters. You cannot delete the default cache parameter groups in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteCacheParameterGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteCacheParameterGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DeleteCacheParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCacheParameterGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteCacheParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCacheParameterGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteCacheParameterGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCacheParameterGroupCommand(input) {
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
    DeleteCacheParameterGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "DeleteCacheParameterGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCacheParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCacheParameterGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteCacheParameterGroupCommand(input, context);
    };
    DeleteCacheParameterGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteCacheParameterGroupCommand(output, context);
    };
    return DeleteCacheParameterGroupCommand;
}($Command));
export { DeleteCacheParameterGroupCommand };
//# sourceMappingURL=DeleteCacheParameterGroupCommand.js.map