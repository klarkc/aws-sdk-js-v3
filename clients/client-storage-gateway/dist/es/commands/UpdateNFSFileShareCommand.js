import { __extends } from "tslib";
import { UpdateNFSFileShareInput, UpdateNFSFileShareOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateNFSFileShareCommand, serializeAws_json1_1UpdateNFSFileShareCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a Network File System (NFS) file share. This operation is only supported in the
 *          file gateway type.</p>
 *
 *          <note>
 *             <p>To leave a file share field unchanged, set the corresponding input field to
 *             null.</p>
 *          </note>
 *
 *          <p>Updates the following file share settings:</p>
 *
 *          <ul>
 *             <li>
 *                <p>Default storage class for your S3 bucket</p>
 *             </li>
 *             <li>
 *                <p>Metadata defaults for your S3 bucket</p>
 *             </li>
 *             <li>
 *                <p>Allowed NFS clients for your file share</p>
 *             </li>
 *             <li>
 *                <p>Squash settings</p>
 *             </li>
 *             <li>
 *                <p>Write status of your file share</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateNFSFileShareCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateNFSFileShareCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateNFSFileShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateNFSFileShareCommandInput} for command's `input` shape.
 * @see {@link UpdateNFSFileShareCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateNFSFileShareCommand = /** @class */ (function (_super) {
    __extends(UpdateNFSFileShareCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateNFSFileShareCommand(input) {
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
    UpdateNFSFileShareCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "UpdateNFSFileShareCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateNFSFileShareInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateNFSFileShareOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateNFSFileShareCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateNFSFileShareCommand(input, context);
    };
    UpdateNFSFileShareCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateNFSFileShareCommand(output, context);
    };
    return UpdateNFSFileShareCommand;
}($Command));
export { UpdateNFSFileShareCommand };
//# sourceMappingURL=UpdateNFSFileShareCommand.js.map