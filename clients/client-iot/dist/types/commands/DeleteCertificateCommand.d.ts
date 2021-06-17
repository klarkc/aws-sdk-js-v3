import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteCertificateRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCertificateCommandInput extends DeleteCertificateRequest {
}
export interface DeleteCertificateCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified certificate.</p>
 *          <p>A certificate cannot be deleted if it has a policy or IoT thing attached to it or if
 *          its status is set to ACTIVE. To delete a certificate, first use the <a>DetachPrincipalPolicy</a> API to detach all policies. Next, use the <a>UpdateCertificate</a> API to set the certificate to the INACTIVE
 *          status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteCertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteCertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCertificateCommand extends $Command<DeleteCertificateCommandInput, DeleteCertificateCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteCertificateCommandInput;
    constructor(input: DeleteCertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCertificateCommandInput, DeleteCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
