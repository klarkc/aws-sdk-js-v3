import { __extends } from "tslib";
import { GetCommentsForPullRequestInput, GetCommentsForPullRequestOutput } from "../models/models_0";
import { deserializeAws_json1_1GetCommentsForPullRequestCommand, serializeAws_json1_1GetCommentsForPullRequestCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns comments made on a pull request.</p>
 *         <note>
 *             <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of
 *             reactions from active identities, use GetCommentReactions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetCommentsForPullRequestCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetCommentsForPullRequestCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetCommentsForPullRequestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCommentsForPullRequestCommandInput} for command's `input` shape.
 * @see {@link GetCommentsForPullRequestCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCommentsForPullRequestCommand = /** @class */ (function (_super) {
    __extends(GetCommentsForPullRequestCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCommentsForPullRequestCommand(input) {
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
    GetCommentsForPullRequestCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "GetCommentsForPullRequestCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCommentsForPullRequestInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetCommentsForPullRequestOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCommentsForPullRequestCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetCommentsForPullRequestCommand(input, context);
    };
    GetCommentsForPullRequestCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetCommentsForPullRequestCommand(output, context);
    };
    return GetCommentsForPullRequestCommand;
}($Command));
export { GetCommentsForPullRequestCommand };
//# sourceMappingURL=GetCommentsForPullRequestCommand.js.map