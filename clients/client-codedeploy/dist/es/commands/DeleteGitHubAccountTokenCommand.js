import { __extends } from "tslib";
import { DeleteGitHubAccountTokenInput, DeleteGitHubAccountTokenOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteGitHubAccountTokenCommand, serializeAws_json1_1DeleteGitHubAccountTokenCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a GitHub account connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, DeleteGitHubAccountTokenCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, DeleteGitHubAccountTokenCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new DeleteGitHubAccountTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGitHubAccountTokenCommandInput} for command's `input` shape.
 * @see {@link DeleteGitHubAccountTokenCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteGitHubAccountTokenCommand = /** @class */ (function (_super) {
    __extends(DeleteGitHubAccountTokenCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteGitHubAccountTokenCommand(input) {
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
    DeleteGitHubAccountTokenCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "DeleteGitHubAccountTokenCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteGitHubAccountTokenInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteGitHubAccountTokenOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteGitHubAccountTokenCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteGitHubAccountTokenCommand(input, context);
    };
    DeleteGitHubAccountTokenCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteGitHubAccountTokenCommand(output, context);
    };
    return DeleteGitHubAccountTokenCommand;
}($Command));
export { DeleteGitHubAccountTokenCommand };
//# sourceMappingURL=DeleteGitHubAccountTokenCommand.js.map