import { __extends } from "tslib";
import { PutRecommendationFeedbackRequest, PutRecommendationFeedbackResponse } from "../models/models_0";
import { deserializeAws_restJson1PutRecommendationFeedbackCommand, serializeAws_restJson1PutRecommendationFeedbackCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, PutRecommendationFeedbackCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, PutRecommendationFeedbackCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new PutRecommendationFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRecommendationFeedbackCommandInput} for command's `input` shape.
 * @see {@link PutRecommendationFeedbackCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutRecommendationFeedbackCommand = /** @class */ (function (_super) {
    __extends(PutRecommendationFeedbackCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutRecommendationFeedbackCommand(input) {
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
    PutRecommendationFeedbackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruReviewerClient";
        var commandName = "PutRecommendationFeedbackCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutRecommendationFeedbackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutRecommendationFeedbackResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutRecommendationFeedbackCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutRecommendationFeedbackCommand(input, context);
    };
    PutRecommendationFeedbackCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutRecommendationFeedbackCommand(output, context);
    };
    return PutRecommendationFeedbackCommand;
}($Command));
export { PutRecommendationFeedbackCommand };
//# sourceMappingURL=PutRecommendationFeedbackCommand.js.map