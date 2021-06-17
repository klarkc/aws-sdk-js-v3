import { __extends } from "tslib";
import { DeleteUserGroupMessage, UserGroup } from "../models/models_0";
import { deserializeAws_queryDeleteUserGroupCommand, serializeAws_queryDeleteUserGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>For Redis engine version 6.x onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteUserGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteUserGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DeleteUserGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteUserGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteUserGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteUserGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteUserGroupCommand(input) {
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
    DeleteUserGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "DeleteUserGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteUserGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: UserGroup.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteUserGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteUserGroupCommand(input, context);
    };
    DeleteUserGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteUserGroupCommand(output, context);
    };
    return DeleteUserGroupCommand;
}($Command));
export { DeleteUserGroupCommand };
//# sourceMappingURL=DeleteUserGroupCommand.js.map