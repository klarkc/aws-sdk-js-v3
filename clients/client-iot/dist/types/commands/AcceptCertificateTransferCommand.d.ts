import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { AcceptCertificateTransferRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AcceptCertificateTransferCommandInput extends AcceptCertificateTransferRequest {
}
export interface AcceptCertificateTransferCommandOutput extends __MetadataBearer {
}
/**
 * <p>Accepts a pending certificate transfer. The default state of the certificate is
 *          INACTIVE.</p>
 *          <p>To check for pending certificate transfers, call <a>ListCertificates</a>
 *          to enumerate your certificates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AcceptCertificateTransferCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AcceptCertificateTransferCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new AcceptCertificateTransferCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptCertificateTransferCommandInput} for command's `input` shape.
 * @see {@link AcceptCertificateTransferCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AcceptCertificateTransferCommand extends $Command<AcceptCertificateTransferCommandInput, AcceptCertificateTransferCommandOutput, IoTClientResolvedConfig> {
    readonly input: AcceptCertificateTransferCommandInput;
    constructor(input: AcceptCertificateTransferCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptCertificateTransferCommandInput, AcceptCertificateTransferCommandOutput>;
    private serialize;
    private deserialize;
}
