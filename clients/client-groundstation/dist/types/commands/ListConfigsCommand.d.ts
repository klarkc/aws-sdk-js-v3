import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListConfigsRequest, ListConfigsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListConfigsCommandInput extends ListConfigsRequest {
}
export interface ListConfigsCommandOutput extends ListConfigsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of <code>Config</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListConfigsCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListConfigsCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new ListConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConfigsCommandInput} for command's `input` shape.
 * @see {@link ListConfigsCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListConfigsCommand extends $Command<ListConfigsCommandInput, ListConfigsCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: ListConfigsCommandInput;
    constructor(input: ListConfigsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListConfigsCommandInput, ListConfigsCommandOutput>;
    private serialize;
    private deserialize;
}
