import { __extends } from "tslib";
import { StartChannelRequest, StartChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1StartChannelCommand, serializeAws_restJson1StartChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a specific channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, StartChannelCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, StartChannelCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new StartChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartChannelCommandInput} for command's `input` shape.
 * @see {@link StartChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartChannelCommand = /** @class */ (function (_super) {
    __extends(StartChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartChannelCommand(input) {
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
    StartChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaTailorClient";
        var commandName = "StartChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartChannelCommand(input, context);
    };
    StartChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartChannelCommand(output, context);
    };
    return StartChannelCommand;
}($Command));
export { StartChannelCommand };
//# sourceMappingURL=StartChannelCommand.js.map