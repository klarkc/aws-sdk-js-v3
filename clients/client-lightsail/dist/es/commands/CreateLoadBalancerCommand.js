import { __extends } from "tslib";
import { CreateLoadBalancerRequest, CreateLoadBalancerResult } from "../models/models_0";
import { deserializeAws_json1_1CreateLoadBalancerCommand, serializeAws_json1_1CreateLoadBalancerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Lightsail load balancer. To learn more about deciding whether to load balance
 *       your application, see <a href="https://lightsail.aws.amazon.com/ls/docs/how-to/article/configure-lightsail-instances-for-load-balancing">Configure your Lightsail instances for load balancing</a>. You can create up to 5
 *       load balancers per AWS Region in your account.</p>
 *          <p>When you create a load balancer, you can specify a unique name and port settings. To
 *       change additional load balancer settings, use the <code>UpdateLoadBalancerAttribute</code>
 *       operation.</p>
 *          <p>The <code>create load balancer</code> operation supports tag-based access control via
 *       request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateLoadBalancerCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateLoadBalancerCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link CreateLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLoadBalancerCommand = /** @class */ (function (_super) {
    __extends(CreateLoadBalancerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLoadBalancerCommand(input) {
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
    CreateLoadBalancerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "CreateLoadBalancerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLoadBalancerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLoadBalancerResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLoadBalancerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateLoadBalancerCommand(input, context);
    };
    CreateLoadBalancerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateLoadBalancerCommand(output, context);
    };
    return CreateLoadBalancerCommand;
}($Command));
export { CreateLoadBalancerCommand };
//# sourceMappingURL=CreateLoadBalancerCommand.js.map