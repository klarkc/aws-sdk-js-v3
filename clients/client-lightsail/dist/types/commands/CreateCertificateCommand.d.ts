import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateCertificateRequest, CreateCertificateResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCertificateCommandInput extends CreateCertificateRequest {
}
export interface CreateCertificateCommandOutput extends CreateCertificateResult, __MetadataBearer {
}
/**
 * <p>Creates an SSL/TLS certificate for an Amazon Lightsail content delivery network (CDN)
 *       distribution and a container service.</p>
 *          <p>After the certificate is valid, use the <code>AttachCertificateToDistribution</code>
 *       action to use the certificate and its domains with your distribution. Or use the
 *         <code>UpdateContainerService</code> action to use the certificate and its domains with your
 *       container service.</p>
 *          <important>
 *             <p>Only certificates created in the <code>us-east-1</code> AWS Region can be attached to
 *         Lightsail distributions. Lightsail distributions are global resources that can reference
 *         an origin in any AWS Region, and distribute its content globally. However, all
 *         distributions are located in the <code>us-east-1</code> Region.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateCertificateCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateCertificateCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCertificateCommandInput} for command's `input` shape.
 * @see {@link CreateCertificateCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCertificateCommand extends $Command<CreateCertificateCommandInput, CreateCertificateCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateCertificateCommandInput;
    constructor(input: CreateCertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCertificateCommandInput, CreateCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
