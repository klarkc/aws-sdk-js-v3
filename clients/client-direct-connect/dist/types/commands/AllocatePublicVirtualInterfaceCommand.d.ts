import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { AllocatePublicVirtualInterfaceRequest, VirtualInterface } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AllocatePublicVirtualInterfaceCommandInput extends AllocatePublicVirtualInterfaceRequest {
}
export interface AllocatePublicVirtualInterfaceCommandOutput extends VirtualInterface, __MetadataBearer {
}
/**
 * <p>Provisions a public virtual interface to be owned by the specified AWS account.</p>
 *          <p>The owner of a connection calls this function to provision a public virtual interface to be owned by the specified AWS account.</p>
 *          <p>Virtual interfaces created using this function must be confirmed by the owner using <a>ConfirmPublicVirtualInterface</a>.
 *       Until this step has been completed, the virtual interface is in the <code>confirming</code> state and is not available to handle traffic.</p>
 *          <p>When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from
 *       the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AllocatePublicVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AllocatePublicVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AllocatePublicVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllocatePublicVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link AllocatePublicVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AllocatePublicVirtualInterfaceCommand extends $Command<AllocatePublicVirtualInterfaceCommandInput, AllocatePublicVirtualInterfaceCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: AllocatePublicVirtualInterfaceCommandInput;
    constructor(input: AllocatePublicVirtualInterfaceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AllocatePublicVirtualInterfaceCommandInput, AllocatePublicVirtualInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
