import { __extends } from "tslib";
import { CreateServiceRequest, CreateServiceResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateServiceCommand, serializeAws_json1_1CreateServiceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateServiceCommand = /** @class */ (function (_super) {
    __extends(CreateServiceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateServiceCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    CreateServiceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceDiscoveryClient";
        var commandName = "CreateServiceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateServiceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateServiceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateServiceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateServiceCommand(input, context);
    };
    CreateServiceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateServiceCommand(output, context);
    };
    return CreateServiceCommand;
}($Command));
export { CreateServiceCommand };
//# sourceMappingURL=CreateServiceCommand.js.map