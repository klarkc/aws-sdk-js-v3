import { __extends } from "tslib";
import { UpdateRepositoryNameInput } from "../models/models_1";
import { deserializeAws_json1_1UpdateRepositoryNameCommand, serializeAws_json1_1UpdateRepositoryNameCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Renames a repository. The repository name must be unique across the calling AWS
 *             account. Repository names are limited to 100 alphanumeric, dash, and underscore
 *             characters, and cannot include certain characters. The suffix .git is prohibited. For
 *             more information about the limits on repository names, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the AWS CodeCommit
 *             User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateRepositoryNameCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateRepositoryNameCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdateRepositoryNameCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRepositoryNameCommandInput} for command's `input` shape.
 * @see {@link UpdateRepositoryNameCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRepositoryNameCommand = /** @class */ (function (_super) {
    __extends(UpdateRepositoryNameCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRepositoryNameCommand(input) {
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
    UpdateRepositoryNameCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "UpdateRepositoryNameCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRepositoryNameInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRepositoryNameCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateRepositoryNameCommand(input, context);
    };
    UpdateRepositoryNameCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateRepositoryNameCommand(output, context);
    };
    return UpdateRepositoryNameCommand;
}($Command));
export { UpdateRepositoryNameCommand };
//# sourceMappingURL=UpdateRepositoryNameCommand.js.map