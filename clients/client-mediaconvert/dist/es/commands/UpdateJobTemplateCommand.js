import { __extends } from "tslib";
import { UpdateJobTemplateRequest, UpdateJobTemplateResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateJobTemplateCommand, serializeAws_restJson1UpdateJobTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Modify one of your existing job templates.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, UpdateJobTemplateCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, UpdateJobTemplateCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new UpdateJobTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateJobTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateJobTemplateCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateJobTemplateCommand = /** @class */ (function (_super) {
    __extends(UpdateJobTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateJobTemplateCommand(input) {
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
    UpdateJobTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConvertClient";
        var commandName = "UpdateJobTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateJobTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateJobTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateJobTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateJobTemplateCommand(input, context);
    };
    UpdateJobTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateJobTemplateCommand(output, context);
    };
    return UpdateJobTemplateCommand;
}($Command));
export { UpdateJobTemplateCommand };
//# sourceMappingURL=UpdateJobTemplateCommand.js.map