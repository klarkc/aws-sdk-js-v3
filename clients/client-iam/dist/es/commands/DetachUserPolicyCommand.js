import { __extends } from "tslib";
import { DetachUserPolicyRequest } from "../models/models_0";
import { deserializeAws_queryDetachUserPolicyCommand, serializeAws_queryDetachUserPolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified managed policy from the specified user.</p>
 *         <p>A user can also have inline policies embedded with it. To delete an inline policy, use
 *                 <a>DeleteUserPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *                 policies and inline policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DetachUserPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DetachUserPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DetachUserPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachUserPolicyCommandInput} for command's `input` shape.
 * @see {@link DetachUserPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachUserPolicyCommand = /** @class */ (function (_super) {
    __extends(DetachUserPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DetachUserPolicyCommand(input) {
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
    DetachUserPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DetachUserPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DetachUserPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DetachUserPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDetachUserPolicyCommand(input, context);
    };
    DetachUserPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDetachUserPolicyCommand(output, context);
    };
    return DetachUserPolicyCommand;
}($Command));
export { DetachUserPolicyCommand };
//# sourceMappingURL=DetachUserPolicyCommand.js.map