import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { UpdateVirtualInterfaceAttributesRequest, VirtualInterface } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateVirtualInterfaceAttributesCommandInput extends UpdateVirtualInterfaceAttributesRequest {
}
export interface UpdateVirtualInterfaceAttributesCommandOutput extends VirtualInterface, __MetadataBearer {
}
/**
 * <p>Updates the specified attributes of the specified virtual private interface.</p>
 *          <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to
 *       the underlying physical connection if it wasn't updated to support jumbo frames. Updating
 *       the connection disrupts network connectivity for all virtual interfaces associated with
 *       the connection for up to 30 seconds. To check whether your connection supports jumbo
 *       frames, call <a>DescribeConnections</a>. To check whether your virtual q
 *       interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, UpdateVirtualInterfaceAttributesCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, UpdateVirtualInterfaceAttributesCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new UpdateVirtualInterfaceAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVirtualInterfaceAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateVirtualInterfaceAttributesCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateVirtualInterfaceAttributesCommand extends $Command<UpdateVirtualInterfaceAttributesCommandInput, UpdateVirtualInterfaceAttributesCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: UpdateVirtualInterfaceAttributesCommandInput;
    constructor(input: UpdateVirtualInterfaceAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateVirtualInterfaceAttributesCommandInput, UpdateVirtualInterfaceAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
