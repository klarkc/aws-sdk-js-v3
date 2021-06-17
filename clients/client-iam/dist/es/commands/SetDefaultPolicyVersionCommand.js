import { __extends } from "tslib";
import { SetDefaultPolicyVersionRequest } from "../models/models_0";
import { deserializeAws_querySetDefaultPolicyVersionCommand, serializeAws_querySetDefaultPolicyVersionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the specified version of the specified policy as the policy's default (operative)
 *             version.</p>
 *         <p>This operation affects all users, groups, and roles that the policy is attached to. To
 *             list the users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>.</p>
 *         <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, SetDefaultPolicyVersionCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, SetDefaultPolicyVersionCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new SetDefaultPolicyVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetDefaultPolicyVersionCommandInput} for command's `input` shape.
 * @see {@link SetDefaultPolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetDefaultPolicyVersionCommand = /** @class */ (function (_super) {
    __extends(SetDefaultPolicyVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetDefaultPolicyVersionCommand(input) {
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
    SetDefaultPolicyVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "SetDefaultPolicyVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetDefaultPolicyVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetDefaultPolicyVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_querySetDefaultPolicyVersionCommand(input, context);
    };
    SetDefaultPolicyVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_querySetDefaultPolicyVersionCommand(output, context);
    };
    return SetDefaultPolicyVersionCommand;
}($Command));
export { SetDefaultPolicyVersionCommand };
//# sourceMappingURL=SetDefaultPolicyVersionCommand.js.map