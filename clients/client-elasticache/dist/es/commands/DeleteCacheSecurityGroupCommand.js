import { __extends } from "tslib";
import { DeleteCacheSecurityGroupMessage } from "../models/models_0";
import { deserializeAws_queryDeleteCacheSecurityGroupCommand, serializeAws_queryDeleteCacheSecurityGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a cache security group.</p>
 *         <note>
 *             <p>You cannot delete a cache security group if it is associated with any clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteCacheSecurityGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteCacheSecurityGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DeleteCacheSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCacheSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteCacheSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCacheSecurityGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteCacheSecurityGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCacheSecurityGroupCommand(input) {
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
    DeleteCacheSecurityGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "DeleteCacheSecurityGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCacheSecurityGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCacheSecurityGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteCacheSecurityGroupCommand(input, context);
    };
    DeleteCacheSecurityGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteCacheSecurityGroupCommand(output, context);
    };
    return DeleteCacheSecurityGroupCommand;
}($Command));
export { DeleteCacheSecurityGroupCommand };
//# sourceMappingURL=DeleteCacheSecurityGroupCommand.js.map