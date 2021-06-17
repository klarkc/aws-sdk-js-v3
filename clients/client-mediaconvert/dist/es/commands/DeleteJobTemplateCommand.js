import { __extends } from "tslib";
import { DeleteJobTemplateRequest, DeleteJobTemplateResponse } from "../models/models_1";
import { deserializeAws_restJson1DeleteJobTemplateCommand, serializeAws_restJson1DeleteJobTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Permanently delete a job template you have created.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, DeleteJobTemplateCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, DeleteJobTemplateCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new DeleteJobTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteJobTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteJobTemplateCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteJobTemplateCommand = /** @class */ (function (_super) {
    __extends(DeleteJobTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteJobTemplateCommand(input) {
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
    DeleteJobTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConvertClient";
        var commandName = "DeleteJobTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteJobTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteJobTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteJobTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteJobTemplateCommand(input, context);
    };
    DeleteJobTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteJobTemplateCommand(output, context);
    };
    return DeleteJobTemplateCommand;
}($Command));
export { DeleteJobTemplateCommand };
//# sourceMappingURL=DeleteJobTemplateCommand.js.map