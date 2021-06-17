import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { AttachCertificateToDistributionRequest, AttachCertificateToDistributionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AttachCertificateToDistributionCommandInput extends AttachCertificateToDistributionRequest {
}
export interface AttachCertificateToDistributionCommandOutput extends AttachCertificateToDistributionResult, __MetadataBearer {
}
/**
 * <p>Attaches an SSL/TLS certificate to your Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>After the certificate is attached, your distribution accepts HTTPS traffic for all of the
 *       domains that are associated with the certificate.</p>
 *          <p>Use the <code>CreateCertificate</code> action to create a certificate that you can attach
 *       to your distribution.</p>
 *          <important>
 *             <p>Only certificates created in the <code>us-east-1</code> AWS Region can be attached to
 *         Lightsail distributions. Lightsail distributions are global resources that can reference
 *         an origin in any AWS Region, and distribute its content globally. However, all
 *         distributions are located in the <code>us-east-1</code> Region.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, AttachCertificateToDistributionCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, AttachCertificateToDistributionCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new AttachCertificateToDistributionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachCertificateToDistributionCommandInput} for command's `input` shape.
 * @see {@link AttachCertificateToDistributionCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AttachCertificateToDistributionCommand extends $Command<AttachCertificateToDistributionCommandInput, AttachCertificateToDistributionCommandOutput, LightsailClientResolvedConfig> {
    readonly input: AttachCertificateToDistributionCommandInput;
    constructor(input: AttachCertificateToDistributionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachCertificateToDistributionCommandInput, AttachCertificateToDistributionCommandOutput>;
    private serialize;
    private deserialize;
}
