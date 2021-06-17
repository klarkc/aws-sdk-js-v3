import { __extends } from "tslib";
import { GenerateTemplateRequest, GenerateTemplateResponse } from "../models/models_0";
import { deserializeAws_json1_1GenerateTemplateCommand, serializeAws_json1_1GenerateTemplateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Generates an AWS CloudFormation template based on the current launch configuration and writes it to
 *             an Amazon S3 object in the customer’s Amazon S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GenerateTemplateCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GenerateTemplateCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GenerateTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateTemplateCommandInput} for command's `input` shape.
 * @see {@link GenerateTemplateCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GenerateTemplateCommand = /** @class */ (function (_super) {
    __extends(GenerateTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GenerateTemplateCommand(input) {
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
    GenerateTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "GenerateTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GenerateTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GenerateTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GenerateTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GenerateTemplateCommand(input, context);
    };
    GenerateTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GenerateTemplateCommand(output, context);
    };
    return GenerateTemplateCommand;
}($Command));
export { GenerateTemplateCommand };
//# sourceMappingURL=GenerateTemplateCommand.js.map