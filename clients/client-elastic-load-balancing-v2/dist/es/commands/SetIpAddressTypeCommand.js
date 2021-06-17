import { __extends } from "tslib";
import { SetIpAddressTypeInput, SetIpAddressTypeOutput } from "../models/models_0";
import { deserializeAws_querySetIpAddressTypeCommand, serializeAws_querySetIpAddressTypeCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the type of IP addresses used by the subnets of the specified Application Load
 *       Balancer or Network Load Balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, SetIpAddressTypeCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, SetIpAddressTypeCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new SetIpAddressTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetIpAddressTypeCommandInput} for command's `input` shape.
 * @see {@link SetIpAddressTypeCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetIpAddressTypeCommand = /** @class */ (function (_super) {
    __extends(SetIpAddressTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetIpAddressTypeCommand(input) {
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
    SetIpAddressTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "SetIpAddressTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetIpAddressTypeInput.filterSensitiveLog,
            outputFilterSensitiveLog: SetIpAddressTypeOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetIpAddressTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_querySetIpAddressTypeCommand(input, context);
    };
    SetIpAddressTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_querySetIpAddressTypeCommand(output, context);
    };
    return SetIpAddressTypeCommand;
}($Command));
export { SetIpAddressTypeCommand };
//# sourceMappingURL=SetIpAddressTypeCommand.js.map