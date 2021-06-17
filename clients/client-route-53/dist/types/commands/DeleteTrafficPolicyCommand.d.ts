import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DeleteTrafficPolicyRequest, DeleteTrafficPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTrafficPolicyCommandInput extends DeleteTrafficPolicyRequest {
}
export interface DeleteTrafficPolicyCommandOutput extends DeleteTrafficPolicyResponse, __MetadataBearer {
}
/**
 * <p>Deletes a traffic policy.</p>
 * 		       <p>When you delete a traffic policy, Route 53 sets a flag on the policy to indicate that it has been deleted. However, Route 53 never fully deletes
 * 			the traffic policy. Note the following:</p>
 * 		       <ul>
 *             <li>
 *                <p>Deleted traffic policies aren't listed if you run <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicies.html">ListTrafficPolicies</a>.</p>
 *             </li>
 *             <li>
 *                <p>	There's no way to get a list of deleted policies.</p>
 *             </li>
 *             <li>
 *                <p>If you retain the ID of the policy, you can get information about the policy, including the traffic policy document, by running
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicy.html">GetTrafficPolicy</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteTrafficPolicyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteTrafficPolicyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeleteTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTrafficPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTrafficPolicyCommand extends $Command<DeleteTrafficPolicyCommandInput, DeleteTrafficPolicyCommandOutput, Route53ClientResolvedConfig> {
    readonly input: DeleteTrafficPolicyCommandInput;
    constructor(input: DeleteTrafficPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTrafficPolicyCommandInput, DeleteTrafficPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
