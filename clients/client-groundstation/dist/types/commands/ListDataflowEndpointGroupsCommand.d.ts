import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListDataflowEndpointGroupsRequest, ListDataflowEndpointGroupsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDataflowEndpointGroupsCommandInput extends ListDataflowEndpointGroupsRequest {
}
export interface ListDataflowEndpointGroupsCommandOutput extends ListDataflowEndpointGroupsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of <code>DataflowEndpoint</code> groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListDataflowEndpointGroupsCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListDataflowEndpointGroupsCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new ListDataflowEndpointGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataflowEndpointGroupsCommandInput} for command's `input` shape.
 * @see {@link ListDataflowEndpointGroupsCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDataflowEndpointGroupsCommand extends $Command<ListDataflowEndpointGroupsCommandInput, ListDataflowEndpointGroupsCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: ListDataflowEndpointGroupsCommandInput;
    constructor(input: ListDataflowEndpointGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDataflowEndpointGroupsCommandInput, ListDataflowEndpointGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
