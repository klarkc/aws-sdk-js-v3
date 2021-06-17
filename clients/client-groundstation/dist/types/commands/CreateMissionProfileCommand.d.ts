import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { CreateMissionProfileRequest, MissionProfileIdResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateMissionProfileCommandInput extends CreateMissionProfileRequest {
}
export interface CreateMissionProfileCommandOutput extends MissionProfileIdResponse, __MetadataBearer {
}
/**
 * <p>Creates a mission profile.</p>
 *          <p>
 *             <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings
 *          has two elements: a <i>from</i> ARN and a <i>to</i> ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, CreateMissionProfileCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, CreateMissionProfileCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new CreateMissionProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMissionProfileCommandInput} for command's `input` shape.
 * @see {@link CreateMissionProfileCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateMissionProfileCommand extends $Command<CreateMissionProfileCommandInput, CreateMissionProfileCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: CreateMissionProfileCommandInput;
    constructor(input: CreateMissionProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMissionProfileCommandInput, CreateMissionProfileCommandOutput>;
    private serialize;
    private deserialize;
}
