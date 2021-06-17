"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachCertificateToDistributionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class AttachCertificateToDistributionCommand extends smithy_client_1.Command {
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
        const clientName = "LightsailClient";
        const commandName = "AttachCertificateToDistributionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AttachCertificateToDistributionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AttachCertificateToDistributionResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1AttachCertificateToDistributionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1AttachCertificateToDistributionCommand(output, context);
    }
}
exports.AttachCertificateToDistributionCommand = AttachCertificateToDistributionCommand;
//# sourceMappingURL=AttachCertificateToDistributionCommand.js.map