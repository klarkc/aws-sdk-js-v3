import { __extends } from "tslib";
import { DeleteScheduleRequest, DeleteScheduleResponse } from "../models/models_1";
import { deserializeAws_restJson1DeleteScheduleCommand, serializeAws_restJson1DeleteScheduleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Delete all schedule actions on a channel.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteScheduleCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteScheduleCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DeleteScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteScheduleCommandInput} for command's `input` shape.
 * @see {@link DeleteScheduleCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteScheduleCommand = /** @class */ (function (_super) {
    __extends(DeleteScheduleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteScheduleCommand(input) {
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
    DeleteScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "DeleteScheduleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteScheduleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteScheduleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteScheduleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteScheduleCommand(input, context);
    };
    DeleteScheduleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteScheduleCommand(output, context);
    };
    return DeleteScheduleCommand;
}($Command));
export { DeleteScheduleCommand };
//# sourceMappingURL=DeleteScheduleCommand.js.map