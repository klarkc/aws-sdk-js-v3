import { __extends } from "tslib";
import { DescribeIdentityProviderConfigurationRequest, DescribeIdentityProviderConfigurationResponse, } from "../models/models_0";
import { deserializeAws_restJson1DescribeIdentityProviderConfigurationCommand, serializeAws_restJson1DescribeIdentityProviderConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the identity provider configuration of the specified fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DescribeIdentityProviderConfigurationCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DescribeIdentityProviderConfigurationCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DescribeIdentityProviderConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIdentityProviderConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityProviderConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeIdentityProviderConfigurationCommand = /** @class */ (function (_super) {
    __extends(DescribeIdentityProviderConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeIdentityProviderConfigurationCommand(input) {
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
    DescribeIdentityProviderConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "DescribeIdentityProviderConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeIdentityProviderConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeIdentityProviderConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeIdentityProviderConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeIdentityProviderConfigurationCommand(input, context);
    };
    DescribeIdentityProviderConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeIdentityProviderConfigurationCommand(output, context);
    };
    return DescribeIdentityProviderConfigurationCommand;
}($Command));
export { DescribeIdentityProviderConfigurationCommand };
//# sourceMappingURL=DescribeIdentityProviderConfigurationCommand.js.map