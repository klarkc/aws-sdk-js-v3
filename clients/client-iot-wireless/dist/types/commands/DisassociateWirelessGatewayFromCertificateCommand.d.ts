import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { DisassociateWirelessGatewayFromCertificateRequest, DisassociateWirelessGatewayFromCertificateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateWirelessGatewayFromCertificateCommandInput extends DisassociateWirelessGatewayFromCertificateRequest {
}
export interface DisassociateWirelessGatewayFromCertificateCommandOutput extends DisassociateWirelessGatewayFromCertificateResponse, __MetadataBearer {
}
/**
 * <p>Disassociates a wireless gateway from its currently associated certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DisassociateWirelessGatewayFromCertificateCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DisassociateWirelessGatewayFromCertificateCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new DisassociateWirelessGatewayFromCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateWirelessGatewayFromCertificateCommandInput} for command's `input` shape.
 * @see {@link DisassociateWirelessGatewayFromCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateWirelessGatewayFromCertificateCommand extends $Command<DisassociateWirelessGatewayFromCertificateCommandInput, DisassociateWirelessGatewayFromCertificateCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: DisassociateWirelessGatewayFromCertificateCommandInput;
    constructor(input: DisassociateWirelessGatewayFromCertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateWirelessGatewayFromCertificateCommandInput, DisassociateWirelessGatewayFromCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
