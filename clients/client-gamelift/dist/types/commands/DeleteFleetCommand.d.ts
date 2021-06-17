import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteFleetInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFleetCommandInput extends DeleteFleetInput {
}
export interface DeleteFleetCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes all resources and information related a fleet. Any current fleet instances,
 *             including those in remote locations, are shut down. You don't need to call
 *                 <code>DeleteFleetLocations</code> separately.</p>
 *         <note>
 *             <p>If the fleet being deleted has a VPC peering connection, you first need to get a
 *                 valid authorization (good for 24 hours) by calling <a>CreateVpcPeeringAuthorization</a>. You do not need to explicitly delete
 *                 the VPC peering connection--this is done as part of the delete fleet process.</p>
 *         </note>
 *         <p>To delete a fleet, specify the fleet ID to be terminated. During the deletion process
 *             the fleet status is changed to <code>DELETING</code>. When completed, the status
 *             switches to <code>TERMINATED</code> and the fleet event <code>FLEET_DELETED</code> is
 *             sent.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateFleetLocations</a> |
 *                     <a>UpdateFleetAttributes</a> |
 *                     <a>UpdateFleetCapacity</a> |
 *                     <a>UpdateFleetPortSettings</a> |
 *                     <a>UpdateRuntimeConfiguration</a> |
 *                     <a>StopFleetActions</a> |
 *                     <a>StartFleetActions</a> |
 *                     <a>PutScalingPolicy</a> |
 *                     <a>DeleteFleet</a> |
 *                     <a>DeleteFleetLocations</a> |
 *                     <a>DeleteScalingPolicy</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteFleetCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteFleetCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DeleteFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFleetCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFleetCommand extends $Command<DeleteFleetCommandInput, DeleteFleetCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DeleteFleetCommandInput;
    constructor(input: DeleteFleetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFleetCommandInput, DeleteFleetCommandOutput>;
    private serialize;
    private deserialize;
}
