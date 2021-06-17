import { __extends } from "tslib";
import { DeleteRepositoryPermissionsPolicyRequest, DeleteRepositoryPermissionsPolicyResult } from "../models/models_0";
import { deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand, serializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *         Deletes the resource policy that is set on a repository. After a resource policy is deleted, the
 *         permissions allowed and denied by the deleted policy are removed. The effect of deleting a resource policy might not be immediate.
 *       </p>
 *          <important>
 *             <p>
 *          Use <code>DeleteRepositoryPermissionsPolicy</code> with caution. After a policy is deleted, AWS users, roles, and accounts lose permissions to perform
 *          the repository actions granted by the deleted policy.
 *        </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DeleteRepositoryPermissionsPolicyCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DeleteRepositoryPermissionsPolicyCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new DeleteRepositoryPermissionsPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRepositoryPermissionsPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteRepositoryPermissionsPolicyCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRepositoryPermissionsPolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteRepositoryPermissionsPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRepositoryPermissionsPolicyCommand(input) {
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
    DeleteRepositoryPermissionsPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "DeleteRepositoryPermissionsPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRepositoryPermissionsPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteRepositoryPermissionsPolicyResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRepositoryPermissionsPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand(input, context);
    };
    DeleteRepositoryPermissionsPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand(output, context);
    };
    return DeleteRepositoryPermissionsPolicyCommand;
}($Command));
export { DeleteRepositoryPermissionsPolicyCommand };
//# sourceMappingURL=DeleteRepositoryPermissionsPolicyCommand.js.map