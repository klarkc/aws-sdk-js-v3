import { __extends } from "tslib";
import { DeleteLoadBalancerTlsCertificateRequest, DeleteLoadBalancerTlsCertificateResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand, serializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an SSL/TLS certificate associated with a Lightsail load balancer.</p>
 *          <p>The <code>DeleteLoadBalancerTlsCertificate</code> operation supports tag-based access
 *       control via resource tags applied to the resource identified by <code>load balancer
 *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteLoadBalancerTlsCertificateCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteLoadBalancerTlsCertificateCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteLoadBalancerTlsCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLoadBalancerTlsCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteLoadBalancerTlsCertificateCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLoadBalancerTlsCertificateCommand = /** @class */ (function (_super) {
    __extends(DeleteLoadBalancerTlsCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLoadBalancerTlsCertificateCommand(input) {
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
    DeleteLoadBalancerTlsCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "DeleteLoadBalancerTlsCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLoadBalancerTlsCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLoadBalancerTlsCertificateResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLoadBalancerTlsCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand(input, context);
    };
    DeleteLoadBalancerTlsCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand(output, context);
    };
    return DeleteLoadBalancerTlsCertificateCommand;
}($Command));
export { DeleteLoadBalancerTlsCertificateCommand };
//# sourceMappingURL=DeleteLoadBalancerTlsCertificateCommand.js.map