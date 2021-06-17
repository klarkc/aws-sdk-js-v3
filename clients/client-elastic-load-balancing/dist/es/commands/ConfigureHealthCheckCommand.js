import { __extends } from "tslib";
import { ConfigureHealthCheckInput, ConfigureHealthCheckOutput } from "../models/models_0";
import { deserializeAws_queryConfigureHealthCheckCommand, serializeAws_queryConfigureHealthCheckCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Specifies the health check settings to use when evaluating the health state of your EC2 instances.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html">Configure Health Checks for Your Load Balancer</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, ConfigureHealthCheckCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, ConfigureHealthCheckCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new ConfigureHealthCheckCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfigureHealthCheckCommandInput} for command's `input` shape.
 * @see {@link ConfigureHealthCheckCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ConfigureHealthCheckCommand = /** @class */ (function (_super) {
    __extends(ConfigureHealthCheckCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ConfigureHealthCheckCommand(input) {
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
    ConfigureHealthCheckCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "ConfigureHealthCheckCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ConfigureHealthCheckInput.filterSensitiveLog,
            outputFilterSensitiveLog: ConfigureHealthCheckOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ConfigureHealthCheckCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryConfigureHealthCheckCommand(input, context);
    };
    ConfigureHealthCheckCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryConfigureHealthCheckCommand(output, context);
    };
    return ConfigureHealthCheckCommand;
}($Command));
export { ConfigureHealthCheckCommand };
//# sourceMappingURL=ConfigureHealthCheckCommand.js.map