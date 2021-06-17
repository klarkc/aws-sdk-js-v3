import { __extends } from "tslib";
import { CreateLoadBalancerTlsCertificateRequest, CreateLoadBalancerTlsCertificateResult } from "../models/models_0";
import { deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommand, serializeAws_json1_1CreateLoadBalancerTlsCertificateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an SSL/TLS certificate for an Amazon Lightsail load balancer.</p>
 *          <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
 *          <p>The <code>CreateLoadBalancerTlsCertificate</code> operation supports tag-based access
 *       control via resource tags applied to the resource identified by <code>load balancer
 *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateLoadBalancerTlsCertificateCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateLoadBalancerTlsCertificateCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateLoadBalancerTlsCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLoadBalancerTlsCertificateCommandInput} for command's `input` shape.
 * @see {@link CreateLoadBalancerTlsCertificateCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLoadBalancerTlsCertificateCommand = /** @class */ (function (_super) {
    __extends(CreateLoadBalancerTlsCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLoadBalancerTlsCertificateCommand(input) {
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
    CreateLoadBalancerTlsCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "CreateLoadBalancerTlsCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLoadBalancerTlsCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLoadBalancerTlsCertificateResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLoadBalancerTlsCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateLoadBalancerTlsCertificateCommand(input, context);
    };
    CreateLoadBalancerTlsCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommand(output, context);
    };
    return CreateLoadBalancerTlsCertificateCommand;
}($Command));
export { CreateLoadBalancerTlsCertificateCommand };
//# sourceMappingURL=CreateLoadBalancerTlsCertificateCommand.js.map