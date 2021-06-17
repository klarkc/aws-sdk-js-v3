import { __extends } from "tslib";
import { AddWorkingStorageInput, AddWorkingStorageOutput } from "../models/models_0";
import { deserializeAws_json1_1AddWorkingStorageCommand, serializeAws_json1_1AddWorkingStorageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Configures one or more gateway local disks as working storage for a gateway. This
 *          operation is only supported in the stored volume gateway type. This operation is deprecated
 *          in cached volume API version 20120630. Use <a>AddUploadBuffer</a>
 *          instead.</p>
 *
 *          <note>
 *             <p>Working storage is also referred to as upload buffer. You can also use the <a>AddUploadBuffer</a> operation to add upload buffer to a stored volume
 *             gateway.</p>
 *          </note>
 *
 *          <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to
 *          add working storage, and one or more disk IDs that you want to configure as working
 *          storage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, AddWorkingStorageCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, AddWorkingStorageCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new AddWorkingStorageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddWorkingStorageCommandInput} for command's `input` shape.
 * @see {@link AddWorkingStorageCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddWorkingStorageCommand = /** @class */ (function (_super) {
    __extends(AddWorkingStorageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddWorkingStorageCommand(input) {
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
    AddWorkingStorageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "AddWorkingStorageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddWorkingStorageInput.filterSensitiveLog,
            outputFilterSensitiveLog: AddWorkingStorageOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddWorkingStorageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddWorkingStorageCommand(input, context);
    };
    AddWorkingStorageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddWorkingStorageCommand(output, context);
    };
    return AddWorkingStorageCommand;
}($Command));
export { AddWorkingStorageCommand };
//# sourceMappingURL=AddWorkingStorageCommand.js.map