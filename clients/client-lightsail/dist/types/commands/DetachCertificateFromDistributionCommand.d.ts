import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DetachCertificateFromDistributionRequest, DetachCertificateFromDistributionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetachCertificateFromDistributionCommandInput extends DetachCertificateFromDistributionRequest {
}
export interface DetachCertificateFromDistributionCommandOutput extends DetachCertificateFromDistributionResult, __MetadataBearer {
}
/**
 * <p>Detaches an SSL/TLS certificate from your Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>After the certificate is detached, your distribution stops accepting traffic for all of
 *       the domains that are associated with the certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DetachCertificateFromDistributionCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DetachCertificateFromDistributionCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DetachCertificateFromDistributionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachCertificateFromDistributionCommandInput} for command's `input` shape.
 * @see {@link DetachCertificateFromDistributionCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetachCertificateFromDistributionCommand extends $Command<DetachCertificateFromDistributionCommandInput, DetachCertificateFromDistributionCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DetachCertificateFromDistributionCommandInput;
    constructor(input: DetachCertificateFromDistributionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachCertificateFromDistributionCommandInput, DetachCertificateFromDistributionCommandOutput>;
    private serialize;
    private deserialize;
}
