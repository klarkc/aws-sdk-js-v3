import { __extends } from "tslib";
import { AttachGroupPolicyRequest } from "../models/models_0";
import { deserializeAws_queryAttachGroupPolicyCommand, serializeAws_queryAttachGroupPolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches the specified managed policy to the specified IAM group.</p>
 *         <p>You use this operation to attach a managed policy to a group. To embed an inline
 *             policy in a group, use <a>PutGroupPolicy</a>.</p>
 *         <p>As a best practice, you can validate your IAM policies.
 *      To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a>
 *             in the <i>IAM User Guide</i>.</p>
 *         <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AttachGroupPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AttachGroupPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new AttachGroupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link AttachGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachGroupPolicyCommand = /** @class */ (function (_super) {
    __extends(AttachGroupPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AttachGroupPolicyCommand(input) {
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
    AttachGroupPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "AttachGroupPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AttachGroupPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AttachGroupPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryAttachGroupPolicyCommand(input, context);
    };
    AttachGroupPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryAttachGroupPolicyCommand(output, context);
    };
    return AttachGroupPolicyCommand;
}($Command));
export { AttachGroupPolicyCommand };
//# sourceMappingURL=AttachGroupPolicyCommand.js.map