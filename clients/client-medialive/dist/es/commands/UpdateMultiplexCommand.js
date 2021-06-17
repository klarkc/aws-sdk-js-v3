import { __extends } from "tslib";
import { UpdateMultiplexRequest, UpdateMultiplexResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateMultiplexCommand, serializeAws_restJson1UpdateMultiplexCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Updates a multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateMultiplexCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateMultiplexCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new UpdateMultiplexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMultiplexCommandInput} for command's `input` shape.
 * @see {@link UpdateMultiplexCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMultiplexCommand = /** @class */ (function (_super) {
    __extends(UpdateMultiplexCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateMultiplexCommand(input) {
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
    UpdateMultiplexCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "UpdateMultiplexCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMultiplexRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateMultiplexResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMultiplexCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateMultiplexCommand(input, context);
    };
    UpdateMultiplexCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateMultiplexCommand(output, context);
    };
    return UpdateMultiplexCommand;
}($Command));
export { UpdateMultiplexCommand };
//# sourceMappingURL=UpdateMultiplexCommand.js.map