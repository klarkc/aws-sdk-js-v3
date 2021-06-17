import { __extends } from "tslib";
import { UpdateCustomRoutingListenerRequest, UpdateCustomRoutingListenerResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateCustomRoutingListenerCommand, serializeAws_json1_1UpdateCustomRoutingListenerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update a listener for a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateCustomRoutingListenerCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateCustomRoutingListenerCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new UpdateCustomRoutingListenerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCustomRoutingListenerCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomRoutingListenerCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateCustomRoutingListenerCommand = /** @class */ (function (_super) {
    __extends(UpdateCustomRoutingListenerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateCustomRoutingListenerCommand(input) {
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
    UpdateCustomRoutingListenerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "UpdateCustomRoutingListenerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateCustomRoutingListenerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateCustomRoutingListenerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateCustomRoutingListenerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateCustomRoutingListenerCommand(input, context);
    };
    UpdateCustomRoutingListenerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateCustomRoutingListenerCommand(output, context);
    };
    return UpdateCustomRoutingListenerCommand;
}($Command));
export { UpdateCustomRoutingListenerCommand };
//# sourceMappingURL=UpdateCustomRoutingListenerCommand.js.map