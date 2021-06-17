import { __extends } from "tslib";
import { UpdateChapCredentialsInput, UpdateChapCredentialsOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateChapCredentialsCommand, serializeAws_json1_1UpdateChapCredentialsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a
 *          specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for
 *          added security, you might use it. This operation is supported in the volume and tape
 *          gateway types.</p>
 *
 *          <important>
 *             <p>When you update CHAP credentials, all existing connections on the target are closed
 *             and initiators must reconnect with the new credentials.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateChapCredentialsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateChapCredentialsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateChapCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateChapCredentialsCommandInput} for command's `input` shape.
 * @see {@link UpdateChapCredentialsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateChapCredentialsCommand = /** @class */ (function (_super) {
    __extends(UpdateChapCredentialsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateChapCredentialsCommand(input) {
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
    UpdateChapCredentialsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "UpdateChapCredentialsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateChapCredentialsInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateChapCredentialsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateChapCredentialsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateChapCredentialsCommand(input, context);
    };
    UpdateChapCredentialsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateChapCredentialsCommand(output, context);
    };
    return UpdateChapCredentialsCommand;
}($Command));
export { UpdateChapCredentialsCommand };
//# sourceMappingURL=UpdateChapCredentialsCommand.js.map