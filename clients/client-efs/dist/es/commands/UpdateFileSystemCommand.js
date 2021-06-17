import { __extends } from "tslib";
import { FileSystemDescription, UpdateFileSystemRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateFileSystemCommand, serializeAws_restJson1UpdateFileSystemCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the throughput mode or the amount of provisioned throughput of an existing file
 *       system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, UpdateFileSystemCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, UpdateFileSystemCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new UpdateFileSystemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFileSystemCommandInput} for command's `input` shape.
 * @see {@link UpdateFileSystemCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFileSystemCommand = /** @class */ (function (_super) {
    __extends(UpdateFileSystemCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFileSystemCommand(input) {
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
    UpdateFileSystemCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EFSClient";
        var commandName = "UpdateFileSystemCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFileSystemRequest.filterSensitiveLog,
            outputFilterSensitiveLog: FileSystemDescription.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFileSystemCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateFileSystemCommand(input, context);
    };
    UpdateFileSystemCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateFileSystemCommand(output, context);
    };
    return UpdateFileSystemCommand;
}($Command));
export { UpdateFileSystemCommand };
//# sourceMappingURL=UpdateFileSystemCommand.js.map