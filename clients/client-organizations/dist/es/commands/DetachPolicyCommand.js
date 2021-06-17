import { __extends } from "tslib";
import { DetachPolicyRequest } from "../models/models_0";
import { deserializeAws_json1_1DetachPolicyCommand, serializeAws_json1_1DetachPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Detaches a policy from a target root, organizational unit (OU), or account.</p>
 *         <important>
 *             <p>If the policy being detached is a service control policy (SCP), the changes to
 *                 permissions for AWS Identity and Access Management (IAM) users and roles in affected accounts are
 *                 immediate.</p>
 *         </important>
 *         <p>Every root, OU, and account must have at least one SCP attached. If you want to
 *             replace the default <code>FullAWSAccess</code> policy with an SCP that limits the
 *             permissions that can be delegated, you must attach the replacement SCP before you can
 *             remove the default SCP. This is the authorization strategy of an "<a href="https://docs.aws.amazon.com/organizations/latest/userguide/SCP_strategies.html#orgs_policies_allowlist">allow list</a>". If you instead attach a second SCP and
 *             leave the <code>FullAWSAccess</code> SCP still attached, and specify <code>"Effect":
 *                 "Deny"</code> in the second SCP to override the <code>"Effect": "Allow"</code> in
 *             the <code>FullAWSAccess</code> policy (or any other attached SCP), you're using the
 *             authorization strategy of a "<a href="https://docs.aws.amazon.com/organizations/latest/userguide/SCP_strategies.html#orgs_policies_denylist">deny list</a>".</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DetachPolicyCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DetachPolicyCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DetachPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachPolicyCommandInput} for command's `input` shape.
 * @see {@link DetachPolicyCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachPolicyCommand = /** @class */ (function (_super) {
    __extends(DetachPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DetachPolicyCommand(input) {
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
    DetachPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "DetachPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DetachPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DetachPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DetachPolicyCommand(input, context);
    };
    DetachPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DetachPolicyCommand(output, context);
    };
    return DetachPolicyCommand;
}($Command));
export { DetachPolicyCommand };
//# sourceMappingURL=DetachPolicyCommand.js.map