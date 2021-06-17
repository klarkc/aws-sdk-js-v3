import { __extends } from "tslib";
import { UpdateGatewayInformationInput, UpdateGatewayInformationOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateGatewayInformationCommand, serializeAws_json1_1UpdateGatewayInformationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a gateway's metadata, which includes the gateway's name and time zone.
 *          To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in
 *          your request.</p>
 *
 *          <note>
 *             <p>For gateways activated after September 2, 2015, the gateway's ARN contains the
 *             gateway ID rather than the gateway name. However, changing the name of the gateway has
 *             no effect on the gateway's ARN.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateGatewayInformationCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateGatewayInformationCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateGatewayInformationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGatewayInformationCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewayInformationCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateGatewayInformationCommand = /** @class */ (function (_super) {
    __extends(UpdateGatewayInformationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateGatewayInformationCommand(input) {
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
    UpdateGatewayInformationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "UpdateGatewayInformationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateGatewayInformationInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateGatewayInformationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateGatewayInformationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateGatewayInformationCommand(input, context);
    };
    UpdateGatewayInformationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateGatewayInformationCommand(output, context);
    };
    return UpdateGatewayInformationCommand;
}($Command));
export { UpdateGatewayInformationCommand };
//# sourceMappingURL=UpdateGatewayInformationCommand.js.map