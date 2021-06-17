import { __extends } from "tslib";
import { DescribeListenerCertificatesInput, DescribeListenerCertificatesOutput } from "../models/models_0";
import { deserializeAws_queryDescribeListenerCertificatesCommand, serializeAws_queryDescribeListenerCertificatesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the default certificate and the certificate list for the specified HTTPS or TLS
 *       listener.</p>
 *          <p>If the default certificate is also in the certificate list, it appears twice in the
 *       results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set
 *       to false).</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or
 *         <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers
 *       Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeListenerCertificatesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeListenerCertificatesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new DescribeListenerCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeListenerCertificatesCommandInput} for command's `input` shape.
 * @see {@link DescribeListenerCertificatesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeListenerCertificatesCommand = /** @class */ (function (_super) {
    __extends(DescribeListenerCertificatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeListenerCertificatesCommand(input) {
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
    DescribeListenerCertificatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "DescribeListenerCertificatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeListenerCertificatesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeListenerCertificatesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeListenerCertificatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeListenerCertificatesCommand(input, context);
    };
    DescribeListenerCertificatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeListenerCertificatesCommand(output, context);
    };
    return DescribeListenerCertificatesCommand;
}($Command));
export { DescribeListenerCertificatesCommand };
//# sourceMappingURL=DescribeListenerCertificatesCommand.js.map