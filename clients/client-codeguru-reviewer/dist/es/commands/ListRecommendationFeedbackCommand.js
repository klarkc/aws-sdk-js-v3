import { __extends } from "tslib";
import { ListRecommendationFeedbackRequest, ListRecommendationFeedbackResponse } from "../models/models_0";
import { deserializeAws_restJson1ListRecommendationFeedbackCommand, serializeAws_restJson1ListRecommendationFeedbackCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Returns a list of
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html">
 *                <code>RecommendationFeedbackSummary</code>
 *             </a>
 *          objects that contain customer recommendation feedback for all CodeGuru Reviewer users.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, ListRecommendationFeedbackCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, ListRecommendationFeedbackCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new ListRecommendationFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRecommendationFeedbackCommandInput} for command's `input` shape.
 * @see {@link ListRecommendationFeedbackCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRecommendationFeedbackCommand = /** @class */ (function (_super) {
    __extends(ListRecommendationFeedbackCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRecommendationFeedbackCommand(input) {
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
    ListRecommendationFeedbackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruReviewerClient";
        var commandName = "ListRecommendationFeedbackCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRecommendationFeedbackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRecommendationFeedbackResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRecommendationFeedbackCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListRecommendationFeedbackCommand(input, context);
    };
    ListRecommendationFeedbackCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListRecommendationFeedbackCommand(output, context);
    };
    return ListRecommendationFeedbackCommand;
}($Command));
export { ListRecommendationFeedbackCommand };
//# sourceMappingURL=ListRecommendationFeedbackCommand.js.map