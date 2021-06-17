"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimulatePrincipalPolicyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Simulate how a set of IAM policies attached to an IAM entity works with a list of
 *             API operations and AWS resources to determine the policies' effective permissions. The
 *             entity can be an IAM user, group, or role. If you specify a user, then the simulation
 *             also includes all of the policies that are attached to groups that the user belongs to.
 *             You can simulate resources that don't exist in your account.</p>
 *         <p>You can optionally include a list of one or more additional policies specified as
 *             strings to include in the simulation. If you want to simulate only policies specified as
 *             strings, use <a>SimulateCustomPolicy</a> instead.</p>
 *         <p>You can also optionally include one resource-based policy to be evaluated with each of
 *             the resources included in the simulation.</p>
 *         <p>The simulation does not perform the API operations; it only checks the authorization
 *             to determine if the simulated policies allow or deny the operations.</p>
 *         <p>
 *             <b>Note:</b> This operation discloses information about the
 *             permissions granted to other users. If you do not want users to see other user's
 *             permissions, then consider allowing them to use <a>SimulateCustomPolicy</a>
 *             instead.</p>
 *         <p>Context keys are variables maintained by AWS and its services that provide details
 *             about the context of an API query request. You can use the <code>Condition</code>
 *             element of an IAM policy to evaluate context keys. To get the list of context keys
 *             that the policies require for correct simulation, use <a>GetContextKeysForPrincipalPolicy</a>.</p>
 *         <p>If the output is long, you can use the <code>MaxItems</code> and <code>Marker</code>
 *             parameters to paginate the results.</p>
 *         <p>For more information about using the policy simulator, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html">Testing IAM policies
 *                 with the IAM policy simulator </a>in the
 *             <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, SimulatePrincipalPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, SimulatePrincipalPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new SimulatePrincipalPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SimulatePrincipalPolicyCommandInput} for command's `input` shape.
 * @see {@link SimulatePrincipalPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class SimulatePrincipalPolicyCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "IAMClient";
        const commandName = "SimulatePrincipalPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.SimulatePrincipalPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.SimulatePolicyResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_querySimulatePrincipalPolicyCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_querySimulatePrincipalPolicyCommand(output, context);
    }
}
exports.SimulatePrincipalPolicyCommand = SimulatePrincipalPolicyCommand;
//# sourceMappingURL=SimulatePrincipalPolicyCommand.js.map