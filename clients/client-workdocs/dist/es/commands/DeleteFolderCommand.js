import { __extends } from "tslib";
import { DeleteFolderRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteFolderCommand, serializeAws_restJson1DeleteFolderCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Permanently deletes the specified folder and its contents.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DeleteFolderCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DeleteFolderCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DeleteFolderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFolderCommandInput} for command's `input` shape.
 * @see {@link DeleteFolderCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFolderCommand = /** @class */ (function (_super) {
    __extends(DeleteFolderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFolderCommand(input) {
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
    DeleteFolderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "DeleteFolderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFolderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFolderCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteFolderCommand(input, context);
    };
    DeleteFolderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteFolderCommand(output, context);
    };
    return DeleteFolderCommand;
}($Command));
export { DeleteFolderCommand };
//# sourceMappingURL=DeleteFolderCommand.js.map