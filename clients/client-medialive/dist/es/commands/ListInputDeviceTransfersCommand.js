import { __extends } from "tslib";
import { ListInputDeviceTransfersRequest, ListInputDeviceTransfersResponse } from "../models/models_1";
import { deserializeAws_restJson1ListInputDeviceTransfersCommand, serializeAws_restJson1ListInputDeviceTransfersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * List input devices that are currently being transferred. List input devices that you are transferring from your AWS account or input devices that another AWS account is transferring to you.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListInputDeviceTransfersCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListInputDeviceTransfersCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new ListInputDeviceTransfersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInputDeviceTransfersCommandInput} for command's `input` shape.
 * @see {@link ListInputDeviceTransfersCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListInputDeviceTransfersCommand = /** @class */ (function (_super) {
    __extends(ListInputDeviceTransfersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListInputDeviceTransfersCommand(input) {
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
    ListInputDeviceTransfersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "ListInputDeviceTransfersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListInputDeviceTransfersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListInputDeviceTransfersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListInputDeviceTransfersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListInputDeviceTransfersCommand(input, context);
    };
    ListInputDeviceTransfersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListInputDeviceTransfersCommand(output, context);
    };
    return ListInputDeviceTransfersCommand;
}($Command));
export { ListInputDeviceTransfersCommand };
//# sourceMappingURL=ListInputDeviceTransfersCommand.js.map