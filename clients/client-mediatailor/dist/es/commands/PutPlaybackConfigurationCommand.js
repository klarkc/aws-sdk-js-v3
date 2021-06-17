import { __extends } from "tslib";
import { PutPlaybackConfigurationRequest, PutPlaybackConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1PutPlaybackConfigurationCommand, serializeAws_restJson1PutPlaybackConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a new playback configuration to AWS Elemental MediaTailor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, PutPlaybackConfigurationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, PutPlaybackConfigurationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new PutPlaybackConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPlaybackConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutPlaybackConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutPlaybackConfigurationCommand = /** @class */ (function (_super) {
    __extends(PutPlaybackConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutPlaybackConfigurationCommand(input) {
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
    PutPlaybackConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaTailorClient";
        var commandName = "PutPlaybackConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutPlaybackConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutPlaybackConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutPlaybackConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutPlaybackConfigurationCommand(input, context);
    };
    PutPlaybackConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutPlaybackConfigurationCommand(output, context);
    };
    return PutPlaybackConfigurationCommand;
}($Command));
export { PutPlaybackConfigurationCommand };
//# sourceMappingURL=PutPlaybackConfigurationCommand.js.map