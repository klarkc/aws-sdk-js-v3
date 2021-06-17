import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListContactsRequest, ListContactsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListContactsCommandInput extends ListContactsRequest {
}
export interface ListContactsCommandOutput extends ListContactsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of contacts.</p>
 *          <p>If <code>statusList</code> contains AVAILABLE, the request must include
 *       <code>groundStation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListContactsCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListContactsCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new ListContactsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContactsCommandInput} for command's `input` shape.
 * @see {@link ListContactsCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListContactsCommand extends $Command<ListContactsCommandInput, ListContactsCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: ListContactsCommandInput;
    constructor(input: ListContactsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListContactsCommandInput, ListContactsCommandOutput>;
    private serialize;
    private deserialize;
}
