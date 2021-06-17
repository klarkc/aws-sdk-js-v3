import { __extends } from "tslib";
import { DescribeOrganizationConfigurationRequest, DescribeOrganizationConfigurationResponse, } from "../models/models_1";
import { deserializeAws_restJson1DescribeOrganizationConfigurationCommand, serializeAws_restJson1DescribeOrganizationConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the Organizations configuration for Security Hub. Can only be
 *          called from a Security Hub administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeOrganizationConfigurationCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DescribeOrganizationConfigurationCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DescribeOrganizationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrganizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeOrganizationConfigurationCommand = /** @class */ (function (_super) {
    __extends(DescribeOrganizationConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeOrganizationConfigurationCommand(input) {
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
    DescribeOrganizationConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "DescribeOrganizationConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeOrganizationConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeOrganizationConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeOrganizationConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeOrganizationConfigurationCommand(input, context);
    };
    DescribeOrganizationConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeOrganizationConfigurationCommand(output, context);
    };
    return DescribeOrganizationConfigurationCommand;
}($Command));
export { DescribeOrganizationConfigurationCommand };
//# sourceMappingURL=DescribeOrganizationConfigurationCommand.js.map