import { __extends } from "tslib";
import { DescribeRecommendationFeedbackRequest, DescribeRecommendationFeedbackResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeRecommendationFeedbackCommand, serializeAws_restJson1DescribeRecommendationFeedbackCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Describes the customer feedback for a CodeGuru Reviewer recommendation.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, DescribeRecommendationFeedbackCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, DescribeRecommendationFeedbackCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new DescribeRecommendationFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRecommendationFeedbackCommandInput} for command's `input` shape.
 * @see {@link DescribeRecommendationFeedbackCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRecommendationFeedbackCommand = /** @class */ (function (_super) {
    __extends(DescribeRecommendationFeedbackCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRecommendationFeedbackCommand(input) {
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
    DescribeRecommendationFeedbackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruReviewerClient";
        var commandName = "DescribeRecommendationFeedbackCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRecommendationFeedbackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRecommendationFeedbackResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRecommendationFeedbackCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeRecommendationFeedbackCommand(input, context);
    };
    DescribeRecommendationFeedbackCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeRecommendationFeedbackCommand(output, context);
    };
    return DescribeRecommendationFeedbackCommand;
}($Command));
export { DescribeRecommendationFeedbackCommand };
//# sourceMappingURL=DescribeRecommendationFeedbackCommand.js.map