import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { GetMissionProfileRequest, GetMissionProfileResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMissionProfileCommandInput extends GetMissionProfileRequest {
}
export interface GetMissionProfileCommandOutput extends GetMissionProfileResponse, __MetadataBearer {
}
/**
 * <p>Returns a mission profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, GetMissionProfileCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, GetMissionProfileCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new GetMissionProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMissionProfileCommandInput} for command's `input` shape.
 * @see {@link GetMissionProfileCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMissionProfileCommand extends $Command<GetMissionProfileCommandInput, GetMissionProfileCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: GetMissionProfileCommandInput;
    constructor(input: GetMissionProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMissionProfileCommandInput, GetMissionProfileCommandOutput>;
    private serialize;
    private deserialize;
}
