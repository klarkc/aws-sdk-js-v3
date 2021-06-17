import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeFleetLocationCapacityInput, DescribeFleetLocationCapacityOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFleetLocationCapacityCommandInput extends DescribeFleetLocationCapacityInput {
}
export interface DescribeFleetLocationCapacityCommandOutput extends DescribeFleetLocationCapacityOutput, __MetadataBearer {
}
/**
 * <p>Retrieves the resource capacity settings for a fleet location. The data returned
 *             includes the current capacity (number of EC2 instances) and some scaling settings for
 *             the requested fleet location. Use this operation to retrieve capacity information for a
 *             fleet's remote location or home Region (you can also retrieve home Region capacity by
 *             calling <code>DescribeFleetCapacity</code>).</p>
 *         <p>To retrieve capacity data, identify a fleet and location. </p>
 *         <p>If successful, a <code>FleetCapacity</code> object is returned for the requested fleet
 *             location. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift fleets</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateFleetLocations</a> |
 *                     <a>DescribeFleetLocationAttributes</a> |
 *                     <a>DescribeFleetLocationCapacity</a> |
 *                     <a>DescribeFleetLocationUtilization</a> |
 *                     <a>DescribeFleetAttributes</a> |
 *                     <a>DescribeFleetCapacity</a> |
 *                     <a>DescribeFleetUtilization</a> |
 *                     <a>UpdateFleetCapacity</a> |
 *                     <a>StopFleetActions</a> |
 *                     <a>DeleteFleetLocations</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeFleetLocationCapacityCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetLocationCapacityCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeFleetLocationCapacityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetLocationCapacityCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetLocationCapacityCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFleetLocationCapacityCommand extends $Command<DescribeFleetLocationCapacityCommandInput, DescribeFleetLocationCapacityCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeFleetLocationCapacityCommandInput;
    constructor(input: DescribeFleetLocationCapacityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFleetLocationCapacityCommandInput, DescribeFleetLocationCapacityCommandOutput>;
    private serialize;
    private deserialize;
}
