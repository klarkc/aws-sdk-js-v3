import { __extends } from "tslib";
import { ListPoliciesGrantingServiceAccessRequest, ListPoliciesGrantingServiceAccessResponse, } from "../models/models_0";
import { deserializeAws_queryListPoliciesGrantingServiceAccessCommand, serializeAws_queryListPoliciesGrantingServiceAccessCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of policies that the IAM identity (user, group, or role) can use to
 *             access each specified service.</p>
 *         <note>
 *             <p>This operation does not use other policy types when determining whether a resource
 *                 could access a service. These other policy types include resource-based policies,
 *                 access control lists, AWS Organizations policies, IAM permissions boundaries, and
 *                 AWS STS assume role policies. It only applies permissions policy logic. For more
 *                 about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *         </note>
 *         <p>The list of policies returned by the operation depends on the ARN of the identity that
 *             you provide.</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>User</b> – The list of policies includes
 *                     the managed and inline policies that are attached to the user directly. The list
 *                     also includes any additional managed and inline policies that are attached to
 *                     the group to which the user belongs. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Group</b> – The list of policies includes
 *                     only the managed and inline policies that are attached to the group directly.
 *                     Policies that are attached to the group’s user are not included.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Role</b> – The list of policies includes
 *                     only the managed and inline policies that are attached to the role.</p>
 *             </li>
 *          </ul>
 *         <p>For each managed policy, this operation returns the ARN and policy name. For each
 *             inline policy, it returns the policy name and the entity to which it is attached. Inline
 *             policies do not have an ARN. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed policies and inline policies</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *         <p>Policies that are attached to users and roles as permissions boundaries are not
 *             returned. To view which managed policy is currently used to set the permissions boundary
 *             for a user or role, use the <a>GetUser</a> or <a>GetRole</a>
 *             operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListPoliciesGrantingServiceAccessCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListPoliciesGrantingServiceAccessCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListPoliciesGrantingServiceAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPoliciesGrantingServiceAccessCommandInput} for command's `input` shape.
 * @see {@link ListPoliciesGrantingServiceAccessCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPoliciesGrantingServiceAccessCommand = /** @class */ (function (_super) {
    __extends(ListPoliciesGrantingServiceAccessCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPoliciesGrantingServiceAccessCommand(input) {
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
    ListPoliciesGrantingServiceAccessCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListPoliciesGrantingServiceAccessCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPoliciesGrantingServiceAccessRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPoliciesGrantingServiceAccessResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPoliciesGrantingServiceAccessCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListPoliciesGrantingServiceAccessCommand(input, context);
    };
    ListPoliciesGrantingServiceAccessCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListPoliciesGrantingServiceAccessCommand(output, context);
    };
    return ListPoliciesGrantingServiceAccessCommand;
}($Command));
export { ListPoliciesGrantingServiceAccessCommand };
//# sourceMappingURL=ListPoliciesGrantingServiceAccessCommand.js.map