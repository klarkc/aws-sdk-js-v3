import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteServerCertificateRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteServerCertificateCommandInput extends DeleteServerCertificateRequest {
}
export interface DeleteServerCertificateCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified server certificate.</p>
 *         <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working
 *                 with server certificates</a> in the <i>IAM User Guide</i>. This
 *             topic also includes a list of AWS services that can use the server certificates that
 *             you manage with IAM.</p>
 *         <important>
 *             <p> If you are using a server certificate with Elastic Load Balancing, deleting the
 *                 certificate could have implications for your application. If Elastic Load Balancing
 *                 doesn't detect the deletion of bound certificates, it may continue to use the
 *                 certificates. This could cause Elastic Load Balancing to stop accepting traffic. We
 *                 recommend that you remove the reference to the certificate from Elastic Load
 *                 Balancing before using this command to delete the certificate. For more information,
 *                 see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/APIReference/API_DeleteLoadBalancerListeners.html">DeleteLoadBalancerListeners</a> in the <i>Elastic Load Balancing API
 *                     Reference</i>.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteServerCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteServerCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteServerCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServerCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteServerCertificateCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteServerCertificateCommand extends $Command<DeleteServerCertificateCommandInput, DeleteServerCertificateCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteServerCertificateCommandInput;
    constructor(input: DeleteServerCertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteServerCertificateCommandInput, DeleteServerCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
