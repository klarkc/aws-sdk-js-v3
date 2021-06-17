import { __extends } from "tslib";
import { UpdateAccountPasswordPolicyRequest } from "../models/models_1";
import { deserializeAws_queryUpdateAccountPasswordPolicyCommand, serializeAws_queryUpdateAccountPasswordPolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the password policy settings for the AWS account.</p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>This operation does not support partial updates. No parameters are
 *                         required, but if you do not specify a parameter, that parameter's value
 *                         reverts to its default value. See the <b>Request
 *                             Parameters</b> section for each parameter's default value. Also
 *                         note that some parameters do not allow the default parameter to be
 *                         explicitly set. Instead, to invoke the default value, do not include that
 *                         parameter when you invoke the operation.</p>
 *                 </li>
 *             </ul>
 *         </note>
 *         <p> For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password
 *                 policy</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateAccountPasswordPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateAccountPasswordPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateAccountPasswordPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAccountPasswordPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountPasswordPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAccountPasswordPolicyCommand = /** @class */ (function (_super) {
    __extends(UpdateAccountPasswordPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAccountPasswordPolicyCommand(input) {
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
    UpdateAccountPasswordPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "UpdateAccountPasswordPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAccountPasswordPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAccountPasswordPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUpdateAccountPasswordPolicyCommand(input, context);
    };
    UpdateAccountPasswordPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUpdateAccountPasswordPolicyCommand(output, context);
    };
    return UpdateAccountPasswordPolicyCommand;
}($Command));
export { UpdateAccountPasswordPolicyCommand };
//# sourceMappingURL=UpdateAccountPasswordPolicyCommand.js.map