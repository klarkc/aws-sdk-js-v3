import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DeregisterCertificateRequest, DeregisterCertificateResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeregisterCertificateCommandInput extends DeregisterCertificateRequest {
}
export interface DeregisterCertificateCommandOutput extends DeregisterCertificateResult, __MetadataBearer {
}
/**
 * <p>Deletes from the system the certificate that was registered for secure LDAP or client certificate authentication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DeregisterCertificateCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DeregisterCertificateCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DeregisterCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterCertificateCommandInput} for command's `input` shape.
 * @see {@link DeregisterCertificateCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterCertificateCommand extends $Command<DeregisterCertificateCommandInput, DeregisterCertificateCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DeregisterCertificateCommandInput;
    constructor(input: DeregisterCertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterCertificateCommandInput, DeregisterCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
