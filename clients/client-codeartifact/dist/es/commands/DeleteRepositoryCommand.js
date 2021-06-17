import { __extends } from "tslib";
import { DeleteRepositoryRequest, DeleteRepositoryResult } from "../models/models_0";
import { deserializeAws_restJson1DeleteRepositoryCommand, serializeAws_restJson1DeleteRepositoryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Deletes a repository.
 *        </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DeleteRepositoryCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DeleteRepositoryCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new DeleteRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRepositoryCommandInput} for command's `input` shape.
 * @see {@link DeleteRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "CodeartifactClient";
        var commandName = "DeleteRepositoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRepositoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteRepositoryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRepositoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteRepositoryCommand(input, context);
    };
    DeleteRepositoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteRepositoryCommand(output, context);
    };
    return DeleteRepositoryCommand;
}($Command));
export { DeleteRepositoryCommand };
//# sourceMappingURL=DeleteRepositoryCommand.js.map