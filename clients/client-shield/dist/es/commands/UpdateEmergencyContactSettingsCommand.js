import { __extends } from "tslib";
import { UpdateEmergencyContactSettingsRequest, UpdateEmergencyContactSettingsResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateEmergencyContactSettingsCommand, serializeAws_json1_1UpdateEmergencyContactSettingsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the details of the list of email addresses and phone numbers that the DDoS Response Team (DRT) can use to contact you if you have proactive engagement enabled, for escalations to the DRT and to initiate proactive customer support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, UpdateEmergencyContactSettingsCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, UpdateEmergencyContactSettingsCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new UpdateEmergencyContactSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEmergencyContactSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateEmergencyContactSettingsCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateEmergencyContactSettingsCommand = /** @class */ (function (_super) {
    __extends(UpdateEmergencyContactSettingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateEmergencyContactSettingsCommand(input) {
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
    UpdateEmergencyContactSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "UpdateEmergencyContactSettingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateEmergencyContactSettingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateEmergencyContactSettingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateEmergencyContactSettingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateEmergencyContactSettingsCommand(input, context);
    };
    UpdateEmergencyContactSettingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateEmergencyContactSettingsCommand(output, context);
    };
    return UpdateEmergencyContactSettingsCommand;
}($Command));
export { UpdateEmergencyContactSettingsCommand };
//# sourceMappingURL=UpdateEmergencyContactSettingsCommand.js.map