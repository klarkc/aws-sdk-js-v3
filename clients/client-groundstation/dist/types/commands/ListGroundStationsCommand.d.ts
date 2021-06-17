import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListGroundStationsRequest, ListGroundStationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListGroundStationsCommandInput extends ListGroundStationsRequest {
}
export interface ListGroundStationsCommandOutput extends ListGroundStationsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of ground stations. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListGroundStationsCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListGroundStationsCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new ListGroundStationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroundStationsCommandInput} for command's `input` shape.
 * @see {@link ListGroundStationsCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListGroundStationsCommand extends $Command<ListGroundStationsCommandInput, ListGroundStationsCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: ListGroundStationsCommandInput;
    constructor(input: ListGroundStationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGroundStationsCommandInput, ListGroundStationsCommandOutput>;
    private serialize;
    private deserialize;
}
