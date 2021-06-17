import { __extends } from "tslib";
import { GetLoadBalancersRequest, GetLoadBalancersResult } from "../models/models_1";
import { deserializeAws_json1_1GetLoadBalancersCommand, serializeAws_json1_1GetLoadBalancersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about all load balancers in an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetLoadBalancersCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetLoadBalancersCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetLoadBalancersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLoadBalancersCommandInput} for command's `input` shape.
 * @see {@link GetLoadBalancersCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLoadBalancersCommand = /** @class */ (function (_super) {
    __extends(GetLoadBalancersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLoadBalancersCommand(input) {
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
    GetLoadBalancersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetLoadBalancersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLoadBalancersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLoadBalancersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLoadBalancersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetLoadBalancersCommand(input, context);
    };
    GetLoadBalancersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetLoadBalancersCommand(output, context);
    };
    return GetLoadBalancersCommand;
}($Command));
export { GetLoadBalancersCommand };
//# sourceMappingURL=GetLoadBalancersCommand.js.map