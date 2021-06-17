import { __extends } from "tslib";
import { DeleteAssessmentTemplateRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteAssessmentTemplateCommand, serializeAws_json1_1DeleteAssessmentTemplateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the assessment template that is specified by the ARN of the assessment
 *          template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DeleteAssessmentTemplateCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DeleteAssessmentTemplateCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DeleteAssessmentTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssessmentTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentTemplateCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAssessmentTemplateCommand = /** @class */ (function (_super) {
    __extends(DeleteAssessmentTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAssessmentTemplateCommand(input) {
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
    DeleteAssessmentTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "DeleteAssessmentTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAssessmentTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAssessmentTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAssessmentTemplateCommand(input, context);
    };
    DeleteAssessmentTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAssessmentTemplateCommand(output, context);
    };
    return DeleteAssessmentTemplateCommand;
}($Command));
export { DeleteAssessmentTemplateCommand };
//# sourceMappingURL=DeleteAssessmentTemplateCommand.js.map