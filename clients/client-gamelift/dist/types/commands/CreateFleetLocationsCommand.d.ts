import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateFleetLocationsInput, CreateFleetLocationsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateFleetLocationsCommandInput extends CreateFleetLocationsInput {
}
export interface CreateFleetLocationsCommandOutput extends CreateFleetLocationsOutput, __MetadataBearer {
}
/**
 * <p>Adds remote locations to a fleet and begins populating the new locations with EC2
 *             instances. The new instances conform to the fleet's instance type, auto-scaling, and
 *             other configuration settings. </p>
 *         <note>
 *             <p>This operation cannot be used with fleets that don't support remote locations. Fleets
 *                 can have multiple locations only if they reside in AWS Regions that support this
 *                 feature (see <a>CreateFleet</a> for the complete list) and were created
 *                 after the feature was released in March 2021.</p>
 *         </note>
 *         <p>To add fleet locations, specify the fleet to be updated and provide a list of one or
 *             more locations. </p>
 *         <p>If successful, this operation returns the list of added locations with their status set
 *             to <code>NEW</code>. GameLift initiates the process of starting an instance in each added
 *             location. You can track the status of each new location by monitoring location creation
 *             events using <a>DescribeFleetEvents</a>. Alternatively, you can poll location
 *             status by calling <a>DescribeFleetLocationAttributes</a>. After a location
 *             status becomes <code>ACTIVE</code>, you can adjust the location's capacity as needed
 *             with <a>UpdateFleetCapacity</a>.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up fleets</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a>
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
 * import { GameLiftClient, CreateFleetLocationsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateFleetLocationsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreateFleetLocationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFleetLocationsCommandInput} for command's `input` shape.
 * @see {@link CreateFleetLocationsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateFleetLocationsCommand extends $Command<CreateFleetLocationsCommandInput, CreateFleetLocationsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: CreateFleetLocationsCommandInput;
    constructor(input: CreateFleetLocationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFleetLocationsCommandInput, CreateFleetLocationsCommandOutput>;
    private serialize;
    private deserialize;
}
