import { __extends } from "tslib";
import { UpdateWebhookInput, UpdateWebhookOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateWebhookCommand, serializeAws_json1_1UpdateWebhookCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Updates the webhook associated with an AWS CodeBuild build project. </p>
 *          <note>
 *             <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored.
 *       </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, UpdateWebhookCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, UpdateWebhookCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new UpdateWebhookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWebhookCommandInput} for command's `input` shape.
 * @see {@link UpdateWebhookCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateWebhookCommand = /** @class */ (function (_super) {
    __extends(UpdateWebhookCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateWebhookCommand(input) {
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
    UpdateWebhookCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "UpdateWebhookCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateWebhookInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateWebhookOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateWebhookCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateWebhookCommand(input, context);
    };
    UpdateWebhookCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateWebhookCommand(output, context);
    };
    return UpdateWebhookCommand;
}($Command));
export { UpdateWebhookCommand };
//# sourceMappingURL=UpdateWebhookCommand.js.map