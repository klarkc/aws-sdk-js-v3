import { __extends } from "tslib";
import { DescribeSMBSettingsInput, DescribeSMBSettingsOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeSMBSettingsCommand, serializeAws_json1_1DescribeSMBSettingsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a description of a Server Message Block (SMB) file share settings from a file
 *          gateway. This operation is only supported for file gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeSMBSettingsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeSMBSettingsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeSMBSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSMBSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeSMBSettingsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSMBSettingsCommand = /** @class */ (function (_super) {
    __extends(DescribeSMBSettingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSMBSettingsCommand(input) {
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
    DescribeSMBSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DescribeSMBSettingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSMBSettingsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSMBSettingsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSMBSettingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeSMBSettingsCommand(input, context);
    };
    DescribeSMBSettingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeSMBSettingsCommand(output, context);
    };
    return DescribeSMBSettingsCommand;
}($Command));
export { DescribeSMBSettingsCommand };
//# sourceMappingURL=DescribeSMBSettingsCommand.js.map