import { __extends } from "tslib";
import { GetInstancesHealthStatusRequest, GetInstancesHealthStatusResponse } from "../models/models_0";
import { deserializeAws_json1_1GetInstancesHealthStatusCommand, serializeAws_json1_1GetInstancesHealthStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the current health status (<code>Healthy</code>, <code>Unhealthy</code>, or <code>Unknown</code>) of one or
 *    more instances that are associated with a specified service.</p>
 *          <note>
 *             <p>There's a brief delay between when you register an instance and when the health status for the instance is
 *     available. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, GetInstancesHealthStatusCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, GetInstancesHealthStatusCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new GetInstancesHealthStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstancesHealthStatusCommandInput} for command's `input` shape.
 * @see {@link GetInstancesHealthStatusCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInstancesHealthStatusCommand = /** @class */ (function (_super) {
    __extends(GetInstancesHealthStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInstancesHealthStatusCommand(input) {
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
    GetInstancesHealthStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceDiscoveryClient";
        var commandName = "GetInstancesHealthStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInstancesHealthStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInstancesHealthStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInstancesHealthStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetInstancesHealthStatusCommand(input, context);
    };
    GetInstancesHealthStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetInstancesHealthStatusCommand(output, context);
    };
    return GetInstancesHealthStatusCommand;
}($Command));
export { GetInstancesHealthStatusCommand };
//# sourceMappingURL=GetInstancesHealthStatusCommand.js.map