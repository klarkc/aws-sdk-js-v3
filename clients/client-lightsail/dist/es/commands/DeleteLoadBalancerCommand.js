import { __extends } from "tslib";
import { DeleteLoadBalancerRequest, DeleteLoadBalancerResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteLoadBalancerCommand, serializeAws_json1_1DeleteLoadBalancerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the
 *       load balancer is deleted, you will need to create a new load balancer, create a new
 *       certificate, and verify domain ownership again.</p>
 *          <p>The <code>delete load balancer</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by <code>load balancer name</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteLoadBalancerCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteLoadBalancerCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link DeleteLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLoadBalancerCommand = /** @class */ (function (_super) {
    __extends(DeleteLoadBalancerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLoadBalancerCommand(input) {
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
    DeleteLoadBalancerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "DeleteLoadBalancerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLoadBalancerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLoadBalancerResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLoadBalancerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteLoadBalancerCommand(input, context);
    };
    DeleteLoadBalancerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteLoadBalancerCommand(output, context);
    };
    return DeleteLoadBalancerCommand;
}($Command));
export { DeleteLoadBalancerCommand };
//# sourceMappingURL=DeleteLoadBalancerCommand.js.map