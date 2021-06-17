import { __extends } from "tslib";
import { AddListenerCertificatesInput, AddListenerCertificatesOutput } from "../models/models_0";
import { deserializeAws_queryAddListenerCertificatesCommand, serializeAws_queryAddListenerCertificatesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds the specified SSL server certificate to the certificate list for the specified HTTPS
 *       or TLS listener.</p>
 *          <p>If the certificate in already in the certificate list, the call is successful but the
 *       certificate is not added again.</p>
 *
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html">HTTPS
 *         listeners</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html">TLS
 *         listeners</a> in the <i>Network Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, AddListenerCertificatesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, AddListenerCertificatesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new AddListenerCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddListenerCertificatesCommandInput} for command's `input` shape.
 * @see {@link AddListenerCertificatesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddListenerCertificatesCommand = /** @class */ (function (_super) {
    __extends(AddListenerCertificatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddListenerCertificatesCommand(input) {
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
    AddListenerCertificatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "AddListenerCertificatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddListenerCertificatesInput.filterSensitiveLog,
            outputFilterSensitiveLog: AddListenerCertificatesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddListenerCertificatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryAddListenerCertificatesCommand(input, context);
    };
    AddListenerCertificatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryAddListenerCertificatesCommand(output, context);
    };
    return AddListenerCertificatesCommand;
}($Command));
export { AddListenerCertificatesCommand };
//# sourceMappingURL=AddListenerCertificatesCommand.js.map