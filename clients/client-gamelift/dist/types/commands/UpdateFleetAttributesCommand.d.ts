import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateFleetAttributesInput, UpdateFleetAttributesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateFleetAttributesCommandInput extends UpdateFleetAttributesInput {
}
export interface UpdateFleetAttributesCommandOutput extends UpdateFleetAttributesOutput, __MetadataBearer {
}
/**
 * <p>Updates a fleet's mutable attributes, including game session protection and resource
 *             creation limits.</p>
 *         <p>To update fleet attributes, specify the fleet ID and the property values that you want
 *             to change. </p>
 *         <p>If successful, an updated <code>FleetAttributes</code> object is returned.</p>
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
 * import { GameLiftClient, UpdateFleetAttributesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateFleetAttributesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new UpdateFleetAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFleetAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateFleetAttributesCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateFleetAttributesCommand extends $Command<UpdateFleetAttributesCommandInput, UpdateFleetAttributesCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: UpdateFleetAttributesCommandInput;
    constructor(input: UpdateFleetAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFleetAttributesCommandInput, UpdateFleetAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
