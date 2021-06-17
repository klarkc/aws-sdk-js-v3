import { __extends } from "tslib";
import { CreateJobTemplateRequest, CreateJobTemplateResponse } from "../models/models_1";
import { deserializeAws_restJson1CreateJobTemplateCommand, serializeAws_restJson1CreateJobTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Create a new job template. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, CreateJobTemplateCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, CreateJobTemplateCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new CreateJobTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateJobTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateJobTemplateCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateJobTemplateCommand = /** @class */ (function (_super) {
    __extends(CreateJobTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateJobTemplateCommand(input) {
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
    CreateJobTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConvertClient";
        var commandName = "CreateJobTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateJobTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateJobTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateJobTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateJobTemplateCommand(input, context);
    };
    CreateJobTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateJobTemplateCommand(output, context);
    };
    return CreateJobTemplateCommand;
}($Command));
export { CreateJobTemplateCommand };
//# sourceMappingURL=CreateJobTemplateCommand.js.map