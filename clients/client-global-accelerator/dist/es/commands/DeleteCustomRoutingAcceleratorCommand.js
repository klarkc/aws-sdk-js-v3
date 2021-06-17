import { __extends } from "tslib";
import { DeleteCustomRoutingAcceleratorRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteCustomRoutingAcceleratorCommand, serializeAws_json1_1DeleteCustomRoutingAcceleratorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete a custom routing accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources
 * 		(listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p>
 * 	        <important>
 *             <p>When you create a custom routing accelerator, by default, Global Accelerator provides you with a set of two static IP addresses.
 * 	</p>
 * 		          <p>The IP
 * 			addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and
 * 			it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the
 * 			static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them.
 * 			As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You
 * 			can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information,
 * 			see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Authentication and Access Control</a> in
 * 			the <i>AWS Global Accelerator Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DeleteCustomRoutingAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DeleteCustomRoutingAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DeleteCustomRoutingAcceleratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomRoutingAcceleratorCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomRoutingAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCustomRoutingAcceleratorCommand = /** @class */ (function (_super) {
    __extends(DeleteCustomRoutingAcceleratorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCustomRoutingAcceleratorCommand(input) {
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
    DeleteCustomRoutingAcceleratorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "DeleteCustomRoutingAcceleratorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCustomRoutingAcceleratorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCustomRoutingAcceleratorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteCustomRoutingAcceleratorCommand(input, context);
    };
    DeleteCustomRoutingAcceleratorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteCustomRoutingAcceleratorCommand(output, context);
    };
    return DeleteCustomRoutingAcceleratorCommand;
}($Command));
export { DeleteCustomRoutingAcceleratorCommand };
//# sourceMappingURL=DeleteCustomRoutingAcceleratorCommand.js.map