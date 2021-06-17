import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeFleetUtilizationInput, DescribeFleetUtilizationOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFleetUtilizationCommandInput extends DescribeFleetUtilizationInput {
}
export interface DescribeFleetUtilizationCommandOutput extends DescribeFleetUtilizationOutput, __MetadataBearer {
}
/**
 * <p>Retrieves utilization statistics for one or more fleets. Utilization data provides a
 *             snapshot of how the fleet's hosting resources are currently being used. For fleets with
 *             remote locations, this operation retrieves data for the fleet's home Region only. See <a>DescribeFleetLocationUtilization</a> to get utilization statistics for a
 *             fleet's remote locations.</p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To get utilization data for one or more specific fleets, provide a list of
 *                     fleet IDs or fleet ARNs. </p>
 *             </li>
 *             <li>
 *                 <p>To get utilization data for all fleets, do not provide a fleet identifier.
 *                 </p>
 *             </li>
 *          </ul>
 *         <p>When requesting multiple fleets, use the pagination parameters to retrieve results as
 *             a set of sequential pages. </p>
 *         <p>If successful, a <a>FleetUtilization</a> object is returned for each
 *             requested fleet ID, unless the fleet identifier is not found. Each fleet utilization
 *             object includes a <code>Location</code> property, which is set to the fleet's home
 *             Region. </p>
 *         <note>
 *             <p>Some API operations may limit the number of fleet IDs allowed in one request. If a
 *                 request exceeds this limit, the request fails and the error message includes the
 *                 maximum allowed.</p>
 *         </note>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift Metrics for Fleets</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>ListFleets</a> |
 *                     <a>DescribeEC2InstanceLimits</a> |
 *                     <a>DescribeFleetAttributes</a> |
 *                     <a>DescribeFleetCapacity</a> |
 *                     <a>DescribeFleetEvents</a> |
 *                     <a>DescribeFleetLocationAttributes</a> |
 *                     <a>DescribeFleetPortSettings</a> |
 *                     <a>DescribeFleetUtilization</a> |
 *                     <a>DescribeRuntimeConfiguration</a> |
 *                     <a>DescribeScalingPolicies</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeFleetUtilizationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetUtilizationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeFleetUtilizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetUtilizationCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetUtilizationCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFleetUtilizationCommand extends $Command<DescribeFleetUtilizationCommandInput, DescribeFleetUtilizationCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeFleetUtilizationCommandInput;
    constructor(input: DescribeFleetUtilizationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFleetUtilizationCommandInput, DescribeFleetUtilizationCommandOutput>;
    private serialize;
    private deserialize;
}
