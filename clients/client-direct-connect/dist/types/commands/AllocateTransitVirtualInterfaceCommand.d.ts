import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { AllocateTransitVirtualInterfaceRequest, AllocateTransitVirtualInterfaceResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AllocateTransitVirtualInterfaceCommandInput extends AllocateTransitVirtualInterfaceRequest {
}
export interface AllocateTransitVirtualInterfaceCommandOutput extends AllocateTransitVirtualInterfaceResult, __MetadataBearer {
}
/**
 * <p>Provisions a transit virtual interface to be owned by the specified AWS account. Use this type of interface to connect a transit gateway to your Direct Connect gateway.</p>
 *          <p>The owner of a connection provisions a transit virtual interface to be owned by the specified AWS account.</p>
 *          <p>After you create a transit virtual interface, it must be confirmed by the owner using <a>ConfirmTransitVirtualInterface</a>. Until this step has been completed, the transit virtual interface is in the <code>requested</code> state and is not available to handle traffic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AllocateTransitVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AllocateTransitVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AllocateTransitVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllocateTransitVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link AllocateTransitVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AllocateTransitVirtualInterfaceCommand extends $Command<AllocateTransitVirtualInterfaceCommandInput, AllocateTransitVirtualInterfaceCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: AllocateTransitVirtualInterfaceCommandInput;
    constructor(input: AllocateTransitVirtualInterfaceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AllocateTransitVirtualInterfaceCommandInput, AllocateTransitVirtualInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
