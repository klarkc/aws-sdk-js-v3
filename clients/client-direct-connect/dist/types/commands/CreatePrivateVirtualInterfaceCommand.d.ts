import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { CreatePrivateVirtualInterfaceRequest, VirtualInterface } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePrivateVirtualInterfaceCommandInput extends CreatePrivateVirtualInterfaceRequest {
}
export interface CreatePrivateVirtualInterfaceCommandOutput extends VirtualInterface, __MetadataBearer {
}
/**
 * <p>Creates a private virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic.
 *       A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW).
 *       Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple
 *       VPCs, including VPCs in different AWS Regions. Connecting the private virtual interface to a VGW only
 *       provides access to a single VPC within the same Region.</p>
 *          <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to
 *       the underlying physical connection if it wasn't updated to support jumbo frames. Updating
 *       the connection disrupts network connectivity for all virtual interfaces associated with
 *       the connection for up to 30 seconds. To check whether your connection supports jumbo
 *       frames, call <a>DescribeConnections</a>. To check whether your virtual
 *       interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreatePrivateVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreatePrivateVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new CreatePrivateVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePrivateVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link CreatePrivateVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePrivateVirtualInterfaceCommand extends $Command<CreatePrivateVirtualInterfaceCommandInput, CreatePrivateVirtualInterfaceCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: CreatePrivateVirtualInterfaceCommandInput;
    constructor(input: CreatePrivateVirtualInterfaceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePrivateVirtualInterfaceCommandInput, CreatePrivateVirtualInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
