import { __extends } from "tslib";
import { DeleteAssessmentRunRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteAssessmentRunCommand, serializeAws_json1_1DeleteAssessmentRunCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the assessment run that is specified by the ARN of the assessment
 *          run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DeleteAssessmentRunCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DeleteAssessmentRunCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DeleteAssessmentRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssessmentRunCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentRunCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAssessmentRunCommand = /** @class */ (function (_super) {
    __extends(DeleteAssessmentRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAssessmentRunCommand(input) {
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
    DeleteAssessmentRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "DeleteAssessmentRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAssessmentRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAssessmentRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAssessmentRunCommand(input, context);
    };
    DeleteAssessmentRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAssessmentRunCommand(output, context);
    };
    return DeleteAssessmentRunCommand;
}($Command));
export { DeleteAssessmentRunCommand };
//# sourceMappingURL=DeleteAssessmentRunCommand.js.map