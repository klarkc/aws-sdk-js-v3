import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { CreateDirectConnectGatewayRequest, CreateDirectConnectGatewayResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDirectConnectGatewayCommandInput extends CreateDirectConnectGatewayRequest {
}
export interface CreateDirectConnectGatewayCommandOutput extends CreateDirectConnectGatewayResult, __MetadataBearer {
}
/**
 * <p>Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set
 *       of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any
 *       AWS Region after it is created. The virtual interfaces and virtual private gateways that
 *       are connected through a Direct Connect gateway can be in different AWS Regions. This enables you to
 *       connect to a VPC in any Region, regardless of the Region in which the virtual interfaces
 *       are located, and pass traffic between them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateDirectConnectGatewayCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateDirectConnectGatewayCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new CreateDirectConnectGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDirectConnectGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateDirectConnectGatewayCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDirectConnectGatewayCommand extends $Command<CreateDirectConnectGatewayCommandInput, CreateDirectConnectGatewayCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: CreateDirectConnectGatewayCommandInput;
    constructor(input: CreateDirectConnectGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDirectConnectGatewayCommandInput, CreateDirectConnectGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
