import { __extends } from "tslib";
import { DescribeListenersInput, DescribeListenersOutput } from "../models/models_0";
import { deserializeAws_queryDescribeListenersCommand, serializeAws_queryDescribeListenersCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified listeners or the listeners for the specified Application Load
 *       Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load
 *       balancer or one or more listeners.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeListenersCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeListenersCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new DescribeListenersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeListenersCommandInput} for command's `input` shape.
 * @see {@link DescribeListenersCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeListenersCommand = /** @class */ (function (_super) {
    __extends(DescribeListenersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeListenersCommand(input) {
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
    DescribeListenersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "DescribeListenersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeListenersInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeListenersOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeListenersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeListenersCommand(input, context);
    };
    DescribeListenersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeListenersCommand(output, context);
    };
    return DescribeListenersCommand;
}($Command));
export { DescribeListenersCommand };
//# sourceMappingURL=DescribeListenersCommand.js.map