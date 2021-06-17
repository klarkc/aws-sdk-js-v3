import { __extends } from "tslib";
import { CreateAssessmentTargetRequest, CreateAssessmentTargetResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateAssessmentTargetCommand, serializeAws_json1_1CreateAssessmentTargetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new assessment target using the ARN of the resource group that is generated
 *          by <a>CreateResourceGroup</a>. If resourceGroupArn is not specified, all EC2
 *          instances in the current AWS account and region are included in the assessment target. If
 *          the <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html">service-linked role</a> isn’t already registered, this action also creates and
 *          registers a service-linked role to grant Amazon Inspector access to AWS Services needed to
 *          perform security assessments. You can create up to 50 assessment targets per AWS account.
 *          You can run up to 500 concurrent agents per AWS account. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html">
 *             Amazon Inspector Assessment Targets</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, CreateAssessmentTargetCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, CreateAssessmentTargetCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new CreateAssessmentTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAssessmentTargetCommandInput} for command's `input` shape.
 * @see {@link CreateAssessmentTargetCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAssessmentTargetCommand = /** @class */ (function (_super) {
    __extends(CreateAssessmentTargetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAssessmentTargetCommand(input) {
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
    CreateAssessmentTargetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "CreateAssessmentTargetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAssessmentTargetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAssessmentTargetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAssessmentTargetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateAssessmentTargetCommand(input, context);
    };
    CreateAssessmentTargetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateAssessmentTargetCommand(output, context);
    };
    return CreateAssessmentTargetCommand;
}($Command));
export { CreateAssessmentTargetCommand };
//# sourceMappingURL=CreateAssessmentTargetCommand.js.map