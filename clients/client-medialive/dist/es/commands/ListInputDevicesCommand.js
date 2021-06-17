import { __extends } from "tslib";
import { ListInputDevicesRequest, ListInputDevicesResponse } from "../models/models_1";
import { deserializeAws_restJson1ListInputDevicesCommand, serializeAws_restJson1ListInputDevicesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * List input devices
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListInputDevicesCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListInputDevicesCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new ListInputDevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInputDevicesCommandInput} for command's `input` shape.
 * @see {@link ListInputDevicesCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListInputDevicesCommand = /** @class */ (function (_super) {
    __extends(ListInputDevicesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListInputDevicesCommand(input) {
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
    ListInputDevicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "ListInputDevicesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListInputDevicesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListInputDevicesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListInputDevicesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListInputDevicesCommand(input, context);
    };
    ListInputDevicesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListInputDevicesCommand(output, context);
    };
    return ListInputDevicesCommand;
}($Command));
export { ListInputDevicesCommand };
//# sourceMappingURL=ListInputDevicesCommand.js.map