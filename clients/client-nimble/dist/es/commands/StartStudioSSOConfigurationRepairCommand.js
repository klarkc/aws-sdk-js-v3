import { __extends } from "tslib";
import { StartStudioSSOConfigurationRepairRequest, StartStudioSSOConfigurationRepairResponse, } from "../models/models_0";
import { deserializeAws_restJson1StartStudioSSOConfigurationRepairCommand, serializeAws_restJson1StartStudioSSOConfigurationRepairCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Repairs the SSO configuration for a given studio.</p> <p>If the studio has a valid AWS SSO configuration currently associated with it, this operation will fail with a validation error.</p> <p>If the studio does not have a valid AWS SSO configuration currently associated with it, then a new AWS SSO application is created for the studio and the studio is changed to the READY state.</p> <p>After the AWS SSO application is repaired, you must use the Amazon Nimble Studio console to add administrators and users to your studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, StartStudioSSOConfigurationRepairCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, StartStudioSSOConfigurationRepairCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new StartStudioSSOConfigurationRepairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartStudioSSOConfigurationRepairCommandInput} for command's `input` shape.
 * @see {@link StartStudioSSOConfigurationRepairCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartStudioSSOConfigurationRepairCommand = /** @class */ (function (_super) {
    __extends(StartStudioSSOConfigurationRepairCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartStudioSSOConfigurationRepairCommand(input) {
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
    StartStudioSSOConfigurationRepairCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "StartStudioSSOConfigurationRepairCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartStudioSSOConfigurationRepairRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartStudioSSOConfigurationRepairResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartStudioSSOConfigurationRepairCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartStudioSSOConfigurationRepairCommand(input, context);
    };
    StartStudioSSOConfigurationRepairCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartStudioSSOConfigurationRepairCommand(output, context);
    };
    return StartStudioSSOConfigurationRepairCommand;
}($Command));
export { StartStudioSSOConfigurationRepairCommand };
//# sourceMappingURL=StartStudioSSOConfigurationRepairCommand.js.map