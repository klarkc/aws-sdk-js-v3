import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { SimulateCustomPolicyRequest, SimulatePolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SimulateCustomPolicyCommandInput extends SimulateCustomPolicyRequest {
}
export interface SimulateCustomPolicyCommandOutput extends SimulatePolicyResponse, __MetadataBearer {
}
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
export declare class SimulateCustomPolicyCommand extends $Command<SimulateCustomPolicyCommandInput, SimulateCustomPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: SimulateCustomPolicyCommandInput;
    constructor(input: SimulateCustomPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SimulateCustomPolicyCommandInput, SimulateCustomPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
