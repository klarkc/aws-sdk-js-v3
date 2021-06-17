import { __extends } from "tslib";
import { DescribeIdentityProviderRequest, DescribeIdentityProviderResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeIdentityProviderCommand, serializeAws_json1_1DescribeIdentityProviderCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a specific identity provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DescribeIdentityProviderCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribeIdentityProviderCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new DescribeIdentityProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityProviderCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeIdentityProviderCommand = /** @class */ (function (_super) {
    __extends(DescribeIdentityProviderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeIdentityProviderCommand(input) {
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
    DescribeIdentityProviderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "DescribeIdentityProviderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeIdentityProviderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeIdentityProviderResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeIdentityProviderCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeIdentityProviderCommand(input, context);
    };
    DescribeIdentityProviderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeIdentityProviderCommand(output, context);
    };
    return DescribeIdentityProviderCommand;
}($Command));
export { DescribeIdentityProviderCommand };
//# sourceMappingURL=DescribeIdentityProviderCommand.js.map