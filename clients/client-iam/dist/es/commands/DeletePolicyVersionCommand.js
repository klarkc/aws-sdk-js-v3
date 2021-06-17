import { __extends } from "tslib";
import { DeletePolicyVersionRequest } from "../models/models_0";
import { deserializeAws_queryDeletePolicyVersionCommand, serializeAws_queryDeletePolicyVersionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified version from the specified managed policy.</p>
 *         <p>You cannot delete the default version from a policy using this operation. To delete
 *             the default version from a policy, use <a>DeletePolicy</a>. To find out which
 *             version of a policy is marked as the default version, use <a>ListPolicyVersions</a>.</p>
 *         <p>For information about versions for managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeletePolicyVersionCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeletePolicyVersionCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeletePolicyVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePolicyVersionCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePolicyVersionCommand = /** @class */ (function (_super) {
    __extends(DeletePolicyVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePolicyVersionCommand(input) {
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
    DeletePolicyVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DeletePolicyVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePolicyVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePolicyVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeletePolicyVersionCommand(input, context);
    };
    DeletePolicyVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeletePolicyVersionCommand(output, context);
    };
    return DeletePolicyVersionCommand;
}($Command));
export { DeletePolicyVersionCommand };
//# sourceMappingURL=DeletePolicyVersionCommand.js.map