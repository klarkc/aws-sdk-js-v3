import { __extends } from "tslib";
import { AddUploadBufferInput, AddUploadBufferOutput } from "../models/models_0";
import { deserializeAws_json1_1AddUploadBufferCommand, serializeAws_json1_1AddUploadBufferCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Configures one or more gateway local disks as upload buffer for a specified gateway.
 *          This operation is supported for the stored volume, cached volume, and tape gateway
 *          types.</p>
 *
 *          <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to
 *          add upload buffer, and one or more disk IDs that you want to configure as upload
 *          buffer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, AddUploadBufferCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, AddUploadBufferCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new AddUploadBufferCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddUploadBufferCommandInput} for command's `input` shape.
 * @see {@link AddUploadBufferCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddUploadBufferCommand = /** @class */ (function (_super) {
    __extends(AddUploadBufferCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddUploadBufferCommand(input) {
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
    AddUploadBufferCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "AddUploadBufferCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddUploadBufferInput.filterSensitiveLog,
            outputFilterSensitiveLog: AddUploadBufferOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddUploadBufferCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddUploadBufferCommand(input, context);
    };
    AddUploadBufferCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddUploadBufferCommand(output, context);
    };
    return AddUploadBufferCommand;
}($Command));
export { AddUploadBufferCommand };
//# sourceMappingURL=AddUploadBufferCommand.js.map