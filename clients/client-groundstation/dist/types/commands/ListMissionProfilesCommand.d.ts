import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListMissionProfilesRequest, ListMissionProfilesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListMissionProfilesCommandInput extends ListMissionProfilesRequest {
}
export interface ListMissionProfilesCommandOutput extends ListMissionProfilesResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of mission profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListMissionProfilesCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListMissionProfilesCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new ListMissionProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMissionProfilesCommandInput} for command's `input` shape.
 * @see {@link ListMissionProfilesCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListMissionProfilesCommand extends $Command<ListMissionProfilesCommandInput, ListMissionProfilesCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: ListMissionProfilesCommandInput;
    constructor(input: ListMissionProfilesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMissionProfilesCommandInput, ListMissionProfilesCommandOutput>;
    private serialize;
    private deserialize;
}
