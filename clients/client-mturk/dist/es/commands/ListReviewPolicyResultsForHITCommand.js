import { __extends } from "tslib";
import { ListReviewPolicyResultsForHITRequest, ListReviewPolicyResultsForHITResponse } from "../models/models_0";
import { deserializeAws_json1_1ListReviewPolicyResultsForHITCommand, serializeAws_json1_1ListReviewPolicyResultsForHITCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The <code>ListReviewPolicyResultsForHIT</code> operation retrieves the computed results
 *             and the actions taken in the course of executing your Review Policies for a given HIT.
 *             For information about how to specify Review Policies when you call CreateHIT,
 *             see Review Policies. The ListReviewPolicyResultsForHIT operation can return results for both
 *             Assignment-level and HIT-level review results.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListReviewPolicyResultsForHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListReviewPolicyResultsForHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListReviewPolicyResultsForHITCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReviewPolicyResultsForHITCommandInput} for command's `input` shape.
 * @see {@link ListReviewPolicyResultsForHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListReviewPolicyResultsForHITCommand = /** @class */ (function (_super) {
    __extends(ListReviewPolicyResultsForHITCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListReviewPolicyResultsForHITCommand(input) {
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
    ListReviewPolicyResultsForHITCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "ListReviewPolicyResultsForHITCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListReviewPolicyResultsForHITRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListReviewPolicyResultsForHITResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListReviewPolicyResultsForHITCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListReviewPolicyResultsForHITCommand(input, context);
    };
    ListReviewPolicyResultsForHITCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListReviewPolicyResultsForHITCommand(output, context);
    };
    return ListReviewPolicyResultsForHITCommand;
}($Command));
export { ListReviewPolicyResultsForHITCommand };
//# sourceMappingURL=ListReviewPolicyResultsForHITCommand.js.map