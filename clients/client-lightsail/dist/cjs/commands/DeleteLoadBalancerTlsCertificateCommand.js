"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLoadBalancerTlsCertificateCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes an SSL/TLS certificate associated with a Lightsail load balancer.</p>
 *          <p>The <code>DeleteLoadBalancerTlsCertificate</code> operation supports tag-based access
 *       control via resource tags applied to the resource identified by <code>load balancer
 *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteLoadBalancerTlsCertificateCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteLoadBalancerTlsCertificateCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteLoadBalancerTlsCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLoadBalancerTlsCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteLoadBalancerTlsCertificateCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteLoadBalancerTlsCertificateCommand extends smithy_client_1.Command {
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
        const commandName = "DeleteLoadBalancerTlsCertificateCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteLoadBalancerTlsCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteLoadBalancerTlsCertificateResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand(output, context);
    }
}
exports.DeleteLoadBalancerTlsCertificateCommand = DeleteLoadBalancerTlsCertificateCommand;
//# sourceMappingURL=DeleteLoadBalancerTlsCertificateCommand.js.map