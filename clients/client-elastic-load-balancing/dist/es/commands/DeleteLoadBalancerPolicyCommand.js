import { __extends } from "tslib";
import { DeleteLoadBalancerPolicyInput, DeleteLoadBalancerPolicyOutput } from "../models/models_0";
import { deserializeAws_queryDeleteLoadBalancerPolicyCommand, serializeAws_queryDeleteLoadBalancerPolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DeleteLoadBalancerPolicyCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DeleteLoadBalancerPolicyCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new DeleteLoadBalancerPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLoadBalancerPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteLoadBalancerPolicyCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLoadBalancerPolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteLoadBalancerPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLoadBalancerPolicyCommand(input) {
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
    DeleteLoadBalancerPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "DeleteLoadBalancerPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLoadBalancerPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLoadBalancerPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLoadBalancerPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteLoadBalancerPolicyCommand(input, context);
    };
    DeleteLoadBalancerPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteLoadBalancerPolicyCommand(output, context);
    };
    return DeleteLoadBalancerPolicyCommand;
}($Command));
export { DeleteLoadBalancerPolicyCommand };
//# sourceMappingURL=DeleteLoadBalancerPolicyCommand.js.map