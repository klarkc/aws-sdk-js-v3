import { __extends } from "tslib";
import { UpdateMultiplexProgramRequest, UpdateMultiplexProgramResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateMultiplexProgramCommand, serializeAws_restJson1UpdateMultiplexProgramCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Update a program in a multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateMultiplexProgramCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateMultiplexProgramCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new UpdateMultiplexProgramCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMultiplexProgramCommandInput} for command's `input` shape.
 * @see {@link UpdateMultiplexProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMultiplexProgramCommand = /** @class */ (function (_super) {
    __extends(UpdateMultiplexProgramCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateMultiplexProgramCommand(input) {
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
    UpdateMultiplexProgramCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "UpdateMultiplexProgramCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMultiplexProgramRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateMultiplexProgramResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMultiplexProgramCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateMultiplexProgramCommand(input, context);
    };
    UpdateMultiplexProgramCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateMultiplexProgramCommand(output, context);
    };
    return UpdateMultiplexProgramCommand;
}($Command));
export { UpdateMultiplexProgramCommand };
//# sourceMappingURL=UpdateMultiplexProgramCommand.js.map