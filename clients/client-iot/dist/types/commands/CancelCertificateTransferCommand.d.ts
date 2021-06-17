import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CancelCertificateTransferRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelCertificateTransferCommandInput extends CancelCertificateTransferRequest {
}
export interface CancelCertificateTransferCommandOutput extends __MetadataBearer {
}
/**
 * <p>Cancels a pending transfer for the specified certificate.</p>
 *          <p>
 *             <b>Note</b> Only the transfer source account can use this
 *          operation to cancel a transfer. (Transfer destinations can use <a>RejectCertificateTransfer</a> instead.) After transfer, AWS IoT returns the
 *          certificate to the source account in the INACTIVE state. After the destination account has
 *          accepted the transfer, the transfer cannot be cancelled.</p>
 *          <p>After a certificate transfer is cancelled, the status of the certificate changes from
 *          PENDING_TRANSFER to INACTIVE.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CancelCertificateTransferCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CancelCertificateTransferCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CancelCertificateTransferCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelCertificateTransferCommandInput} for command's `input` shape.
 * @see {@link CancelCertificateTransferCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelCertificateTransferCommand extends $Command<CancelCertificateTransferCommandInput, CancelCertificateTransferCommandOutput, IoTClientResolvedConfig> {
    readonly input: CancelCertificateTransferCommandInput;
    constructor(input: CancelCertificateTransferCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelCertificateTransferCommandInput, CancelCertificateTransferCommandOutput>;
    private serialize;
    private deserialize;
}
