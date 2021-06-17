import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { DisassociateWebsiteCertificateAuthorityRequest, DisassociateWebsiteCertificateAuthorityResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateWebsiteCertificateAuthorityCommandInput extends DisassociateWebsiteCertificateAuthorityRequest {
}
export interface DisassociateWebsiteCertificateAuthorityCommandOutput extends DisassociateWebsiteCertificateAuthorityResponse, __MetadataBearer {
}
/**
 * <p>Removes a certificate authority (CA).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DisassociateWebsiteCertificateAuthorityCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DisassociateWebsiteCertificateAuthorityCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DisassociateWebsiteCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateWebsiteCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link DisassociateWebsiteCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateWebsiteCertificateAuthorityCommand extends $Command<DisassociateWebsiteCertificateAuthorityCommandInput, DisassociateWebsiteCertificateAuthorityCommandOutput, WorkLinkClientResolvedConfig> {
    readonly input: DisassociateWebsiteCertificateAuthorityCommandInput;
    constructor(input: DisassociateWebsiteCertificateAuthorityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkLinkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateWebsiteCertificateAuthorityCommandInput, DisassociateWebsiteCertificateAuthorityCommandOutput>;
    private serialize;
    private deserialize;
}
