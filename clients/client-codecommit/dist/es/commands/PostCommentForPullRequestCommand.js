import { __extends } from "tslib";
import { PostCommentForPullRequestInput, PostCommentForPullRequestOutput } from "../models/models_1";
import { deserializeAws_json1_1PostCommentForPullRequestCommand, serializeAws_json1_1PostCommentForPullRequestCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Posts a comment on a pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, PostCommentForPullRequestCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, PostCommentForPullRequestCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new PostCommentForPullRequestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PostCommentForPullRequestCommandInput} for command's `input` shape.
 * @see {@link PostCommentForPullRequestCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PostCommentForPullRequestCommand = /** @class */ (function (_super) {
    __extends(PostCommentForPullRequestCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PostCommentForPullRequestCommand(input) {
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
    PostCommentForPullRequestCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "PostCommentForPullRequestCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PostCommentForPullRequestInput.filterSensitiveLog,
            outputFilterSensitiveLog: PostCommentForPullRequestOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PostCommentForPullRequestCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PostCommentForPullRequestCommand(input, context);
    };
    PostCommentForPullRequestCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PostCommentForPullRequestCommand(output, context);
    };
    return PostCommentForPullRequestCommand;
}($Command));
export { PostCommentForPullRequestCommand };
//# sourceMappingURL=PostCommentForPullRequestCommand.js.map