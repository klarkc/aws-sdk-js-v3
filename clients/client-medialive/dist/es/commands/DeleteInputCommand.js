import { __extends } from "tslib";
import { DeleteInputRequest, DeleteInputResponse } from "../models/models_1";
import { deserializeAws_restJson1DeleteInputCommand, serializeAws_restJson1DeleteInputCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Deletes the input end point
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteInputCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteInputCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DeleteInputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInputCommandInput} for command's `input` shape.
 * @see {@link DeleteInputCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteInputCommand = /** @class */ (function (_super) {
    __extends(DeleteInputCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteInputCommand(input) {
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
    DeleteInputCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "DeleteInputCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteInputRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteInputResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteInputCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteInputCommand(input, context);
    };
    DeleteInputCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteInputCommand(output, context);
    };
    return DeleteInputCommand;
}($Command));
export { DeleteInputCommand };
//# sourceMappingURL=DeleteInputCommand.js.map