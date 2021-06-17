import { __extends } from "tslib";
import { DeleteLoadBalancerListenerInput, DeleteLoadBalancerListenerOutput } from "../models/models_0";
import { deserializeAws_queryDeleteLoadBalancerListenersCommand, serializeAws_queryDeleteLoadBalancerListenersCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified listeners from the specified load balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DeleteLoadBalancerListenersCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DeleteLoadBalancerListenersCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new DeleteLoadBalancerListenersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLoadBalancerListenersCommandInput} for command's `input` shape.
 * @see {@link DeleteLoadBalancerListenersCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLoadBalancerListenersCommand = /** @class */ (function (_super) {
    __extends(DeleteLoadBalancerListenersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLoadBalancerListenersCommand(input) {
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
    DeleteLoadBalancerListenersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "DeleteLoadBalancerListenersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLoadBalancerListenerInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLoadBalancerListenerOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLoadBalancerListenersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteLoadBalancerListenersCommand(input, context);
    };
    DeleteLoadBalancerListenersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteLoadBalancerListenersCommand(output, context);
    };
    return DeleteLoadBalancerListenersCommand;
}($Command));
export { DeleteLoadBalancerListenersCommand };
//# sourceMappingURL=DeleteLoadBalancerListenersCommand.js.map