import { __extends } from "tslib";
import { CreateAssessmentTemplateRequest, CreateAssessmentTemplateResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateAssessmentTemplateCommand, serializeAws_json1_1CreateAssessmentTemplateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an assessment template for the assessment target that is specified by the ARN
 *          of the assessment target. If the <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html">service-linked role</a> isn’t already registered, this action also creates and
 *          registers a service-linked role to grant Amazon Inspector access to AWS Services needed to
 *          perform security assessments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, CreateAssessmentTemplateCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, CreateAssessmentTemplateCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new CreateAssessmentTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAssessmentTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateAssessmentTemplateCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAssessmentTemplateCommand = /** @class */ (function (_super) {
    __extends(CreateAssessmentTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAssessmentTemplateCommand(input) {
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
    CreateAssessmentTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "CreateAssessmentTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAssessmentTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAssessmentTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAssessmentTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateAssessmentTemplateCommand(input, context);
    };
    CreateAssessmentTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateAssessmentTemplateCommand(output, context);
    };
    return CreateAssessmentTemplateCommand;
}($Command));
export { CreateAssessmentTemplateCommand };
//# sourceMappingURL=CreateAssessmentTemplateCommand.js.map