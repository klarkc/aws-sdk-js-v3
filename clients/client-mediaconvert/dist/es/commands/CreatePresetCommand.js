import { __extends } from "tslib";
import { CreatePresetRequest, CreatePresetResponse } from "../models/models_1";
import { deserializeAws_restJson1CreatePresetCommand, serializeAws_restJson1CreatePresetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Create a new preset. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, CreatePresetCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, CreatePresetCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new CreatePresetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePresetCommandInput} for command's `input` shape.
 * @see {@link CreatePresetCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePresetCommand = /** @class */ (function (_super) {
    __extends(CreatePresetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePresetCommand(input) {
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
    CreatePresetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConvertClient";
        var commandName = "CreatePresetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePresetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePresetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePresetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreatePresetCommand(input, context);
    };
    CreatePresetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreatePresetCommand(output, context);
    };
    return CreatePresetCommand;
}($Command));
export { CreatePresetCommand };
//# sourceMappingURL=CreatePresetCommand.js.map