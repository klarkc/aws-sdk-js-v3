import { __extends } from "tslib";
import { DeleteQueueRequest, DeleteQueueResponse } from "../models/models_1";
import { deserializeAws_restJson1DeleteQueueCommand, serializeAws_restJson1DeleteQueueCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Permanently delete a queue you have created.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, DeleteQueueCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, DeleteQueueCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new DeleteQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteQueueCommandInput} for command's `input` shape.
 * @see {@link DeleteQueueCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteQueueCommand = /** @class */ (function (_super) {
    __extends(DeleteQueueCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteQueueCommand(input) {
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
    DeleteQueueCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConvertClient";
        var commandName = "DeleteQueueCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteQueueRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteQueueResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteQueueCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteQueueCommand(input, context);
    };
    DeleteQueueCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteQueueCommand(output, context);
    };
    return DeleteQueueCommand;
}($Command));
export { DeleteQueueCommand };
//# sourceMappingURL=DeleteQueueCommand.js.map