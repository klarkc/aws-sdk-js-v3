import { __extends } from "tslib";
import { RegisterTargetsInput, RegisterTargetsOutput } from "../models/models_0";
import { deserializeAws_queryRegisterTargetsCommand, serializeAws_queryRegisterTargetsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers the specified targets with the specified target group.</p>
 *
 *          <p>If the target is an EC2 instance, it must be in the <code>running</code> state when you
 *       register it.</p>
 *
 *          <p>By default, the load balancer routes requests to registered targets using the protocol and
 *       port for the target group. Alternatively, you can override the port for a target when you
 *       register it. You can register each EC2 instance or IP address with the same target group
 *       multiple times using different ports.</p>
 *
 *          <p>With a Network Load Balancer, you cannot register instances by instance ID if they have
 *       the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3,
 *       and T1. You can register instances of these types by IP address.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, RegisterTargetsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, RegisterTargetsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new RegisterTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterTargetsCommandInput} for command's `input` shape.
 * @see {@link RegisterTargetsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterTargetsCommand = /** @class */ (function (_super) {
    __extends(RegisterTargetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterTargetsCommand(input) {
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
    RegisterTargetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "RegisterTargetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterTargetsInput.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterTargetsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterTargetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRegisterTargetsCommand(input, context);
    };
    RegisterTargetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRegisterTargetsCommand(output, context);
    };
    return RegisterTargetsCommand;
}($Command));
export { RegisterTargetsCommand };
//# sourceMappingURL=RegisterTargetsCommand.js.map