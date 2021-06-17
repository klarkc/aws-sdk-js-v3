import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ExportClientVpnClientCertificateRevocationListRequest, ExportClientVpnClientCertificateRevocationListResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ExportClientVpnClientCertificateRevocationListCommandInput extends ExportClientVpnClientCertificateRevocationListRequest {
}
export interface ExportClientVpnClientCertificateRevocationListCommandOutput extends ExportClientVpnClientCertificateRevocationListResult, __MetadataBearer {
}
/**
 * <p>Downloads the client certificate revocation list for the specified Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ExportClientVpnClientCertificateRevocationListCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ExportClientVpnClientCertificateRevocationListCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ExportClientVpnClientCertificateRevocationListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportClientVpnClientCertificateRevocationListCommandInput} for command's `input` shape.
 * @see {@link ExportClientVpnClientCertificateRevocationListCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExportClientVpnClientCertificateRevocationListCommand extends $Command<ExportClientVpnClientCertificateRevocationListCommandInput, ExportClientVpnClientCertificateRevocationListCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ExportClientVpnClientCertificateRevocationListCommandInput;
    constructor(input: ExportClientVpnClientCertificateRevocationListCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExportClientVpnClientCertificateRevocationListCommandInput, ExportClientVpnClientCertificateRevocationListCommandOutput>;
    private serialize;
    private deserialize;
}
