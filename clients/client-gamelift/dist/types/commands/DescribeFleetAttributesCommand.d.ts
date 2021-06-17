import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeFleetAttributesInput, DescribeFleetAttributesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFleetAttributesCommandInput extends DescribeFleetAttributesInput {
}
export interface DescribeFleetAttributesCommandOutput extends DescribeFleetAttributesOutput, __MetadataBearer {
}
/**
 * <p>Retrieves core fleet-wide properties, including the computing hardware and deployment
 *             configuration for all instances in the fleet.</p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To get attributes for one or more specific fleets, provide a list of fleet IDs
 *                     or fleet ARNs. </p>
 *             </li>
 *             <li>
 *                 <p>To get attributes for all fleets, do not provide a fleet identifier. </p>
 *             </li>
 *          </ul>
 *         <p>When requesting attributes for multiple fleets, use the pagination parameters to
 *             retrieve results as a set of sequential pages. </p>
 *         <p>If successful, a <code>FleetAttributes</code> object is returned for each fleet
 *             requested, unless the fleet identifier is not found. </p>
 *         <note>
 *             <p>Some API operations limit the number of fleet IDs that allowed in one request. If a
 *                 request exceeds this limit, the request fails and the error message contains the
 *                 maximum allowed number.</p>
 *         </note>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift fleets</a>
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
 * import { GameLiftClient, DescribeFleetAttributesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetAttributesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeFleetAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetAttributesCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFleetAttributesCommand extends $Command<DescribeFleetAttributesCommandInput, DescribeFleetAttributesCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeFleetAttributesCommandInput;
    constructor(input: DescribeFleetAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFleetAttributesCommandInput, DescribeFleetAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
