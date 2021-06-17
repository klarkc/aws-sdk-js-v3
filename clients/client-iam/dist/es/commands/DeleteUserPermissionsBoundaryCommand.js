import { __extends } from "tslib";
import { DeleteUserPermissionsBoundaryRequest } from "../models/models_0";
import { deserializeAws_queryDeleteUserPermissionsBoundaryCommand, serializeAws_queryDeleteUserPermissionsBoundaryCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the permissions boundary for the specified IAM user.</p>
 *         <important>
 *             <p>Deleting the permissions boundary for a user might increase its permissions by
 *                 allowing the user to perform all the actions granted in its permissions policies.
 *             </p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteUserPermissionsBoundaryCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteUserPermissionsBoundaryCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteUserPermissionsBoundaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserPermissionsBoundaryCommandInput} for command's `input` shape.
 * @see {@link DeleteUserPermissionsBoundaryCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteUserPermissionsBoundaryCommand = /** @class */ (function (_super) {
    __extends(DeleteUserPermissionsBoundaryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteUserPermissionsBoundaryCommand(input) {
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
    DeleteUserPermissionsBoundaryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DeleteUserPermissionsBoundaryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteUserPermissionsBoundaryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteUserPermissionsBoundaryCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteUserPermissionsBoundaryCommand(input, context);
    };
    DeleteUserPermissionsBoundaryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteUserPermissionsBoundaryCommand(output, context);
    };
    return DeleteUserPermissionsBoundaryCommand;
}($Command));
export { DeleteUserPermissionsBoundaryCommand };
//# sourceMappingURL=DeleteUserPermissionsBoundaryCommand.js.map