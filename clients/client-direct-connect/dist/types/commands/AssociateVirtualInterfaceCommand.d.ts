import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { AssociateVirtualInterfaceRequest, VirtualInterface } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateVirtualInterfaceCommandInput extends AssociateVirtualInterfaceRequest {
}
export interface AssociateVirtualInterfaceCommandOutput extends VirtualInterface, __MetadataBearer {
}
/**
 * <p>Associates a virtual interface with a specified link aggregation group (LAG) or
 *       connection. Connectivity to AWS is temporarily interrupted as the virtual interface is
 *       being migrated. If the target connection or LAG has an associated virtual interface with
 *       a conflicting VLAN number or a conflicting IP address, the operation fails.</p>
 *          <p>Virtual interfaces associated with a hosted connection cannot be associated with a
 *       LAG; hosted connections must be migrated along with their virtual interfaces using <a>AssociateHostedConnection</a>.</p>
 *          <p>To reassociate a virtual interface to a new connection or LAG, the requester
 *       must own either the virtual interface itself or the connection to which the virtual
 *       interface is currently associated. Additionally, the requester must own the connection
 *       or LAG for the association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AssociateVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AssociateVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AssociateVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link AssociateVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateVirtualInterfaceCommand extends $Command<AssociateVirtualInterfaceCommandInput, AssociateVirtualInterfaceCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: AssociateVirtualInterfaceCommandInput;
    constructor(input: AssociateVirtualInterfaceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateVirtualInterfaceCommandInput, AssociateVirtualInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
