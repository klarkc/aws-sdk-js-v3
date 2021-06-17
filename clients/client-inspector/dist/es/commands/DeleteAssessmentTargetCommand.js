import { __extends } from "tslib";
import { DeleteAssessmentTargetRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteAssessmentTargetCommand, serializeAws_json1_1DeleteAssessmentTargetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the assessment target that is specified by the ARN of the assessment
 *          target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DeleteAssessmentTargetCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DeleteAssessmentTargetCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DeleteAssessmentTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssessmentTargetCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentTargetCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAssessmentTargetCommand = /** @class */ (function (_super) {
    __extends(DeleteAssessmentTargetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAssessmentTargetCommand(input) {
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
    DeleteAssessmentTargetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "DeleteAssessmentTargetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAssessmentTargetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAssessmentTargetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAssessmentTargetCommand(input, context);
    };
    DeleteAssessmentTargetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAssessmentTargetCommand(output, context);
    };
    return DeleteAssessmentTargetCommand;
}($Command));
export { DeleteAssessmentTargetCommand };
//# sourceMappingURL=DeleteAssessmentTargetCommand.js.map