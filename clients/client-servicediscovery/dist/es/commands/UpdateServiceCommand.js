import { __extends } from "tslib";
import { UpdateServiceRequest, UpdateServiceResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateServiceCommand, serializeAws_json1_1UpdateServiceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Submits a request to perform the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>Update the TTL setting for existing <code>DnsRecords</code> configurations</p>
 *             </li>
 *             <li>
 *                <p>Add, update, or delete <code>HealthCheckConfig</code> for a specified service</p>
 *                <note>
 *                   <p>You can't add, update, or delete a <code>HealthCheckCustomConfig</code> configuration.</p>
 *                </note>
 *             </li>
 *          </ul>
 *          <p>For public and private DNS namespaces, note the following:</p>
 *          <ul>
 *             <li>
 *                <p>If you omit any existing <code>DnsRecords</code> or <code>HealthCheckConfig</code> configurations from an
 *       <code>UpdateService</code> request, the configurations are deleted from the service.</p>
 *             </li>
 *             <li>
 *                <p>If you omit an existing <code>HealthCheckCustomConfig</code> configuration from an <code>UpdateService</code>
 *      request, the configuration isn't deleted from the service.</p>
 *             </li>
 *          </ul>
 *          <p>When you update settings for a service, AWS Cloud Map also updates the corresponding settings in all the records
 *    and health checks that were created by using the specified service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, UpdateServiceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, UpdateServiceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new UpdateServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServiceCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateServiceCommand = /** @class */ (function (_super) {
    __extends(UpdateServiceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateServiceCommand(input) {
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
    UpdateServiceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceDiscoveryClient";
        var commandName = "UpdateServiceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateServiceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateServiceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateServiceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateServiceCommand(input, context);
    };
    UpdateServiceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateServiceCommand(output, context);
    };
    return UpdateServiceCommand;
}($Command));
export { UpdateServiceCommand };
//# sourceMappingURL=UpdateServiceCommand.js.map