import { __extends } from "tslib";
import { PutRolePolicyRequest } from "../models/models_0";
import { deserializeAws_queryPutRolePolicyCommand, serializeAws_queryPutRolePolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds or updates an inline policy document that is embedded in the specified IAM
 *             role.</p>
 *         <p>When you embed an inline policy in a role, the inline policy is used as part of the
 *             role's access (permissions) policy. The role's trust policy is created at the same time
 *             as the role, using <a>CreateRole</a>. You can update a role's trust policy
 *             using <a>UpdateAssumeRolePolicy</a>. For more information about IAM roles,
 *             see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to
 *                 delegate permissions and federate identities</a>.</p>
 *         <p>A role can also have a managed policy attached to it. To attach a managed policy to a
 *             role, use <a>AttachRolePolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *                 policies and inline policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 *         <p>For information about the maximum number of inline policies that you can embed with a
 *             role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>
 *         <note>
 *             <p>Because policy documents can be large, you should use POST rather than GET when
 *                 calling <code>PutRolePolicy</code>. For general information about using the Query
 *                 API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the
 *                     <i>IAM User Guide</i>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, PutRolePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, PutRolePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new PutRolePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRolePolicyCommandInput} for command's `input` shape.
 * @see {@link PutRolePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutRolePolicyCommand = /** @class */ (function (_super) {
    __extends(PutRolePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutRolePolicyCommand(input) {
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
    PutRolePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "PutRolePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutRolePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutRolePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryPutRolePolicyCommand(input, context);
    };
    PutRolePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryPutRolePolicyCommand(output, context);
    };
    return PutRolePolicyCommand;
}($Command));
export { PutRolePolicyCommand };
//# sourceMappingURL=PutRolePolicyCommand.js.map