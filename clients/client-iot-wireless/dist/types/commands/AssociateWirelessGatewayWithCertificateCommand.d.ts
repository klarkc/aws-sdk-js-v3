import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { AssociateWirelessGatewayWithCertificateRequest, AssociateWirelessGatewayWithCertificateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateWirelessGatewayWithCertificateCommandInput extends AssociateWirelessGatewayWithCertificateRequest {
}
export interface AssociateWirelessGatewayWithCertificateCommandOutput extends AssociateWirelessGatewayWithCertificateResponse, __MetadataBearer {
}
/**
 * <p>Associates a wireless gateway with a certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, AssociateWirelessGatewayWithCertificateCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, AssociateWirelessGatewayWithCertificateCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new AssociateWirelessGatewayWithCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateWirelessGatewayWithCertificateCommandInput} for command's `input` shape.
 * @see {@link AssociateWirelessGatewayWithCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateWirelessGatewayWithCertificateCommand extends $Command<AssociateWirelessGatewayWithCertificateCommandInput, AssociateWirelessGatewayWithCertificateCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: AssociateWirelessGatewayWithCertificateCommandInput;
    constructor(input: AssociateWirelessGatewayWithCertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateWirelessGatewayWithCertificateCommandInput, AssociateWirelessGatewayWithCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
