import { __extends } from "tslib";
import { DeleteLoadBalancerInput, DeleteLoadBalancerOutput } from "../models/models_0";
import { deserializeAws_queryDeleteLoadBalancerCommand, serializeAws_queryDeleteLoadBalancerCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load
 *       Balancer. Deleting a load balancer also deletes its listeners.</p>
 *          <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer
 *       does not exist or has already been deleted, the call succeeds.</p>
 *          <p>Deleting a load balancer does not affect its registered targets. For example, your EC2
 *       instances continue to run and are still registered to their target groups. If you no longer
 *       need these EC2 instances, you can stop or terminate them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DeleteLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DeleteLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new DeleteLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link DeleteLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "DeleteLoadBalancerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLoadBalancerInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLoadBalancerOutput.filterSensitiveLog,
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