import { __extends } from "tslib";
import { DeleteProjectRequest, DeleteProjectResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteProjectCommand, serializeAws_json1_1DeleteProjectCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a project, including project resources. Does not delete users associated with
 *       the project, but does delete the IAM roles that allowed access to the project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, DeleteProjectCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, DeleteProjectCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new DeleteProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProjectCommandInput} for command's `input` shape.
 * @see {@link DeleteProjectCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteProjectCommand = /** @class */ (function (_super) {
    __extends(DeleteProjectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteProjectCommand(input) {
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
    DeleteProjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeStarClient";
        var commandName = "DeleteProjectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteProjectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteProjectResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteProjectCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteProjectCommand(input, context);
    };
    DeleteProjectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteProjectCommand(output, context);
    };
    return DeleteProjectCommand;
}($Command));
export { DeleteProjectCommand };
//# sourceMappingURL=DeleteProjectCommand.js.map