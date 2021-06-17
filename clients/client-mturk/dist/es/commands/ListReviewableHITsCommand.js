import { __extends } from "tslib";
import { ListReviewableHITsRequest, ListReviewableHITsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListReviewableHITsCommand, serializeAws_json1_1ListReviewableHITsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The <code>ListReviewableHITs</code> operation retrieves the HITs with Status equal to
 *             Reviewable or Status equal to Reviewing that belong to the Requester calling the operation.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListReviewableHITsCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListReviewableHITsCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListReviewableHITsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReviewableHITsCommandInput} for command's `input` shape.
 * @see {@link ListReviewableHITsCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListReviewableHITsCommand = /** @class */ (function (_super) {
    __extends(ListReviewableHITsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListReviewableHITsCommand(input) {
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
    ListReviewableHITsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "ListReviewableHITsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListReviewableHITsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListReviewableHITsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListReviewableHITsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListReviewableHITsCommand(input, context);
    };
    ListReviewableHITsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListReviewableHITsCommand(output, context);
    };
    return ListReviewableHITsCommand;
}($Command));
export { ListReviewableHITsCommand };
//# sourceMappingURL=ListReviewableHITsCommand.js.map