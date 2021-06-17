import { __extends } from "tslib";
import { PostCommentReplyInput, PostCommentReplyOutput } from "../models/models_1";
import { deserializeAws_json1_1PostCommentReplyCommand, serializeAws_json1_1PostCommentReplyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Posts a comment in reply to an existing comment on a comparison between commits or a pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, PostCommentReplyCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, PostCommentReplyCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new PostCommentReplyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PostCommentReplyCommandInput} for command's `input` shape.
 * @see {@link PostCommentReplyCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PostCommentReplyCommand = /** @class */ (function (_super) {
    __extends(PostCommentReplyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PostCommentReplyCommand(input) {
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
    PostCommentReplyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "PostCommentReplyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PostCommentReplyInput.filterSensitiveLog,
            outputFilterSensitiveLog: PostCommentReplyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PostCommentReplyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PostCommentReplyCommand(input, context);
    };
    PostCommentReplyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PostCommentReplyCommand(output, context);
    };
    return PostCommentReplyCommand;
}($Command));
export { PostCommentReplyCommand };
//# sourceMappingURL=PostCommentReplyCommand.js.map