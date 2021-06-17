import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { DataflowEndpointGroupIdResponse, DeleteDataflowEndpointGroupRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDataflowEndpointGroupCommandInput extends DeleteDataflowEndpointGroupRequest {
}
export interface DeleteDataflowEndpointGroupCommandOutput extends DataflowEndpointGroupIdResponse, __MetadataBearer {
}
/**
 * <p>Deletes a dataflow endpoint group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, DeleteDataflowEndpointGroupCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, DeleteDataflowEndpointGroupCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new DeleteDataflowEndpointGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDataflowEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDataflowEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDataflowEndpointGroupCommand extends $Command<DeleteDataflowEndpointGroupCommandInput, DeleteDataflowEndpointGroupCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: DeleteDataflowEndpointGroupCommandInput;
    constructor(input: DeleteDataflowEndpointGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDataflowEndpointGroupCommandInput, DeleteDataflowEndpointGroupCommandOutput>;
    private serialize;
    private deserialize;
}
