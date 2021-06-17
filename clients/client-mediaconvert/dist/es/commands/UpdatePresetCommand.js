import { __extends } from "tslib";
import { UpdatePresetRequest, UpdatePresetResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdatePresetCommand, serializeAws_restJson1UpdatePresetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Modify one of your existing presets.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, UpdatePresetCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, UpdatePresetCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new UpdatePresetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePresetCommandInput} for command's `input` shape.
 * @see {@link UpdatePresetCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePresetCommand = /** @class */ (function (_super) {
    __extends(UpdatePresetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePresetCommand(input) {
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
    UpdatePresetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConvertClient";
        var commandName = "UpdatePresetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePresetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePresetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePresetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdatePresetCommand(input, context);
    };
    UpdatePresetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdatePresetCommand(output, context);
    };
    return UpdatePresetCommand;
}($Command));
export { UpdatePresetCommand };
//# sourceMappingURL=UpdatePresetCommand.js.map