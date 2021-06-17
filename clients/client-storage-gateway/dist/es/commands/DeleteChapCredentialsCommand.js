import { __extends } from "tslib";
import { DeleteChapCredentialsInput, DeleteChapCredentialsOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteChapCredentialsCommand, serializeAws_json1_1DeleteChapCredentialsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified
 *          iSCSI target and initiator pair. This operation is supported in volume and tape gateway
 *          types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteChapCredentialsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteChapCredentialsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DeleteChapCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteChapCredentialsCommandInput} for command's `input` shape.
 * @see {@link DeleteChapCredentialsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteChapCredentialsCommand = /** @class */ (function (_super) {
    __extends(DeleteChapCredentialsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteChapCredentialsCommand(input) {
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
    DeleteChapCredentialsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DeleteChapCredentialsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteChapCredentialsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteChapCredentialsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteChapCredentialsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteChapCredentialsCommand(input, context);
    };
    DeleteChapCredentialsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteChapCredentialsCommand(output, context);
    };
    return DeleteChapCredentialsCommand;
}($Command));
export { DeleteChapCredentialsCommand };
//# sourceMappingURL=DeleteChapCredentialsCommand.js.map