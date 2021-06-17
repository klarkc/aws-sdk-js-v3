import { __extends } from "tslib";
import { ListAssessmentRunsRequest, ListAssessmentRunsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListAssessmentRunsCommand, serializeAws_json1_1ListAssessmentRunsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the assessment runs that correspond to the assessment templates that are
 *          specified by the ARNs of the assessment templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListAssessmentRunsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListAssessmentRunsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new ListAssessmentRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssessmentRunsCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentRunsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAssessmentRunsCommand = /** @class */ (function (_super) {
    __extends(ListAssessmentRunsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAssessmentRunsCommand(input) {
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
    ListAssessmentRunsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "ListAssessmentRunsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAssessmentRunsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAssessmentRunsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAssessmentRunsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAssessmentRunsCommand(input, context);
    };
    ListAssessmentRunsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAssessmentRunsCommand(output, context);
    };
    return ListAssessmentRunsCommand;
}($Command));
export { ListAssessmentRunsCommand };
//# sourceMappingURL=ListAssessmentRunsCommand.js.map