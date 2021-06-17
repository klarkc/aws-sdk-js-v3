import { __extends } from "tslib";
import { SetLoadBalancerListenerSSLCertificateInput, SetLoadBalancerListenerSSLCertificateOutput, } from "../models/models_0";
import { deserializeAws_querySetLoadBalancerListenerSSLCertificateCommand, serializeAws_querySetLoadBalancerListenerSSLCertificateCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the certificate that terminates the specified listener's SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port.</p>
 *
 *         <p>For more information about updating your SSL certificate, see
 *             <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-update-ssl-cert.html">Replace the SSL Certificate for Your Load Balancer</a>
 *                 in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, SetLoadBalancerListenerSSLCertificateCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, SetLoadBalancerListenerSSLCertificateCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new SetLoadBalancerListenerSSLCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetLoadBalancerListenerSSLCertificateCommandInput} for command's `input` shape.
 * @see {@link SetLoadBalancerListenerSSLCertificateCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetLoadBalancerListenerSSLCertificateCommand = /** @class */ (function (_super) {
    __extends(SetLoadBalancerListenerSSLCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetLoadBalancerListenerSSLCertificateCommand(input) {
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
    SetLoadBalancerListenerSSLCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "SetLoadBalancerListenerSSLCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetLoadBalancerListenerSSLCertificateInput.filterSensitiveLog,
            outputFilterSensitiveLog: SetLoadBalancerListenerSSLCertificateOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetLoadBalancerListenerSSLCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_querySetLoadBalancerListenerSSLCertificateCommand(input, context);
    };
    SetLoadBalancerListenerSSLCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_querySetLoadBalancerListenerSSLCertificateCommand(output, context);
    };
    return SetLoadBalancerListenerSSLCertificateCommand;
}($Command));
export { SetLoadBalancerListenerSSLCertificateCommand };
//# sourceMappingURL=SetLoadBalancerListenerSSLCertificateCommand.js.map