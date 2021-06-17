"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadServerCertificateCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Uploads a server certificate entity for the AWS account. The server certificate
 *             entity includes a public key certificate, a private key, and an optional certificate
 *             chain, which should all be PEM-encoded.</p>
 *         <p>We recommend that you use <a href="https://docs.aws.amazon.com/acm/">AWS Certificate
 *                 Manager</a> to provision, manage, and deploy your server certificates. With ACM
 *             you can request a certificate, deploy it to AWS resources, and let ACM handle
 *             certificate renewals for you. Certificates provided by ACM are free. For more
 *             information about using ACM, see the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">AWS Certificate Manager User Guide</a>.</p>
 *         <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working
 *                 with server certificates</a> in the <i>IAM User Guide</i>. This
 *             topic includes a list of AWS services that can use the server certificates that you
 *             manage with IAM.</p>
 *         <p>For information about the number of server certificates you can upload, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS
 *                 quotas</a> in the <i>IAM User Guide</i>.</p>
 *         <note>
 *             <p>Because the body of the public key certificate, private key, and the certificate
 *                 chain can be large, you should use POST rather than GET when calling
 *                     <code>UploadServerCertificate</code>. For information about setting up
 *                 signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing AWS API
 *                     requests</a> in the <i>AWS General Reference</i>. For general
 *                 information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/programming.html">Calling the API by making HTTP query
 *                     requests</a> in the <i>IAM User Guide</i>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UploadServerCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UploadServerCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UploadServerCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UploadServerCertificateCommandInput} for command's `input` shape.
 * @see {@link UploadServerCertificateCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UploadServerCertificateCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "IAMClient";
        const commandName = "UploadServerCertificateCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.UploadServerCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.UploadServerCertificateResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryUploadServerCertificateCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryUploadServerCertificateCommand(output, context);
    }
}
exports.UploadServerCertificateCommand = UploadServerCertificateCommand;
//# sourceMappingURL=UploadServerCertificateCommand.js.map