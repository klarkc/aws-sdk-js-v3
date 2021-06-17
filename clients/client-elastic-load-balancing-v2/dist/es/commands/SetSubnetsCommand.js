import { __extends } from "tslib";
import { SetSubnetsInput, SetSubnetsOutput } from "../models/models_0";
import { deserializeAws_querySetSubnetsCommand, serializeAws_querySetSubnetsCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the Availability Zones for the specified public subnets for the specified
 *       Application Load Balancer or Network Load Balancer. The specified subnets replace the
 *       previously enabled subnets.</p>
 *          <p>When you specify subnets for a Network Load Balancer, you must include all subnets that
 *       were enabled previously, with their existing configurations, plus any additional
 *       subnets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, SetSubnetsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, SetSubnetsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new SetSubnetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetSubnetsCommandInput} for command's `input` shape.
 * @see {@link SetSubnetsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetSubnetsCommand = /** @class */ (function (_super) {
    __extends(SetSubnetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetSubnetsCommand(input) {
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
    SetSubnetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "SetSubnetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetSubnetsInput.filterSensitiveLog,
            outputFilterSensitiveLog: SetSubnetsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetSubnetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_querySetSubnetsCommand(input, context);
    };
    SetSubnetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_querySetSubnetsCommand(output, context);
    };
    return SetSubnetsCommand;
}($Command));
export { SetSubnetsCommand };
//# sourceMappingURL=SetSubnetsCommand.js.map