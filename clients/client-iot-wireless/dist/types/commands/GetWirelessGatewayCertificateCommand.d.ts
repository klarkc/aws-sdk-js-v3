import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetWirelessGatewayCertificateRequest, GetWirelessGatewayCertificateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetWirelessGatewayCertificateCommandInput extends GetWirelessGatewayCertificateRequest {
}
export interface GetWirelessGatewayCertificateCommandOutput extends GetWirelessGatewayCertificateResponse, __MetadataBearer {
}
/**
 * <p>Gets the ID of the certificate that is currently associated with a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessGatewayCertificateCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessGatewayCertificateCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetWirelessGatewayCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWirelessGatewayCertificateCommandInput} for command's `input` shape.
 * @see {@link GetWirelessGatewayCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetWirelessGatewayCertificateCommand extends $Command<GetWirelessGatewayCertificateCommandInput, GetWirelessGatewayCertificateCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: GetWirelessGatewayCertificateCommandInput;
    constructor(input: GetWirelessGatewayCertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetWirelessGatewayCertificateCommandInput, GetWirelessGatewayCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
