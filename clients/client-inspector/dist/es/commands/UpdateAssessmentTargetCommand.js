import { __extends } from "tslib";
import { UpdateAssessmentTargetRequest } from "../models/models_0";
import { deserializeAws_json1_1UpdateAssessmentTargetCommand, serializeAws_json1_1UpdateAssessmentTargetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the assessment target that is specified by the ARN of the assessment
 *          target.</p>
 *          <p>If resourceGroupArn is not specified, all EC2 instances in the current AWS account
 *          and region are included in the assessment target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, UpdateAssessmentTargetCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, UpdateAssessmentTargetCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new UpdateAssessmentTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssessmentTargetCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentTargetCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAssessmentTargetCommand = /** @class */ (function (_super) {
    __extends(UpdateAssessmentTargetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAssessmentTargetCommand(input) {
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
    UpdateAssessmentTargetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "UpdateAssessmentTargetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAssessmentTargetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAssessmentTargetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateAssessmentTargetCommand(input, context);
    };
    UpdateAssessmentTargetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateAssessmentTargetCommand(output, context);
    };
    return UpdateAssessmentTargetCommand;
}($Command));
export { UpdateAssessmentTargetCommand };
//# sourceMappingURL=UpdateAssessmentTargetCommand.js.map