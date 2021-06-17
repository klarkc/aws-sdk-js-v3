import { __extends } from "tslib";
import { CreateWebhookInput, CreateWebhookOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateWebhookCommand, serializeAws_json1_1CreateWebhookCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>For an existing AWS CodeBuild build project that has its source code stored in a GitHub or
 *       Bitbucket repository, enables AWS CodeBuild to start rebuilding the source code every time a
 *       code change is pushed to the repository.</p>
 *          <important>
 *             <p>If you enable webhooks for an AWS CodeBuild project, and the project is used as a build
 *         step in AWS CodePipeline, then two identical builds are created for each commit. One build is
 *         triggered through webhooks, and one through AWS CodePipeline. Because billing is on a per-build
 *         basis, you are billed for both builds. Therefore, if you are using AWS CodePipeline, we
 *         recommend that you disable webhooks in AWS CodeBuild. In the AWS CodeBuild console, clear the
 *         Webhook box. For more information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a Build Project's Settings</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, CreateWebhookCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, CreateWebhookCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new CreateWebhookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWebhookCommandInput} for command's `input` shape.
 * @see {@link CreateWebhookCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateWebhookCommand = /** @class */ (function (_super) {
    __extends(CreateWebhookCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateWebhookCommand(input) {
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
    CreateWebhookCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "CreateWebhookCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateWebhookInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateWebhookOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateWebhookCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateWebhookCommand(input, context);
    };
    CreateWebhookCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateWebhookCommand(output, context);
    };
    return CreateWebhookCommand;
}($Command));
export { CreateWebhookCommand };
//# sourceMappingURL=CreateWebhookCommand.js.map