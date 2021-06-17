"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateServiceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a service. This action defines the configuration for the following entities:</p>
 *          <ul>
 *             <li>
 *                <p>For public and private DNS namespaces, one of the following combinations of DNS records in Amazon Route 53:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>A</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>AAAA</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>A</code> and <code>AAAA</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>SRV</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>CNAME</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Optionally, a health check</p>
 *             </li>
 *          </ul>
 *          <p>After you create the service, you can submit a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a> request, and AWS Cloud Map uses the
 *    values in the configuration to create the specified entities.</p>
 *          <p>For the current quota on the number of instances that you can register using the same namespace and using the
 *    same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map
 *     Limits</a> in the <i>AWS Cloud Map Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, CreateServiceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, CreateServiceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new CreateServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateServiceCommandInput} for command's `input` shape.
 * @see {@link CreateServiceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateServiceCommand extends smithy_client_1.Command {
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
        const commandName = "CreateServiceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateServiceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateServiceResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateServiceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateServiceCommand(output, context);
    }
}
exports.CreateServiceCommand = CreateServiceCommand;
//# sourceMappingURL=CreateServiceCommand.js.map