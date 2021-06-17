import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { CreatePublicVirtualInterfaceRequest, VirtualInterface } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePublicVirtualInterfaceCommandInput extends CreatePublicVirtualInterfaceRequest {
}
export interface CreatePublicVirtualInterfaceCommandOutput extends VirtualInterface, __MetadataBearer {
}
/**
 * <p>Creates a public virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic.
 *       A public virtual interface supports sending traffic to public services of AWS such as Amazon S3.</p>
 *          <p>When creating an IPv6 public virtual interface (<code>addressFamily</code> is <code>ipv6</code>), leave the <code>customer</code>
 *       and <code>amazon</code> address fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreatePublicVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreatePublicVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new CreatePublicVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePublicVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link CreatePublicVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePublicVirtualInterfaceCommand extends $Command<CreatePublicVirtualInterfaceCommandInput, CreatePublicVirtualInterfaceCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: CreatePublicVirtualInterfaceCommandInput;
    constructor(input: CreatePublicVirtualInterfaceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePublicVirtualInterfaceCommandInput, CreatePublicVirtualInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
