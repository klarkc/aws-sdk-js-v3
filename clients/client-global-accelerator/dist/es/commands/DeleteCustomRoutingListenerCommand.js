import { __extends } from "tslib";
import { DeleteCustomRoutingListenerRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteCustomRoutingListenerCommand, serializeAws_json1_1DeleteCustomRoutingListenerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete a listener for a custom routing accelerator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DeleteCustomRoutingListenerCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DeleteCustomRoutingListenerCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DeleteCustomRoutingListenerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomRoutingListenerCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomRoutingListenerCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCustomRoutingListenerCommand = /** @class */ (function (_super) {
    __extends(DeleteCustomRoutingListenerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCustomRoutingListenerCommand(input) {
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
    DeleteCustomRoutingListenerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "DeleteCustomRoutingListenerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCustomRoutingListenerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCustomRoutingListenerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteCustomRoutingListenerCommand(input, context);
    };
    DeleteCustomRoutingListenerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteCustomRoutingListenerCommand(output, context);
    };
    return DeleteCustomRoutingListenerCommand;
}($Command));
export { DeleteCustomRoutingListenerCommand };
//# sourceMappingURL=DeleteCustomRoutingListenerCommand.js.map