import { __extends } from "tslib";
import { GetJobTemplateRequest, GetJobTemplateResponse } from "../models/models_1";
import { deserializeAws_restJson1GetJobTemplateCommand, serializeAws_restJson1GetJobTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieve the JSON for a specific job template.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, GetJobTemplateCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, GetJobTemplateCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new GetJobTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobTemplateCommandInput} for command's `input` shape.
 * @see {@link GetJobTemplateCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetJobTemplateCommand = /** @class */ (function (_super) {
    __extends(GetJobTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetJobTemplateCommand(input) {
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
    GetJobTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConvertClient";
        var commandName = "GetJobTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetJobTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetJobTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetJobTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetJobTemplateCommand(input, context);
    };
    GetJobTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetJobTemplateCommand(output, context);
    };
    return GetJobTemplateCommand;
}($Command));
export { GetJobTemplateCommand };
//# sourceMappingURL=GetJobTemplateCommand.js.map