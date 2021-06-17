import { __extends } from "tslib";
import { CreateCodeReviewRequest, CreateCodeReviewResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateCodeReviewCommand, serializeAws_restJson1CreateCodeReviewCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Use to create a code review with a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html">
 *                <code>CodeReviewType</code>
 *             </a>
 *          of <code>RepositoryAnalysis</code>. This type of code review analyzes all code under a specified branch in an associated repository.
 *          <code>PullRequest</code> code reviews are automatically triggered by a pull request so cannot be created using this method.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, CreateCodeReviewCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, CreateCodeReviewCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new CreateCodeReviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCodeReviewCommandInput} for command's `input` shape.
 * @see {@link CreateCodeReviewCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCodeReviewCommand = /** @class */ (function (_super) {
    __extends(CreateCodeReviewCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCodeReviewCommand(input) {
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
    CreateCodeReviewCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruReviewerClient";
        var commandName = "CreateCodeReviewCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCodeReviewRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCodeReviewResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCodeReviewCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateCodeReviewCommand(input, context);
    };
    CreateCodeReviewCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateCodeReviewCommand(output, context);
    };
    return CreateCodeReviewCommand;
}($Command));
export { CreateCodeReviewCommand };
//# sourceMappingURL=CreateCodeReviewCommand.js.map