import { __extends } from "tslib";
import { GetLoadBalancerRequest, GetLoadBalancerResult } from "../models/models_1";
import { deserializeAws_json1_1GetLoadBalancerCommand, serializeAws_json1_1GetLoadBalancerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the specified Lightsail load balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetLoadBalancerCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetLoadBalancerCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link GetLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLoadBalancerCommand = /** @class */ (function (_super) {
    __extends(GetLoadBalancerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLoadBalancerCommand(input) {
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
    GetLoadBalancerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetLoadBalancerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLoadBalancerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLoadBalancerResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLoadBalancerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetLoadBalancerCommand(input, context);
    };
    GetLoadBalancerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetLoadBalancerCommand(output, context);
    };
    return GetLoadBalancerCommand;
}($Command));
export { GetLoadBalancerCommand };
//# sourceMappingURL=GetLoadBalancerCommand.js.map