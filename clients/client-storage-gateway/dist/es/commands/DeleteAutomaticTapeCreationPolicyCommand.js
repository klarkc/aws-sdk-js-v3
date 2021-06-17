import { __extends } from "tslib";
import { DeleteAutomaticTapeCreationPolicyInput, DeleteAutomaticTapeCreationPolicyOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand, serializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the automatic tape creation policy of a gateway. If you delete this policy, new
 *          virtual tapes must be created manually. Use the Amazon Resource Name (ARN) of the gateway
 *          in your request to remove the policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteAutomaticTapeCreationPolicyCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteAutomaticTapeCreationPolicyCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DeleteAutomaticTapeCreationPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAutomaticTapeCreationPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteAutomaticTapeCreationPolicyCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAutomaticTapeCreationPolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteAutomaticTapeCreationPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAutomaticTapeCreationPolicyCommand(input) {
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
    DeleteAutomaticTapeCreationPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DeleteAutomaticTapeCreationPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAutomaticTapeCreationPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAutomaticTapeCreationPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAutomaticTapeCreationPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand(input, context);
    };
    DeleteAutomaticTapeCreationPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand(output, context);
    };
    return DeleteAutomaticTapeCreationPolicyCommand;
}($Command));
export { DeleteAutomaticTapeCreationPolicyCommand };
//# sourceMappingURL=DeleteAutomaticTapeCreationPolicyCommand.js.map