import { __extends } from "tslib";
import { UpdateInstanceCustomHealthStatusRequest } from "../models/models_0";
import { deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommand, serializeAws_json1_1UpdateInstanceCustomHealthStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Submits a request to change the health status of a custom health check to healthy or unhealthy.</p>
 *          <p>You can use <code>UpdateInstanceCustomHealthStatus</code> to change the status only for custom health checks,
 *    which you define using <code>HealthCheckCustomConfig</code> when you create a service. You can't use it to change the
 *    status for Route 53 health checks, which you define using <code>HealthCheckConfig</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_HealthCheckCustomConfig.html">HealthCheckCustomConfig</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, UpdateInstanceCustomHealthStatusCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, UpdateInstanceCustomHealthStatusCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new UpdateInstanceCustomHealthStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInstanceCustomHealthStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceCustomHealthStatusCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateInstanceCustomHealthStatusCommand = /** @class */ (function (_super) {
    __extends(UpdateInstanceCustomHealthStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateInstanceCustomHealthStatusCommand(input) {
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
    UpdateInstanceCustomHealthStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceDiscoveryClient";
        var commandName = "UpdateInstanceCustomHealthStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateInstanceCustomHealthStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateInstanceCustomHealthStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateInstanceCustomHealthStatusCommand(input, context);
    };
    UpdateInstanceCustomHealthStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommand(output, context);
    };
    return UpdateInstanceCustomHealthStatusCommand;
}($Command));
export { UpdateInstanceCustomHealthStatusCommand };
//# sourceMappingURL=UpdateInstanceCustomHealthStatusCommand.js.map