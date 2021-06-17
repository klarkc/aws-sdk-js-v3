import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { TransferCertificateRequest, TransferCertificateResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TransferCertificateCommandInput extends TransferCertificateRequest {
}
export interface TransferCertificateCommandOutput extends TransferCertificateResponse, __MetadataBearer {
}
/**
 * <p>Transfers the specified certificate to the specified AWS account.</p>
 *          <p>You can cancel the transfer until it is acknowledged by the recipient.</p>
 *          <p>No notification is sent to the transfer destination's account. It is up to the caller
 *          to notify the transfer target.</p>
 *          <p>The certificate being transferred must not be in the ACTIVE state. You can use the
 *          UpdateCertificate API to deactivate it.</p>
 *          <p>The certificate must not have any policies attached to it. You can use the
 *          DetachPrincipalPolicy API to detach them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, TransferCertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, TransferCertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new TransferCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TransferCertificateCommandInput} for command's `input` shape.
 * @see {@link TransferCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TransferCertificateCommand extends $Command<TransferCertificateCommandInput, TransferCertificateCommandOutput, IoTClientResolvedConfig> {
    readonly input: TransferCertificateCommandInput;
    constructor(input: TransferCertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TransferCertificateCommandInput, TransferCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
