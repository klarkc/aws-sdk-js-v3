import { __extends } from "tslib";
import { GetPolicyRequest, GetPolicyResponse } from "../models/models_0";
import { deserializeAws_queryGetPolicyCommand, serializeAws_queryGetPolicyCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the specified managed policy, including the policy's
 *             default version and the total number of IAM users, groups, and roles to which the
 *             policy is attached. To retrieve the list of the specific users, groups, and roles that
 *             the policy is attached to, use <a>ListEntitiesForPolicy</a>. This operation
 *             returns metadata about the policy. To retrieve the actual policy document for a specific
 *             version of the policy, use <a>GetPolicyVersion</a>.</p>
 *         <p>This operation retrieves information about managed policies. To retrieve information
 *             about an inline policy that is embedded with an IAM user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p>
 *         <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPolicyCommandInput} for command's `input` shape.
 * @see {@link GetPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPolicyCommand = /** @class */ (function (_super) {
    __extends(GetPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPolicyCommand(input) {
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
    GetPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "GetPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetPolicyCommand(input, context);
    };
    GetPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetPolicyCommand(output, context);
    };
    return GetPolicyCommand;
}($Command));
export { GetPolicyCommand };
//# sourceMappingURL=GetPolicyCommand.js.map