"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePublicDnsNamespaceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a public namespace based on DNS, which is visible on the internet. The namespace defines your service
 *    naming scheme. For example, if you name your namespace <code>example.com</code> and name your service
 *     <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. You can discover
 *    instances that were registered with a public DNS namespace by using either a <code>DiscoverInstances</code> request
 *    or using DNS. For the current quota on the number of namespaces that you can create using the same AWS account, see
 *     <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map Quotas</a>in the
 *     <i>AWS Cloud Map Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, CreatePublicDnsNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, CreatePublicDnsNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new CreatePublicDnsNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePublicDnsNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreatePublicDnsNamespaceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreatePublicDnsNamespaceCommand extends smithy_client_1.Command {
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
        const clientName = "ServiceDiscoveryClient";
        const commandName = "CreatePublicDnsNamespaceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreatePublicDnsNamespaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreatePublicDnsNamespaceResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreatePublicDnsNamespaceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreatePublicDnsNamespaceCommand(output, context);
    }
}
exports.CreatePublicDnsNamespaceCommand = CreatePublicDnsNamespaceCommand;
//# sourceMappingURL=CreatePublicDnsNamespaceCommand.js.map