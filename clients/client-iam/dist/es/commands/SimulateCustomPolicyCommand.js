import { __extends } from "tslib";
import { SimulateCustomPolicyRequest, SimulatePolicyResponse } from "../models/models_0";
import { deserializeAws_querySimulateCustomPolicyCommand, serializeAws_querySimulateCustomPolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Simulate how a set of IAM policies and optionally a resource-based policy works with
 *             a list of API operations and AWS resources to determine the policies' effective
 *             permissions. The policies are provided as strings.</p>
 *         <p>The simulation does not perform the API operations; it only checks the authorization
 *             to determine if the simulated policies allow or deny the operations. You can simulate
 *             resources that don't exist in your account.</p>
 *         <p>If you want to simulate existing policies that are attached to an IAM user, group,
 *             or role, use <a>SimulatePrincipalPolicy</a> instead.</p>
 *         <p>Context keys are variables that are maintained by AWS and its services and which
 *             provide details about the context of an API query request. You can use the
 *                 <code>Condition</code> element of an IAM policy to evaluate context keys. To get
 *             the list of context keys that the policies require for correct simulation, use <a>GetContextKeysForCustomPolicy</a>.</p>
 *         <p>If the output is long, you can use <code>MaxItems</code> and <code>Marker</code>
 *             parameters to paginate the results.</p>
 *         <p>For more information about using the policy simulator, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html">Testing IAM policies
 *                 with the IAM policy simulator </a>in the
 *             <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, SimulateCustomPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, SimulateCustomPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new SimulateCustomPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SimulateCustomPolicyCommandInput} for command's `input` shape.
 * @see {@link SimulateCustomPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SimulateCustomPolicyCommand = /** @class */ (function (_super) {
    __extends(SimulateCustomPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SimulateCustomPolicyCommand(input) {
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
    SimulateCustomPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "SimulateCustomPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SimulateCustomPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SimulatePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SimulateCustomPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_querySimulateCustomPolicyCommand(input, context);
    };
    SimulateCustomPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_querySimulateCustomPolicyCommand(output, context);
    };
    return SimulateCustomPolicyCommand;
}($Command));
export { SimulateCustomPolicyCommand };
//# sourceMappingURL=SimulateCustomPolicyCommand.js.map