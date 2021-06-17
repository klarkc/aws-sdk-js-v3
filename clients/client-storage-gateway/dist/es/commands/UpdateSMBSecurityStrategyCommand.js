import { __extends } from "tslib";
import { UpdateSMBSecurityStrategyInput, UpdateSMBSecurityStrategyOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateSMBSecurityStrategyCommand, serializeAws_json1_1UpdateSMBSecurityStrategyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the SMB security strategy on a file gateway. This action is only supported in
 *          file gateways.</p>
 *
 *          <note>
 *             <p>This API is called Security level in the User Guide.</p>
 *
 *             <p>A higher security level can affect performance of the gateway.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateSMBSecurityStrategyCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateSMBSecurityStrategyCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateSMBSecurityStrategyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSMBSecurityStrategyCommandInput} for command's `input` shape.
 * @see {@link UpdateSMBSecurityStrategyCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSMBSecurityStrategyCommand = /** @class */ (function (_super) {
    __extends(UpdateSMBSecurityStrategyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSMBSecurityStrategyCommand(input) {
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
    UpdateSMBSecurityStrategyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "UpdateSMBSecurityStrategyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSMBSecurityStrategyInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSMBSecurityStrategyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSMBSecurityStrategyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateSMBSecurityStrategyCommand(input, context);
    };
    UpdateSMBSecurityStrategyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateSMBSecurityStrategyCommand(output, context);
    };
    return UpdateSMBSecurityStrategyCommand;
}($Command));
export { UpdateSMBSecurityStrategyCommand };
//# sourceMappingURL=UpdateSMBSecurityStrategyCommand.js.map