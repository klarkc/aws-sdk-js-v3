import { __extends } from "tslib";
import { GetPlaybackConfigurationRequest, GetPlaybackConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1GetPlaybackConfigurationCommand, serializeAws_restJson1GetPlaybackConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the playback configuration for the specified name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, GetPlaybackConfigurationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, GetPlaybackConfigurationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new GetPlaybackConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPlaybackConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetPlaybackConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPlaybackConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetPlaybackConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPlaybackConfigurationCommand(input) {
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
    GetPlaybackConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaTailorClient";
        var commandName = "GetPlaybackConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPlaybackConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPlaybackConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPlaybackConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetPlaybackConfigurationCommand(input, context);
    };
    GetPlaybackConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetPlaybackConfigurationCommand(output, context);
    };
    return GetPlaybackConfigurationCommand;
}($Command));
export { GetPlaybackConfigurationCommand };
//# sourceMappingURL=GetPlaybackConfigurationCommand.js.map