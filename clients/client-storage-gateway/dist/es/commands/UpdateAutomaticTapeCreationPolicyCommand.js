import { __extends } from "tslib";
import { UpdateAutomaticTapeCreationPolicyInput, UpdateAutomaticTapeCreationPolicyOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand, serializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the automatic tape creation policy of a gateway. Use this to update the policy
 *          with a new set of automatic tape creation rules. This is only supported for tape
 *          gateways.</p>
 *
 *          <p>By default, there is no automatic tape creation policy.</p>
 *
 *          <note>
 *             <p>A gateway can have only one automatic tape creation policy.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateAutomaticTapeCreationPolicyCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateAutomaticTapeCreationPolicyCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateAutomaticTapeCreationPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAutomaticTapeCreationPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateAutomaticTapeCreationPolicyCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAutomaticTapeCreationPolicyCommand = /** @class */ (function (_super) {
    __extends(UpdateAutomaticTapeCreationPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAutomaticTapeCreationPolicyCommand(input) {
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
    UpdateAutomaticTapeCreationPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "UpdateAutomaticTapeCreationPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAutomaticTapeCreationPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAutomaticTapeCreationPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAutomaticTapeCreationPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand(input, context);
    };
    UpdateAutomaticTapeCreationPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand(output, context);
    };
    return UpdateAutomaticTapeCreationPolicyCommand;
}($Command));
export { UpdateAutomaticTapeCreationPolicyCommand };
//# sourceMappingURL=UpdateAutomaticTapeCreationPolicyCommand.js.map