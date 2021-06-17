import { __extends } from "tslib";
import { DeregisterInstanceRequest, DeregisterInstanceResponse } from "../models/models_0";
import { deserializeAws_json1_1DeregisterInstanceCommand, serializeAws_json1_1DeregisterInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the Amazon Route 53 DNS records and health check, if any, that AWS Cloud Map created for the specified
 *    instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, DeregisterInstanceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, DeregisterInstanceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new DeregisterInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterInstanceCommandInput} for command's `input` shape.
 * @see {@link DeregisterInstanceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterInstanceCommand = /** @class */ (function (_super) {
    __extends(DeregisterInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeregisterInstanceCommand(input) {
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
    DeregisterInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceDiscoveryClient";
        var commandName = "DeregisterInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeregisterInstanceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeregisterInstanceCommand(input, context);
    };
    DeregisterInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeregisterInstanceCommand(output, context);
    };
    return DeregisterInstanceCommand;
}($Command));
export { DeregisterInstanceCommand };
//# sourceMappingURL=DeregisterInstanceCommand.js.map