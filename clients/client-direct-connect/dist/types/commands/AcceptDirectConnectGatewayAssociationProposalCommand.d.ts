import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { AcceptDirectConnectGatewayAssociationProposalRequest, AcceptDirectConnectGatewayAssociationProposalResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AcceptDirectConnectGatewayAssociationProposalCommandInput extends AcceptDirectConnectGatewayAssociationProposalRequest {
}
export interface AcceptDirectConnectGatewayAssociationProposalCommandOutput extends AcceptDirectConnectGatewayAssociationProposalResult, __MetadataBearer {
}
/**
 * <p>Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AcceptDirectConnectGatewayAssociationProposalCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AcceptDirectConnectGatewayAssociationProposalCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AcceptDirectConnectGatewayAssociationProposalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptDirectConnectGatewayAssociationProposalCommandInput} for command's `input` shape.
 * @see {@link AcceptDirectConnectGatewayAssociationProposalCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AcceptDirectConnectGatewayAssociationProposalCommand extends $Command<AcceptDirectConnectGatewayAssociationProposalCommandInput, AcceptDirectConnectGatewayAssociationProposalCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: AcceptDirectConnectGatewayAssociationProposalCommandInput;
    constructor(input: AcceptDirectConnectGatewayAssociationProposalCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptDirectConnectGatewayAssociationProposalCommandInput, AcceptDirectConnectGatewayAssociationProposalCommandOutput>;
    private serialize;
    private deserialize;
}
