import { __extends } from "tslib";
import { ActivateGatewayInput, ActivateGatewayOutput } from "../models/models_0";
import { deserializeAws_json1_1ActivateGatewayCommand, serializeAws_json1_1ActivateGatewayCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Activates the gateway you previously deployed on your host. In the activation process,
 *          you specify information such as the AWS Region that you want to use for storing snapshots
 *          or tapes, the time zone for scheduled snapshots the gateway snapshot schedule window, an
 *          activation key, and a name for your gateway. The activation process also associates your
 *          gateway with your account. For more information, see <a>UpdateGatewayInformation</a>.</p>
 *          <note>
 *             <p>You must turn on the gateway VM before you can activate your gateway.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ActivateGatewayCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ActivateGatewayCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ActivateGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ActivateGatewayCommandInput} for command's `input` shape.
 * @see {@link ActivateGatewayCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ActivateGatewayCommand = /** @class */ (function (_super) {
    __extends(ActivateGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ActivateGatewayCommand(input) {
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
    ActivateGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "ActivateGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ActivateGatewayInput.filterSensitiveLog,
            outputFilterSensitiveLog: ActivateGatewayOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ActivateGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ActivateGatewayCommand(input, context);
    };
    ActivateGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ActivateGatewayCommand(output, context);
    };
    return ActivateGatewayCommand;
}($Command));
export { ActivateGatewayCommand };
//# sourceMappingURL=ActivateGatewayCommand.js.map