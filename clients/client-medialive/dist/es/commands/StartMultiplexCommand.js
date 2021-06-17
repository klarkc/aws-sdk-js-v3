import { __extends } from "tslib";
import { StartMultiplexRequest, StartMultiplexResponse } from "../models/models_1";
import { deserializeAws_restJson1StartMultiplexCommand, serializeAws_restJson1StartMultiplexCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Start (run) the multiplex. Starting the multiplex does not start the channels. You must explicitly start each channel.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, StartMultiplexCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, StartMultiplexCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new StartMultiplexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMultiplexCommandInput} for command's `input` shape.
 * @see {@link StartMultiplexCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartMultiplexCommand = /** @class */ (function (_super) {
    __extends(StartMultiplexCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartMultiplexCommand(input) {
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
    StartMultiplexCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "StartMultiplexCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartMultiplexRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartMultiplexResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartMultiplexCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartMultiplexCommand(input, context);
    };
    StartMultiplexCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartMultiplexCommand(output, context);
    };
    return StartMultiplexCommand;
}($Command));
export { StartMultiplexCommand };
//# sourceMappingURL=StartMultiplexCommand.js.map