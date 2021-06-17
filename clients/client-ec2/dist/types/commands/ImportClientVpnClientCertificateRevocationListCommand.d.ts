import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ImportClientVpnClientCertificateRevocationListRequest, ImportClientVpnClientCertificateRevocationListResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ImportClientVpnClientCertificateRevocationListCommandInput extends ImportClientVpnClientCertificateRevocationListRequest {
}
export interface ImportClientVpnClientCertificateRevocationListCommandOutput extends ImportClientVpnClientCertificateRevocationListResult, __MetadataBearer {
}
/**
 * <p>Uploads a client certificate revocation list to the specified Client VPN endpoint. Uploading a client certificate revocation list overwrites the existing client certificate revocation list.</p>
 * 		       <p>Uploading a client certificate revocation list resets existing client connections.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ImportClientVpnClientCertificateRevocationListCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ImportClientVpnClientCertificateRevocationListCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ImportClientVpnClientCertificateRevocationListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportClientVpnClientCertificateRevocationListCommandInput} for command's `input` shape.
 * @see {@link ImportClientVpnClientCertificateRevocationListCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ImportClientVpnClientCertificateRevocationListCommand extends $Command<ImportClientVpnClientCertificateRevocationListCommandInput, ImportClientVpnClientCertificateRevocationListCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ImportClientVpnClientCertificateRevocationListCommandInput;
    constructor(input: ImportClientVpnClientCertificateRevocationListCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportClientVpnClientCertificateRevocationListCommandInput, ImportClientVpnClientCertificateRevocationListCommandOutput>;
    private serialize;
    private deserialize;
}
