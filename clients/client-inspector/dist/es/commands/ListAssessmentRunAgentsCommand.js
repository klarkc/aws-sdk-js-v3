import { __extends } from "tslib";
import { ListAssessmentRunAgentsRequest, ListAssessmentRunAgentsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListAssessmentRunAgentsCommand, serializeAws_json1_1ListAssessmentRunAgentsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the agents of the assessment runs that are specified by the ARNs of the
 *          assessment runs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListAssessmentRunAgentsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListAssessmentRunAgentsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new ListAssessmentRunAgentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssessmentRunAgentsCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentRunAgentsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAssessmentRunAgentsCommand = /** @class */ (function (_super) {
    __extends(ListAssessmentRunAgentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAssessmentRunAgentsCommand(input) {
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
    ListAssessmentRunAgentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "ListAssessmentRunAgentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAssessmentRunAgentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAssessmentRunAgentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAssessmentRunAgentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAssessmentRunAgentsCommand(input, context);
    };
    ListAssessmentRunAgentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAssessmentRunAgentsCommand(output, context);
    };
    return ListAssessmentRunAgentsCommand;
}($Command));
export { ListAssessmentRunAgentsCommand };
//# sourceMappingURL=ListAssessmentRunAgentsCommand.js.map