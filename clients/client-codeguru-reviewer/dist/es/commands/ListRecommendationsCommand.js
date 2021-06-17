import { __extends } from "tslib";
import { ListRecommendationsRequest, ListRecommendationsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListRecommendationsCommand, serializeAws_restJson1ListRecommendationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Returns the list of all recommendations for a completed code review.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, ListRecommendationsCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, ListRecommendationsCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new ListRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ListRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRecommendationsCommand = /** @class */ (function (_super) {
    __extends(ListRecommendationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRecommendationsCommand(input) {
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
    ListRecommendationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruReviewerClient";
        var commandName = "ListRecommendationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRecommendationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRecommendationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRecommendationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListRecommendationsCommand(input, context);
    };
    ListRecommendationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListRecommendationsCommand(output, context);
    };
    return ListRecommendationsCommand;
}($Command));
export { ListRecommendationsCommand };
//# sourceMappingURL=ListRecommendationsCommand.js.map