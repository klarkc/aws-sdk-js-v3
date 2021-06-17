import { __extends } from "tslib";
import { GetPresetRequest, GetPresetResponse } from "../models/models_1";
import { deserializeAws_restJson1GetPresetCommand, serializeAws_restJson1GetPresetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieve the JSON for a specific preset.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, GetPresetCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, GetPresetCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new GetPresetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPresetCommandInput} for command's `input` shape.
 * @see {@link GetPresetCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPresetCommand = /** @class */ (function (_super) {
    __extends(GetPresetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPresetCommand(input) {
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
    GetPresetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConvertClient";
        var commandName = "GetPresetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPresetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPresetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPresetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetPresetCommand(input, context);
    };
    GetPresetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetPresetCommand(output, context);
    };
    return GetPresetCommand;
}($Command));
export { GetPresetCommand };
//# sourceMappingURL=GetPresetCommand.js.map