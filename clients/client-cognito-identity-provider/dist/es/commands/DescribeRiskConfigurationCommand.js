import { __extends } from "tslib";
import { DescribeRiskConfigurationRequest, DescribeRiskConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeRiskConfigurationCommand, serializeAws_json1_1DescribeRiskConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the risk configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DescribeRiskConfigurationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribeRiskConfigurationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new DescribeRiskConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRiskConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeRiskConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRiskConfigurationCommand = /** @class */ (function (_super) {
    __extends(DescribeRiskConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRiskConfigurationCommand(input) {
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
    DescribeRiskConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "DescribeRiskConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRiskConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRiskConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRiskConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeRiskConfigurationCommand(input, context);
    };
    DescribeRiskConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeRiskConfigurationCommand(output, context);
    };
    return DescribeRiskConfigurationCommand;
}($Command));
export { DescribeRiskConfigurationCommand };
//# sourceMappingURL=DescribeRiskConfigurationCommand.js.map