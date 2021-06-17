import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { UpdateDirectConnectGatewayAssociationRequest, UpdateDirectConnectGatewayAssociationResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDirectConnectGatewayAssociationCommandInput extends UpdateDirectConnectGatewayAssociationRequest {
}
export interface UpdateDirectConnectGatewayAssociationCommandOutput extends UpdateDirectConnectGatewayAssociationResult, __MetadataBearer {
}
/**
 * <p>Updates the specified attributes of the Direct Connect gateway association.</p>
 *          <p>Add or remove prefixes from the association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, UpdateDirectConnectGatewayAssociationCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, UpdateDirectConnectGatewayAssociationCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new UpdateDirectConnectGatewayAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDirectConnectGatewayAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateDirectConnectGatewayAssociationCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDirectConnectGatewayAssociationCommand extends $Command<UpdateDirectConnectGatewayAssociationCommandInput, UpdateDirectConnectGatewayAssociationCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: UpdateDirectConnectGatewayAssociationCommandInput;
    constructor(input: UpdateDirectConnectGatewayAssociationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDirectConnectGatewayAssociationCommandInput, UpdateDirectConnectGatewayAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
