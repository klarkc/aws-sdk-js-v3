"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddListenerCertificatesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Adds the specified SSL server certificate to the certificate list for the specified HTTPS
 *       or TLS listener.</p>
 *          <p>If the certificate in already in the certificate list, the call is successful but the
 *       certificate is not added again.</p>
 *
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html">HTTPS
 *         listeners</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html">TLS
 *         listeners</a> in the <i>Network Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, AddListenerCertificatesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, AddListenerCertificatesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new AddListenerCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddListenerCertificatesCommandInput} for command's `input` shape.
 * @see {@link AddListenerCertificatesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AddListenerCertificatesCommand extends smithy_client_1.Command {
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
        const clientName = "ElasticLoadBalancingV2Client";
        const commandName = "AddListenerCertificatesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AddListenerCertificatesInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AddListenerCertificatesOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryAddListenerCertificatesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryAddListenerCertificatesCommand(output, context);
    }
}
exports.AddListenerCertificatesCommand = AddListenerCertificatesCommand;
//# sourceMappingURL=AddListenerCertificatesCommand.js.map