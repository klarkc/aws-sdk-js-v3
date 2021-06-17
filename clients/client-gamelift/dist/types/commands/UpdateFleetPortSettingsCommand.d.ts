import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateFleetPortSettingsInput, UpdateFleetPortSettingsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateFleetPortSettingsCommandInput extends UpdateFleetPortSettingsInput {
}
export interface UpdateFleetPortSettingsCommandOutput extends UpdateFleetPortSettingsOutput, __MetadataBearer {
}
/**
 * <p>Updates permissions that allow inbound traffic to connect to game sessions that are
 *             being hosted on instances in the fleet. </p>
 *         <p>To update settings, specify the fleet ID to be updated and specify the changes to be
 *             made. List the permissions you want to add in
 *                 <code>InboundPermissionAuthorizations</code>, and permissions you want to remove in
 *                 <code>InboundPermissionRevocations</code>. Permissions to be removed must match
 *             existing fleet permissions. </p>
 *         <p>If successful, the fleet ID for the updated fleet is returned. For fleets with remote
 *             locations, port setting updates can take time to propagate across all locations. You can
 *             check the status of updates in each location by calling
 *                 <code>DescribeFleetPortSettings</code> with a location name.</p>
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
 * import { GameLiftClient, UpdateFleetPortSettingsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateFleetPortSettingsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new UpdateFleetPortSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFleetPortSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateFleetPortSettingsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateFleetPortSettingsCommand extends $Command<UpdateFleetPortSettingsCommandInput, UpdateFleetPortSettingsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: UpdateFleetPortSettingsCommandInput;
    constructor(input: UpdateFleetPortSettingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFleetPortSettingsCommandInput, UpdateFleetPortSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
