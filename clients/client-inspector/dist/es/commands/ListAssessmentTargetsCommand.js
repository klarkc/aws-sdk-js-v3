import { __extends } from "tslib";
import { ListAssessmentTargetsRequest, ListAssessmentTargetsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListAssessmentTargetsCommand, serializeAws_json1_1ListAssessmentTargetsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the ARNs of the assessment targets within this AWS account. For more
 *          information about assessment targets, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html">Amazon Inspector Assessment
 *             Targets</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListAssessmentTargetsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListAssessmentTargetsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new ListAssessmentTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssessmentTargetsCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentTargetsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAssessmentTargetsCommand = /** @class */ (function (_super) {
    __extends(ListAssessmentTargetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAssessmentTargetsCommand(input) {
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
    ListAssessmentTargetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "ListAssessmentTargetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAssessmentTargetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAssessmentTargetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAssessmentTargetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAssessmentTargetsCommand(input, context);
    };
    ListAssessmentTargetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAssessmentTargetsCommand(output, context);
    };
    return ListAssessmentTargetsCommand;
}($Command));
export { ListAssessmentTargetsCommand };
//# sourceMappingURL=ListAssessmentTargetsCommand.js.map