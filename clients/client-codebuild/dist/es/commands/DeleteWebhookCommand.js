import { __extends } from "tslib";
import { DeleteWebhookInput, DeleteWebhookOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteWebhookCommand, serializeAws_json1_1DeleteWebhookCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>For an existing AWS CodeBuild build project that has its source code stored in a GitHub or
 *             Bitbucket repository, stops AWS CodeBuild from rebuilding the source code every time a code
 *             change is pushed to the repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DeleteWebhookCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DeleteWebhookCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new DeleteWebhookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWebhookCommandInput} for command's `input` shape.
 * @see {@link DeleteWebhookCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteWebhookCommand = /** @class */ (function (_super) {
    __extends(DeleteWebhookCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteWebhookCommand(input) {
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
    DeleteWebhookCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "DeleteWebhookCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteWebhookInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteWebhookOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteWebhookCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteWebhookCommand(input, context);
    };
    DeleteWebhookCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteWebhookCommand(output, context);
    };
    return DeleteWebhookCommand;
}($Command));
export { DeleteWebhookCommand };
//# sourceMappingURL=DeleteWebhookCommand.js.map