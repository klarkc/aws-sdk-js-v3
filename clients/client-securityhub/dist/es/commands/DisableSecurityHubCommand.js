import { __extends } from "tslib";
import { DisableSecurityHubRequest, DisableSecurityHubResponse } from "../models/models_1";
import { deserializeAws_restJson1DisableSecurityHubCommand, serializeAws_restJson1DisableSecurityHubCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables Security Hub in your account only in the current Region. To disable Security Hub in all
 *          Regions, you must submit one request per Region where you have enabled Security Hub.</p>
 *          <p>When you disable Security Hub for an administrator account, it doesn't disable Security Hub for any associated
 *          member accounts.</p>
 *          <p>When you disable Security Hub, your existing findings and insights and any Security Hub configuration
 *          settings are deleted after 90 days and cannot be recovered. Any standards that were enabled
 *          are disabled, and your administrator and member account associations are removed.</p>
 *          <p>If you want to save your existing findings, you must export them before you disable
 *          Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DisableSecurityHubCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DisableSecurityHubCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DisableSecurityHubCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableSecurityHubCommandInput} for command's `input` shape.
 * @see {@link DisableSecurityHubCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableSecurityHubCommand = /** @class */ (function (_super) {
    __extends(DisableSecurityHubCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableSecurityHubCommand(input) {
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
    DisableSecurityHubCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "DisableSecurityHubCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableSecurityHubRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisableSecurityHubResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableSecurityHubCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisableSecurityHubCommand(input, context);
    };
    DisableSecurityHubCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisableSecurityHubCommand(output, context);
    };
    return DisableSecurityHubCommand;
}($Command));
export { DisableSecurityHubCommand };
//# sourceMappingURL=DisableSecurityHubCommand.js.map