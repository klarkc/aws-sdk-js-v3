import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteScalingPolicyInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteScalingPolicyCommandInput extends DeleteScalingPolicyInput {
}
export interface DeleteScalingPolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a fleet scaling policy. Once deleted, the policy is no longer in
 *             force and GameLift removes all record of it. To delete a scaling policy, specify both the scaling
 *             policy name and the fleet ID it is associated with.</p>
 *         <p>To temporarily suspend scaling policies, call <a>StopFleetActions</a>.
 *             This operation suspends all policies for the fleet.</p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>DescribeFleetCapacity</a> |
 *                     <a>UpdateFleetCapacity</a> |
 *                     <a>DescribeEC2InstanceLimits</a> |
 *                     <a>PutScalingPolicy</a> |
 *                     <a>DescribeScalingPolicies</a> |
 *                     <a>DeleteScalingPolicy</a> |
 *                     <a>StopFleetActions</a> |
 *                     <a>StartFleetActions</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteScalingPolicyCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteScalingPolicyCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DeleteScalingPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteScalingPolicyCommand extends $Command<DeleteScalingPolicyCommandInput, DeleteScalingPolicyCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DeleteScalingPolicyCommandInput;
    constructor(input: DeleteScalingPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteScalingPolicyCommandInput, DeleteScalingPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
