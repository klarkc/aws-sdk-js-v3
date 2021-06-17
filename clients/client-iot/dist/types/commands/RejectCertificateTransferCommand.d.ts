import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { RejectCertificateTransferRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RejectCertificateTransferCommandInput extends RejectCertificateTransferRequest {
}
export interface RejectCertificateTransferCommandOutput extends __MetadataBearer {
}
/**
 * <p>Rejects a pending certificate transfer. After AWS IoT rejects a certificate transfer,
 *          the certificate status changes from <b>PENDING_TRANSFER</b> to
 *             <b>INACTIVE</b>.</p>
 *          <p>To check for pending certificate transfers, call <a>ListCertificates</a>
 *          to enumerate your certificates.</p>
 *          <p>This operation can only be called by the transfer destination. After it is called,
 *          the certificate will be returned to the source's account in the INACTIVE state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RejectCertificateTransferCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RejectCertificateTransferCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new RejectCertificateTransferCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectCertificateTransferCommandInput} for command's `input` shape.
 * @see {@link RejectCertificateTransferCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RejectCertificateTransferCommand extends $Command<RejectCertificateTransferCommandInput, RejectCertificateTransferCommandOutput, IoTClientResolvedConfig> {
    readonly input: RejectCertificateTransferCommandInput;
    constructor(input: RejectCertificateTransferCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectCertificateTransferCommandInput, RejectCertificateTransferCommandOutput>;
    private serialize;
    private deserialize;
}
