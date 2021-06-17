"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimulateCustomPolicyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class SimulateCustomPolicyCommand extends smithy_client_1.Command {
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
        const commandName = "SimulateCustomPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.SimulateCustomPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.SimulatePolicyResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_querySimulateCustomPolicyCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_querySimulateCustomPolicyCommand(output, context);
    }
}
exports.SimulateCustomPolicyCommand = SimulateCustomPolicyCommand;
//# sourceMappingURL=SimulateCustomPolicyCommand.js.map