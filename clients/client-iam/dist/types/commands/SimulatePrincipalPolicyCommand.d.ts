import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { SimulatePolicyResponse, SimulatePrincipalPolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SimulatePrincipalPolicyCommandInput extends SimulatePrincipalPolicyRequest {
}
export interface SimulatePrincipalPolicyCommandOutput extends SimulatePolicyResponse, __MetadataBearer {
}
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
export declare class SimulatePrincipalPolicyCommand extends $Command<SimulatePrincipalPolicyCommandInput, SimulatePrincipalPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: SimulatePrincipalPolicyCommandInput;
    constructor(input: SimulatePrincipalPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SimulatePrincipalPolicyCommandInput, SimulatePrincipalPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
