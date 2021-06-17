import { __extends } from "tslib";
import { DeleteMultiplexRequest, DeleteMultiplexResponse } from "../models/models_1";
import { deserializeAws_restJson1DeleteMultiplexCommand, serializeAws_restJson1DeleteMultiplexCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Delete a multiplex. The multiplex must be idle.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteMultiplexCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteMultiplexCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DeleteMultiplexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMultiplexCommandInput} for command's `input` shape.
 * @see {@link DeleteMultiplexCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMultiplexCommand = /** @class */ (function (_super) {
    __extends(DeleteMultiplexCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteMultiplexCommand(input) {
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
    DeleteMultiplexCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "DeleteMultiplexCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteMultiplexRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteMultiplexResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteMultiplexCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteMultiplexCommand(input, context);
    };
    DeleteMultiplexCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteMultiplexCommand(output, context);
    };
    return DeleteMultiplexCommand;
}($Command));
export { DeleteMultiplexCommand };
//# sourceMappingURL=DeleteMultiplexCommand.js.map