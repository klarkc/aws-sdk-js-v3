import { __extends } from "tslib";
import { GetLoadBalancerTlsCertificatesRequest, GetLoadBalancerTlsCertificatesResult } from "../models/models_1";
import { deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommand, serializeAws_json1_1GetLoadBalancerTlsCertificatesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the TLS certificates that are associated with the specified
 *       Lightsail load balancer.</p>
 *          <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
 *          <p>You can have a maximum of 2 certificates associated with a Lightsail load balancer. One
 *       is active and the other is inactive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetLoadBalancerTlsCertificatesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetLoadBalancerTlsCertificatesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetLoadBalancerTlsCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLoadBalancerTlsCertificatesCommandInput} for command's `input` shape.
 * @see {@link GetLoadBalancerTlsCertificatesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLoadBalancerTlsCertificatesCommand = /** @class */ (function (_super) {
    __extends(GetLoadBalancerTlsCertificatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLoadBalancerTlsCertificatesCommand(input) {
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
    GetLoadBalancerTlsCertificatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetLoadBalancerTlsCertificatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLoadBalancerTlsCertificatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLoadBalancerTlsCertificatesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLoadBalancerTlsCertificatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetLoadBalancerTlsCertificatesCommand(input, context);
    };
    GetLoadBalancerTlsCertificatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommand(output, context);
    };
    return GetLoadBalancerTlsCertificatesCommand;
}($Command));
export { GetLoadBalancerTlsCertificatesCommand };
//# sourceMappingURL=GetLoadBalancerTlsCertificatesCommand.js.map