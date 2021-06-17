import { __extends } from "tslib";
import { DeleteListenerInput, DeleteListenerOutput } from "../models/models_0";
import { deserializeAws_queryDeleteListenerCommand, serializeAws_queryDeleteListenerCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified listener.</p>
 *          <p>Alternatively, your listener is deleted when you delete the load balancer to which it is
 *         attached.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DeleteListenerCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DeleteListenerCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new DeleteListenerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteListenerCommandInput} for command's `input` shape.
 * @see {@link DeleteListenerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteListenerCommand = /** @class */ (function (_super) {
    __extends(DeleteListenerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteListenerCommand(input) {
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
    DeleteListenerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "DeleteListenerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteListenerInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteListenerOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteListenerCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteListenerCommand(input, context);
    };
    DeleteListenerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteListenerCommand(output, context);
    };
    return DeleteListenerCommand;
}($Command));
export { DeleteListenerCommand };
//# sourceMappingURL=DeleteListenerCommand.js.map