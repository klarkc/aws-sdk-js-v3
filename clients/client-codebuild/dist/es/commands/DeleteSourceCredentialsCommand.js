import { __extends } from "tslib";
import { DeleteSourceCredentialsInput, DeleteSourceCredentialsOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteSourceCredentialsCommand, serializeAws_json1_1DeleteSourceCredentialsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DeleteSourceCredentialsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DeleteSourceCredentialsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new DeleteSourceCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSourceCredentialsCommandInput} for command's `input` shape.
 * @see {@link DeleteSourceCredentialsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSourceCredentialsCommand = /** @class */ (function (_super) {
    __extends(DeleteSourceCredentialsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSourceCredentialsCommand(input) {
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
    DeleteSourceCredentialsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "DeleteSourceCredentialsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSourceCredentialsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteSourceCredentialsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSourceCredentialsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteSourceCredentialsCommand(input, context);
    };
    DeleteSourceCredentialsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteSourceCredentialsCommand(output, context);
    };
    return DeleteSourceCredentialsCommand;
}($Command));
export { DeleteSourceCredentialsCommand };
//# sourceMappingURL=DeleteSourceCredentialsCommand.js.map