import { __extends } from "tslib";
import { AttachUserPolicyRequest } from "../models/models_0";
import { deserializeAws_queryAttachUserPolicyCommand, serializeAws_queryAttachUserPolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches the specified managed policy to the specified user.</p>
 *         <p>You use this operation to attach a <i>managed</i> policy to a user. To
 *             embed an inline policy in a user, use <a>PutUserPolicy</a>.</p>
 *         <p>As a best practice, you can validate your IAM policies.
 *      To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a>
 *             in the <i>IAM User Guide</i>.</p>
 *         <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AttachUserPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AttachUserPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new AttachUserPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachUserPolicyCommandInput} for command's `input` shape.
 * @see {@link AttachUserPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachUserPolicyCommand = /** @class */ (function (_super) {
    __extends(AttachUserPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AttachUserPolicyCommand(input) {
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
    AttachUserPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "AttachUserPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AttachUserPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AttachUserPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryAttachUserPolicyCommand(input, context);
    };
    AttachUserPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryAttachUserPolicyCommand(output, context);
    };
    return AttachUserPolicyCommand;
}($Command));
export { AttachUserPolicyCommand };
//# sourceMappingURL=AttachUserPolicyCommand.js.map