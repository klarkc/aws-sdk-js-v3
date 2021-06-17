import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { GetDataflowEndpointGroupRequest, GetDataflowEndpointGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDataflowEndpointGroupCommandInput extends GetDataflowEndpointGroupRequest {
}
export interface GetDataflowEndpointGroupCommandOutput extends GetDataflowEndpointGroupResponse, __MetadataBearer {
}
/**
 * <p>Returns the dataflow endpoint group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, GetDataflowEndpointGroupCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, GetDataflowEndpointGroupCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new GetDataflowEndpointGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataflowEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link GetDataflowEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDataflowEndpointGroupCommand extends $Command<GetDataflowEndpointGroupCommandInput, GetDataflowEndpointGroupCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: GetDataflowEndpointGroupCommandInput;
    constructor(input: GetDataflowEndpointGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDataflowEndpointGroupCommandInput, GetDataflowEndpointGroupCommandOutput>;
    private serialize;
    private deserialize;
}
