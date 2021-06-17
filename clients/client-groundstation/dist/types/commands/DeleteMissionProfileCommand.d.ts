import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { DeleteMissionProfileRequest, MissionProfileIdResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteMissionProfileCommandInput extends DeleteMissionProfileRequest {
}
export interface DeleteMissionProfileCommandOutput extends MissionProfileIdResponse, __MetadataBearer {
}
/**
 * <p>Deletes a mission profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, DeleteMissionProfileCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, DeleteMissionProfileCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new DeleteMissionProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMissionProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteMissionProfileCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteMissionProfileCommand extends $Command<DeleteMissionProfileCommandInput, DeleteMissionProfileCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: DeleteMissionProfileCommandInput;
    constructor(input: DeleteMissionProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMissionProfileCommandInput, DeleteMissionProfileCommandOutput>;
    private serialize;
    private deserialize;
}
