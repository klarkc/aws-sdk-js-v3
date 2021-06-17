"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterInstanceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates or updates one or more records and, optionally, creates a health check based on the settings in a
 *    specified service. When you submit a <code>RegisterInstance</code> request, the following occurs:</p>
 *          <ul>
 *             <li>
 *                <p>For each DNS record that you define in the service that's specified by <code>ServiceId</code>, a record is
 *      created or updated in the hosted zone that's associated with the corresponding namespace.</p>
 *             </li>
 *             <li>
 *                <p>If the service includes <code>HealthCheckConfig</code>, a health check is created based on the settings in the
 *      health check configuration.</p>
 *             </li>
 *             <li>
 *                <p>The health check, if any, is associated with each of the new or updated records.</p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>One <code>RegisterInstance</code> request must complete before you can submit another request and specify the
 *     same service ID and instance ID.</p>
 *          </important>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html">CreateService</a>.</p>
 *          <p>When AWS Cloud Map receives a DNS query for the specified DNS name, it returns the applicable value:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>If the health check is healthy</b>: returns all the records</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>If the health check is unhealthy</b>: returns the applicable value for the last
 *      healthy instance</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>If you didn't specify a health check configuration</b>: returns all the
 *      records</p>
 *             </li>
 *          </ul>
 *          <p>For the current quota on the number of instances that you can register using the same namespace and using the
 *    same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map
 *     Limits</a> in the <i>AWS Cloud Map Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, RegisterInstanceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, RegisterInstanceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new RegisterInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterInstanceCommandInput} for command's `input` shape.
 * @see {@link RegisterInstanceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RegisterInstanceCommand extends smithy_client_1.Command {
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
        const commandName = "RegisterInstanceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RegisterInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.RegisterInstanceResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1RegisterInstanceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1RegisterInstanceCommand(output, context);
    }
}
exports.RegisterInstanceCommand = RegisterInstanceCommand;
//# sourceMappingURL=RegisterInstanceCommand.js.map