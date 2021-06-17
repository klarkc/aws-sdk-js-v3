import { __extends } from "tslib";
import { DeleteAccessPointInput, DeleteAccessPointOutput } from "../models/models_0";
import { deserializeAws_queryDeleteLoadBalancerCommand, serializeAws_queryDeleteLoadBalancerCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified load balancer.</p>
 *         <p>If you are attempting to recreate a load balancer, you must reconfigure all settings. The DNS name associated with a deleted load balancer are no longer usable. The name and associated DNS record of the deleted load balancer no longer exist and traffic sent to any of its IP addresses is no longer delivered to your instances.</p>
 *         <p>If the load balancer does not exist or has already been deleted, the call to
 *             <code>DeleteLoadBalancer</code> still succeeds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DeleteLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DeleteLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new DeleteLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link DeleteLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLoadBalancerCommand = /** @class */ (function (_super) {
    __extends(DeleteLoadBalancerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLoadBalancerCommand(input) {
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
    DeleteLoadBalancerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "DeleteLoadBalancerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAccessPointInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAccessPointOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLoadBalancerCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteLoadBalancerCommand(input, context);
    };
    DeleteLoadBalancerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteLoadBalancerCommand(output, context);
    };
    return DeleteLoadBalancerCommand;
}($Command));
export { DeleteLoadBalancerCommand };
//# sourceMappingURL=DeleteLoadBalancerCommand.js.map