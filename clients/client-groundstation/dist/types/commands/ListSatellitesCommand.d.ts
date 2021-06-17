import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListSatellitesRequest, ListSatellitesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSatellitesCommandInput extends ListSatellitesRequest {
}
export interface ListSatellitesCommandOutput extends ListSatellitesResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of satellites.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListSatellitesCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListSatellitesCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new ListSatellitesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSatellitesCommandInput} for command's `input` shape.
 * @see {@link ListSatellitesCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSatellitesCommand extends $Command<ListSatellitesCommandInput, ListSatellitesCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: ListSatellitesCommandInput;
    constructor(input: ListSatellitesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSatellitesCommandInput, ListSatellitesCommandOutput>;
    private serialize;
    private deserialize;
}
