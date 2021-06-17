import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateCertificateFromCsrRequest, CreateCertificateFromCsrResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCertificateFromCsrCommandInput extends CreateCertificateFromCsrRequest {
}
export interface CreateCertificateFromCsrCommandOutput extends CreateCertificateFromCsrResponse, __MetadataBearer {
}
/**
 * <p>Creates an X.509 certificate using the specified certificate signing
 *          request.</p>
 *          <p>
 *             <b>Note:</b> The CSR must include a public key that is either an
 *          RSA key with a length of at least 2048 bits or an ECC key from NIST P-256 or NIST P-384
 *          curves. </p>
 *          <p>
 *             <b>Note:</b> Reusing the same certificate signing request (CSR)
 *          results in a distinct certificate.</p>
 *          <p>You can create multiple certificates in a batch by creating a directory, copying
 *          multiple .csr files into that directory, and then specifying that directory on the command
 *          line. The following commands show how to create a batch of certificates given a batch of
 *          CSRs.</p>
 *          <p>Assuming a set of CSRs are located inside of the directory
 *          my-csr-directory:</p>
 *
 *          <p>On Linux and OS X, the command is:</p>
 *
 *          <p>$ ls my-csr-directory/ | xargs -I {} aws iot create-certificate-from-csr
 *          --certificate-signing-request file://my-csr-directory/{}</p>
 *          <p>This command lists all of the CSRs in my-csr-directory and pipes each CSR file name
 *          to the aws iot create-certificate-from-csr AWS CLI command to create a certificate for the
 *          corresponding CSR.</p>
 *          <p>The aws iot create-certificate-from-csr part of the command can also be run in
 *          parallel to speed up the certificate creation process:</p>
 *          <p>$ ls my-csr-directory/ | xargs -P 10 -I {} aws iot create-certificate-from-csr
 *          --certificate-signing-request file://my-csr-directory/{}</p>
 *          <p>On Windows PowerShell, the command to create certificates for all CSRs in
 *          my-csr-directory is:</p>
 *          <p>> ls -Name my-csr-directory | %{aws iot create-certificate-from-csr
 *          --certificate-signing-request file://my-csr-directory/$_}</p>
 *          <p>On a Windows command prompt, the command to create certificates for all CSRs in
 *          my-csr-directory is:</p>
 *          <p>> forfiles /p my-csr-directory /c "cmd /c aws iot create-certificate-from-csr
 *          --certificate-signing-request file://@path"</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateCertificateFromCsrCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateCertificateFromCsrCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateCertificateFromCsrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCertificateFromCsrCommandInput} for command's `input` shape.
 * @see {@link CreateCertificateFromCsrCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCertificateFromCsrCommand extends $Command<CreateCertificateFromCsrCommandInput, CreateCertificateFromCsrCommandOutput, IoTClientResolvedConfig> {
    readonly input: CreateCertificateFromCsrCommandInput;
    constructor(input: CreateCertificateFromCsrCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCertificateFromCsrCommandInput, CreateCertificateFromCsrCommandOutput>;
    private serialize;
    private deserialize;
}
