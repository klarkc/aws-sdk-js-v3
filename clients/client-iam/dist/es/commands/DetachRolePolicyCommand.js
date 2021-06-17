import { __extends } from "tslib";
import { DetachRolePolicyRequest } from "../models/models_0";
import { deserializeAws_queryDetachRolePolicyCommand, serializeAws_queryDetachRolePolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified managed policy from the specified role.</p>
 *         <p>A role can also have inline policies embedded with it. To delete an inline policy, use
 *                 <a>DeleteRolePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *                 policies and inline policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DetachRolePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DetachRolePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DetachRolePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachRolePolicyCommandInput} for command's `input` shape.
 * @see {@link DetachRolePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachRolePolicyCommand = /** @class */ (function (_super) {
    __extends(DetachRolePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DetachRolePolicyCommand(input) {
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
    DetachRolePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DetachRolePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DetachRolePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DetachRolePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDetachRolePolicyCommand(input, context);
    };
    DetachRolePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDetachRolePolicyCommand(output, context);
    };
    return DetachRolePolicyCommand;
}($Command));
export { DetachRolePolicyCommand };
//# sourceMappingURL=DetachRolePolicyCommand.js.map