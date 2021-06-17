import { __extends } from "tslib";
import { DescribeResourceServerRequest, DescribeResourceServerResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeResourceServerCommand, serializeAws_json1_1DescribeResourceServerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a resource server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DescribeResourceServerCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribeResourceServerCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new DescribeResourceServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeResourceServerCommandInput} for command's `input` shape.
 * @see {@link DescribeResourceServerCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeResourceServerCommand = /** @class */ (function (_super) {
    __extends(DescribeResourceServerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeResourceServerCommand(input) {
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
    DescribeResourceServerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "DescribeResourceServerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeResourceServerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeResourceServerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeResourceServerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeResourceServerCommand(input, context);
    };
    DescribeResourceServerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeResourceServerCommand(output, context);
    };
    return DescribeResourceServerCommand;
}($Command));
export { DescribeResourceServerCommand };
//# sourceMappingURL=DescribeResourceServerCommand.js.map