import { __extends } from "tslib";
import { DeletePlaybackConfigurationRequest, DeletePlaybackConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1DeletePlaybackConfigurationCommand, serializeAws_restJson1DeletePlaybackConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the playback configuration for the specified name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DeletePlaybackConfigurationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DeletePlaybackConfigurationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new DeletePlaybackConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePlaybackConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeletePlaybackConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePlaybackConfigurationCommand = /** @class */ (function (_super) {
    __extends(DeletePlaybackConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePlaybackConfigurationCommand(input) {
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
    DeletePlaybackConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaTailorClient";
        var commandName = "DeletePlaybackConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePlaybackConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePlaybackConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePlaybackConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeletePlaybackConfigurationCommand(input, context);
    };
    DeletePlaybackConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeletePlaybackConfigurationCommand(output, context);
    };
    return DeletePlaybackConfigurationCommand;
}($Command));
export { DeletePlaybackConfigurationCommand };
//# sourceMappingURL=DeletePlaybackConfigurationCommand.js.map