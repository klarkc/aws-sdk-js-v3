import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { MissionProfileIdResponse, UpdateMissionProfileRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateMissionProfileCommandInput extends UpdateMissionProfileRequest {
}
export interface UpdateMissionProfileCommandOutput extends MissionProfileIdResponse, __MetadataBearer {
}
/**
 * <p>Updates a mission profile.</p>
 *          <p>Updating a mission profile will not update the execution parameters
 *          for existing future contacts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, UpdateMissionProfileCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, UpdateMissionProfileCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new UpdateMissionProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMissionProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateMissionProfileCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMissionProfileCommand extends $Command<UpdateMissionProfileCommandInput, UpdateMissionProfileCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: UpdateMissionProfileCommandInput;
    constructor(input: UpdateMissionProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMissionProfileCommandInput, UpdateMissionProfileCommandOutput>;
    private serialize;
    private deserialize;
}
