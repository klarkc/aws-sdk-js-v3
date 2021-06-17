import { __extends } from "tslib";
import { DeleteRepositoryInput, DeleteRepositoryOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteRepositoryCommand, serializeAws_json1_1DeleteRepositoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a repository. If a specified repository was already deleted, a null repository
 *             ID is returned.</p>
 *         <important>
 *             <p>Deleting a repository also deletes all associated objects and metadata. After a repository is
 *                 deleted, all future push calls to the deleted repository fail.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DeleteRepositoryCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DeleteRepositoryCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new DeleteRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRepositoryCommandInput} for command's `input` shape.
 * @see {@link DeleteRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRepositoryCommand = /** @class */ (function (_super) {
    __extends(DeleteRepositoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRepositoryCommand(input) {
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
    DeleteRepositoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "DeleteRepositoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRepositoryInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteRepositoryOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRepositoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteRepositoryCommand(input, context);
    };
    DeleteRepositoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteRepositoryCommand(output, context);
    };
    return DeleteRepositoryCommand;
}($Command));
export { DeleteRepositoryCommand };
//# sourceMappingURL=DeleteRepositoryCommand.js.map