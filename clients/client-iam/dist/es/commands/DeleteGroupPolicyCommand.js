import { __extends } from "tslib";
import { DeleteGroupPolicyRequest } from "../models/models_0";
import { deserializeAws_queryDeleteGroupPolicyCommand, serializeAws_queryDeleteGroupPolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified inline policy that is embedded in the specified IAM
 *             group.</p>
 *         <p>A group can also have managed policies attached to it. To detach a managed policy from
 *             a group, use <a>DetachGroupPolicy</a>. For more information about policies,
 *             refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteGroupPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteGroupPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteGroupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteGroupPolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteGroupPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteGroupPolicyCommand(input) {
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
    DeleteGroupPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DeleteGroupPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteGroupPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteGroupPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteGroupPolicyCommand(input, context);
    };
    DeleteGroupPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteGroupPolicyCommand(output, context);
    };
    return DeleteGroupPolicyCommand;
}($Command));
export { DeleteGroupPolicyCommand };
//# sourceMappingURL=DeleteGroupPolicyCommand.js.map