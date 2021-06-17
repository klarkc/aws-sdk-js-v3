import { __extends } from "tslib";
import { DeleteMultiplexProgramRequest, DeleteMultiplexProgramResponse } from "../models/models_1";
import { deserializeAws_restJson1DeleteMultiplexProgramCommand, serializeAws_restJson1DeleteMultiplexProgramCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Delete a program from a multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteMultiplexProgramCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteMultiplexProgramCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DeleteMultiplexProgramCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMultiplexProgramCommandInput} for command's `input` shape.
 * @see {@link DeleteMultiplexProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMultiplexProgramCommand = /** @class */ (function (_super) {
    __extends(DeleteMultiplexProgramCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteMultiplexProgramCommand(input) {
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
    DeleteMultiplexProgramCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "DeleteMultiplexProgramCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteMultiplexProgramRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteMultiplexProgramResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteMultiplexProgramCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteMultiplexProgramCommand(input, context);
    };
    DeleteMultiplexProgramCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteMultiplexProgramCommand(output, context);
    };
    return DeleteMultiplexProgramCommand;
}($Command));
export { DeleteMultiplexProgramCommand };
//# sourceMappingURL=DeleteMultiplexProgramCommand.js.map