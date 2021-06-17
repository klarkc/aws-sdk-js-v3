import { __extends } from "tslib";
import { DeleteRolePermissionsBoundaryRequest } from "../models/models_0";
import { deserializeAws_queryDeleteRolePermissionsBoundaryCommand, serializeAws_queryDeleteRolePermissionsBoundaryCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the permissions boundary for the specified IAM role. </p>
 *         <important>
 *             <p>Deleting the permissions boundary for a role might increase its permissions. For
 *                 example, it might allow anyone who assumes the role to perform all the actions
 *                 granted in its permissions policies. </p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteRolePermissionsBoundaryCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteRolePermissionsBoundaryCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteRolePermissionsBoundaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRolePermissionsBoundaryCommandInput} for command's `input` shape.
 * @see {@link DeleteRolePermissionsBoundaryCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRolePermissionsBoundaryCommand = /** @class */ (function (_super) {
    __extends(DeleteRolePermissionsBoundaryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRolePermissionsBoundaryCommand(input) {
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
    DeleteRolePermissionsBoundaryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DeleteRolePermissionsBoundaryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRolePermissionsBoundaryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRolePermissionsBoundaryCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteRolePermissionsBoundaryCommand(input, context);
    };
    DeleteRolePermissionsBoundaryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteRolePermissionsBoundaryCommand(output, context);
    };
    return DeleteRolePermissionsBoundaryCommand;
}($Command));
export { DeleteRolePermissionsBoundaryCommand };
//# sourceMappingURL=DeleteRolePermissionsBoundaryCommand.js.map