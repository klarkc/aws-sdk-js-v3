import { __extends } from "tslib";
import { DisableGatewayInput, DisableGatewayOutput } from "../models/models_0";
import { deserializeAws_json1_1DisableGatewayCommand, serializeAws_json1_1DisableGatewayCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables a tape gateway when the gateway is no longer functioning. For example, if your
 *          gateway VM is damaged, you can disable the gateway so you can recover virtual tapes.</p>
 *
 *          <p>Use this operation for a tape gateway that is not reachable or not functioning. This
 *          operation is only supported in the tape gateway type.</p>
 *
 *          <important>
 *             <p>After a gateway is disabled, it cannot be enabled.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DisableGatewayCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DisableGatewayCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DisableGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableGatewayCommandInput} for command's `input` shape.
 * @see {@link DisableGatewayCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableGatewayCommand = /** @class */ (function (_super) {
    __extends(DisableGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableGatewayCommand(input) {
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
    DisableGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DisableGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableGatewayInput.filterSensitiveLog,
            outputFilterSensitiveLog: DisableGatewayOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisableGatewayCommand(input, context);
    };
    DisableGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisableGatewayCommand(output, context);
    };
    return DisableGatewayCommand;
}($Command));
export { DisableGatewayCommand };
//# sourceMappingURL=DisableGatewayCommand.js.map