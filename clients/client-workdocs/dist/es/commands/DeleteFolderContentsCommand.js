import { __extends } from "tslib";
import { DeleteFolderContentsRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteFolderContentsCommand, serializeAws_restJson1DeleteFolderContentsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the contents of the specified folder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DeleteFolderContentsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DeleteFolderContentsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DeleteFolderContentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFolderContentsCommandInput} for command's `input` shape.
 * @see {@link DeleteFolderContentsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFolderContentsCommand = /** @class */ (function (_super) {
    __extends(DeleteFolderContentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFolderContentsCommand(input) {
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
    DeleteFolderContentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "DeleteFolderContentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFolderContentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFolderContentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteFolderContentsCommand(input, context);
    };
    DeleteFolderContentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteFolderContentsCommand(output, context);
    };
    return DeleteFolderContentsCommand;
}($Command));
export { DeleteFolderContentsCommand };
//# sourceMappingURL=DeleteFolderContentsCommand.js.map