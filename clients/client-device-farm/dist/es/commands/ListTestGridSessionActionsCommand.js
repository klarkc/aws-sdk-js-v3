import { __extends } from "tslib";
import { ListTestGridSessionActionsRequest, ListTestGridSessionActionsResult } from "../models/models_0";
import { deserializeAws_json1_1ListTestGridSessionActionsCommand, serializeAws_json1_1ListTestGridSessionActionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the actions taken in a <a>TestGridSession</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListTestGridSessionActionsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListTestGridSessionActionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListTestGridSessionActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTestGridSessionActionsCommandInput} for command's `input` shape.
 * @see {@link ListTestGridSessionActionsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTestGridSessionActionsCommand = /** @class */ (function (_super) {
    __extends(ListTestGridSessionActionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTestGridSessionActionsCommand(input) {
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
    ListTestGridSessionActionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "ListTestGridSessionActionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTestGridSessionActionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTestGridSessionActionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTestGridSessionActionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTestGridSessionActionsCommand(input, context);
    };
    ListTestGridSessionActionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTestGridSessionActionsCommand(output, context);
    };
    return ListTestGridSessionActionsCommand;
}($Command));
export { ListTestGridSessionActionsCommand };
//# sourceMappingURL=ListTestGridSessionActionsCommand.js.map