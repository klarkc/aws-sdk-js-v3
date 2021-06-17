import { __extends } from "tslib";
import { UpdateFileSystemAssociationInput, UpdateFileSystemAssociationOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateFileSystemAssociationCommand, serializeAws_json1_1UpdateFileSystemAssociationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a file system association. This operation is only supported in the Amazon FSx
 *          file gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateFileSystemAssociationCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateFileSystemAssociationCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateFileSystemAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFileSystemAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateFileSystemAssociationCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFileSystemAssociationCommand = /** @class */ (function (_super) {
    __extends(UpdateFileSystemAssociationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFileSystemAssociationCommand(input) {
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
    UpdateFileSystemAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "UpdateFileSystemAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFileSystemAssociationInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateFileSystemAssociationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFileSystemAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateFileSystemAssociationCommand(input, context);
    };
    UpdateFileSystemAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateFileSystemAssociationCommand(output, context);
    };
    return UpdateFileSystemAssociationCommand;
}($Command));
export { UpdateFileSystemAssociationCommand };
//# sourceMappingURL=UpdateFileSystemAssociationCommand.js.map