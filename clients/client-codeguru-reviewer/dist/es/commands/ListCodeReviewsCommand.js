import { __extends } from "tslib";
import { ListCodeReviewsRequest, ListCodeReviewsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListCodeReviewsCommand, serializeAws_restJson1ListCodeReviewsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Lists all the code reviews that the customer has created in the past 90 days.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, ListCodeReviewsCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, ListCodeReviewsCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new ListCodeReviewsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCodeReviewsCommandInput} for command's `input` shape.
 * @see {@link ListCodeReviewsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCodeReviewsCommand = /** @class */ (function (_super) {
    __extends(ListCodeReviewsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCodeReviewsCommand(input) {
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
    ListCodeReviewsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruReviewerClient";
        var commandName = "ListCodeReviewsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCodeReviewsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCodeReviewsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCodeReviewsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListCodeReviewsCommand(input, context);
    };
    ListCodeReviewsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListCodeReviewsCommand(output, context);
    };
    return ListCodeReviewsCommand;
}($Command));
export { ListCodeReviewsCommand };
//# sourceMappingURL=ListCodeReviewsCommand.js.map