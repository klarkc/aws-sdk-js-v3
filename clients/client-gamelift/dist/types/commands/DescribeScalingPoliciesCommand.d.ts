import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeScalingPoliciesInput, DescribeScalingPoliciesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeScalingPoliciesCommandInput extends DescribeScalingPoliciesInput {
}
export interface DescribeScalingPoliciesCommandOutput extends DescribeScalingPoliciesOutput, __MetadataBearer {
}
/**
 * <p>Retrieves all scaling policies applied to a fleet.</p>
 *         <p>To get a fleet's scaling policies, specify the fleet ID. You can filter this
 *             request by policy status, such as to retrieve only active scaling policies. Use the
 *             pagination parameters to retrieve results as a set of sequential pages. If successful,
 *             set of <a>ScalingPolicy</a> objects is returned for the fleet.</p>
 *         <p>A fleet may have all of its scaling policies suspended (<a>StopFleetActions</a>). This operation does not affect the status of the scaling
 *             policies, which remains ACTIVE. To see whether a fleet's scaling policies are in force
 *             or suspended, call <a>DescribeFleetAttributes</a> and check the stopped
 *             actions.</p>
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
 * import { GameLiftClient, DescribeScalingPoliciesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeScalingPoliciesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeScalingPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScalingPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingPoliciesCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeScalingPoliciesCommand extends $Command<DescribeScalingPoliciesCommandInput, DescribeScalingPoliciesCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeScalingPoliciesCommandInput;
    constructor(input: DescribeScalingPoliciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeScalingPoliciesCommandInput, DescribeScalingPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
