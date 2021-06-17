import { __extends } from "tslib";
import { UpdateFolderRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateFolderCommand, serializeAws_restJson1UpdateFolderCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified attributes of the specified folder. The user must have access
 *             to both the folder and its parent folder, if applicable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, UpdateFolderCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, UpdateFolderCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new UpdateFolderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFolderCommandInput} for command's `input` shape.
 * @see {@link UpdateFolderCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFolderCommand = /** @class */ (function (_super) {
    __extends(UpdateFolderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFolderCommand(input) {
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
    UpdateFolderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "UpdateFolderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFolderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFolderCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateFolderCommand(input, context);
    };
    UpdateFolderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateFolderCommand(output, context);
    };
    return UpdateFolderCommand;
}($Command));
export { UpdateFolderCommand };
//# sourceMappingURL=UpdateFolderCommand.js.map