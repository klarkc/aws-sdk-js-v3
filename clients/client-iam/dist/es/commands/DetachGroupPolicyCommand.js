import { __extends } from "tslib";
import { DetachGroupPolicyRequest } from "../models/models_0";
import { deserializeAws_queryDetachGroupPolicyCommand, serializeAws_queryDetachGroupPolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified managed policy from the specified IAM group.</p>
 *         <p>A group can also have inline policies embedded with it. To delete an inline policy,
 *             use <a>DeleteGroupPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *                 policies and inline policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DetachGroupPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DetachGroupPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DetachGroupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link DetachGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachGroupPolicyCommand = /** @class */ (function (_super) {
    __extends(DetachGroupPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DetachGroupPolicyCommand(input) {
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
    DetachGroupPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DetachGroupPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DetachGroupPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DetachGroupPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDetachGroupPolicyCommand(input, context);
    };
    DetachGroupPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDetachGroupPolicyCommand(output, context);
    };
    return DetachGroupPolicyCommand;
}($Command));
export { DetachGroupPolicyCommand };
//# sourceMappingURL=DetachGroupPolicyCommand.js.map