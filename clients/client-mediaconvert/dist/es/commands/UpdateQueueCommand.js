import { __extends } from "tslib";
import { UpdateQueueRequest, UpdateQueueResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateQueueCommand, serializeAws_restJson1UpdateQueueCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Modify one of your existing queues.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, UpdateQueueCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, UpdateQueueCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new UpdateQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateQueueCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateQueueCommand = /** @class */ (function (_super) {
    __extends(UpdateQueueCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateQueueCommand(input) {
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
    UpdateQueueCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConvertClient";
        var commandName = "UpdateQueueCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateQueueRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateQueueResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateQueueCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateQueueCommand(input, context);
    };
    UpdateQueueCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateQueueCommand(output, context);
    };
    return UpdateQueueCommand;
}($Command));
export { UpdateQueueCommand };
//# sourceMappingURL=UpdateQueueCommand.js.map