import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { DisassociateCustomerGatewayRequest, DisassociateCustomerGatewayResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateCustomerGatewayCommandInput extends DisassociateCustomerGatewayRequest {
}
export interface DisassociateCustomerGatewayCommandOutput extends DisassociateCustomerGatewayResponse, __MetadataBearer {
}
/**
 * <p>Disassociates a customer gateway from a device and a link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DisassociateCustomerGatewayCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DisassociateCustomerGatewayCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new DisassociateCustomerGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateCustomerGatewayCommandInput} for command's `input` shape.
 * @see {@link DisassociateCustomerGatewayCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateCustomerGatewayCommand extends $Command<DisassociateCustomerGatewayCommandInput, DisassociateCustomerGatewayCommandOutput, NetworkManagerClientResolvedConfig> {
    readonly input: DisassociateCustomerGatewayCommandInput;
    constructor(input: DisassociateCustomerGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateCustomerGatewayCommandInput, DisassociateCustomerGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
