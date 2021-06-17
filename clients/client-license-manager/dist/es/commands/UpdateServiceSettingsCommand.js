import { __extends } from "tslib";
import { UpdateServiceSettingsRequest, UpdateServiceSettingsResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateServiceSettingsCommand, serializeAws_json1_1UpdateServiceSettingsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates License Manager settings for the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, UpdateServiceSettingsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, UpdateServiceSettingsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new UpdateServiceSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServiceSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceSettingsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateServiceSettingsCommand = /** @class */ (function (_super) {
    __extends(UpdateServiceSettingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateServiceSettingsCommand(input) {
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
    UpdateServiceSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "UpdateServiceSettingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateServiceSettingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateServiceSettingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateServiceSettingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateServiceSettingsCommand(input, context);
    };
    UpdateServiceSettingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateServiceSettingsCommand(output, context);
    };
    return UpdateServiceSettingsCommand;
}($Command));
export { UpdateServiceSettingsCommand };
//# sourceMappingURL=UpdateServiceSettingsCommand.js.map