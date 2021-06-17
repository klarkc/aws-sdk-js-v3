import { __extends } from "tslib";
import { AssociateRepositoryRequest, AssociateRepositoryResponse } from "../models/models_0";
import { deserializeAws_restJson1AssociateRepositoryCommand, serializeAws_restJson1AssociateRepositoryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Use to associate an AWS CodeCommit repository or a repostory managed by
 *          AWS CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a
 *         repository, CodeGuru Reviewer reviews source code changes in the repository's pull requests and provides
 *         automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/recommendations.html">Recommendations in
 *             Amazon CodeGuru Reviewer</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i>
 *         </p>
 *
 *          <p>If you associate a CodeCommit repository, it must be in the same
 *          AWS Region and AWS account where its CodeGuru Reviewer code reviews are configured.</p>
 *
 *          <p>Bitbucket and GitHub Enterprise Server repositories are managed by AWS CodeStar
 *          Connections to connect to CodeGuru Reviewer. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-associate-repository.html">Associate a repository</a> in
 *          the <i>Amazon CodeGuru Reviewer User Guide.</i>
 *          </p>
 *
 *          <note>
 *             <p>
 *             You cannot use the CodeGuru Reviewer SDK or the AWS CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate
 *             a GitHub repository, use the console. For more information, see
 *             <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-with-guru.html">Getting
 *             started with CodeGuru Reviewer</a> in the <i>CodeGuru Reviewer User Guide.</i>
 *             </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, AssociateRepositoryCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, AssociateRepositoryCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new AssociateRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateRepositoryCommandInput} for command's `input` shape.
 * @see {@link AssociateRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateRepositoryCommand = /** @class */ (function (_super) {
    __extends(AssociateRepositoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateRepositoryCommand(input) {
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
    AssociateRepositoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruReviewerClient";
        var commandName = "AssociateRepositoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateRepositoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateRepositoryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateRepositoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateRepositoryCommand(input, context);
    };
    AssociateRepositoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateRepositoryCommand(output, context);
    };
    return AssociateRepositoryCommand;
}($Command));
export { AssociateRepositoryCommand };
//# sourceMappingURL=AssociateRepositoryCommand.js.map