import { __extends } from "tslib";
import { UpdateListenerRequest, UpdateListenerResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateListenerCommand, serializeAws_json1_1UpdateListenerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update a listener. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateListenerCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateListenerCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new UpdateListenerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateListenerCommandInput} for command's `input` shape.
 * @see {@link UpdateListenerCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateListenerCommand = /** @class */ (function (_super) {
    __extends(UpdateListenerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateListenerCommand(input) {
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
    UpdateListenerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "UpdateListenerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateListenerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateListenerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateListenerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateListenerCommand(input, context);
    };
    UpdateListenerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateListenerCommand(output, context);
    };
    return UpdateListenerCommand;
}($Command));
export { UpdateListenerCommand };
//# sourceMappingURL=UpdateListenerCommand.js.map