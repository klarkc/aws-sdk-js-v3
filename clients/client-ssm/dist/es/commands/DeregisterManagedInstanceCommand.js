import { __extends } from "tslib";
import { DeregisterManagedInstanceRequest, DeregisterManagedInstanceResult } from "../models/models_0";
import { deserializeAws_json1_1DeregisterManagedInstanceCommand, serializeAws_json1_1DeregisterManagedInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the server or virtual machine from the list of registered servers. You can
 *    reregister the instance again at any time. If you don't plan to use Run Command on the server, we
 *    suggest uninstalling SSM Agent first.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeregisterManagedInstanceCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeregisterManagedInstanceCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeregisterManagedInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterManagedInstanceCommandInput} for command's `input` shape.
 * @see {@link DeregisterManagedInstanceCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterManagedInstanceCommand = /** @class */ (function (_super) {
    __extends(DeregisterManagedInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeregisterManagedInstanceCommand(input) {
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
    DeregisterManagedInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeregisterManagedInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterManagedInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeregisterManagedInstanceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterManagedInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeregisterManagedInstanceCommand(input, context);
    };
    DeregisterManagedInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeregisterManagedInstanceCommand(output, context);
    };
    return DeregisterManagedInstanceCommand;
}($Command));
export { DeregisterManagedInstanceCommand };
//# sourceMappingURL=DeregisterManagedInstanceCommand.js.map