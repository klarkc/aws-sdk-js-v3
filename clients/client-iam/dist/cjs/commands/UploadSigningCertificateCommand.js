"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadSigningCertificateCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Uploads an X.509 signing certificate and associates it with the specified IAM user.
 *             Some AWS services require you to use certificates to validate requests that are signed
 *             with a corresponding private key. When you upload the certificate, its default status is
 *                 <code>Active</code>.</p>
 *         <p>For information about when you would use an X.509 signing certificate, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Managing
 *                 server certificates in IAM</a> in the
 *             <i>IAM User Guide</i>.</p>
 *         <p>If the <code>UserName</code> is not specified, the IAM user name is determined
 *             implicitly based on the AWS access key ID used to sign the request. This operation
 *             works for access keys under the AWS account. Consequently, you can use this operation
 *             to manage AWS account root user credentials even if the AWS account has no
 *             associated users.</p>
 *         <note>
 *             <p>Because the body of an X.509 certificate can be large, you should use POST rather
 *                 than GET when calling <code>UploadSigningCertificate</code>. For information about
 *                 setting up signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing
 *                     AWS API requests</a> in the <i>AWS General Reference</i>. For
 *                 general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query
 *                     requests</a> in the <i>IAM User Guide</i>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UploadSigningCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UploadSigningCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UploadSigningCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UploadSigningCertificateCommandInput} for command's `input` shape.
 * @see {@link UploadSigningCertificateCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UploadSigningCertificateCommand extends smithy_client_1.Command {
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
        const commandName = "UploadSigningCertificateCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.UploadSigningCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.UploadSigningCertificateResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryUploadSigningCertificateCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryUploadSigningCertificateCommand(output, context);
    }
}
exports.UploadSigningCertificateCommand = UploadSigningCertificateCommand;
//# sourceMappingURL=UploadSigningCertificateCommand.js.map