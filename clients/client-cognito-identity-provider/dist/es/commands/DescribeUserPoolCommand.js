import { __extends } from "tslib";
import { DescribeUserPoolRequest, DescribeUserPoolResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeUserPoolCommand, serializeAws_json1_1DescribeUserPoolCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the configuration information and metadata of the specified user pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DescribeUserPoolCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribeUserPoolCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new DescribeUserPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserPoolCommandInput} for command's `input` shape.
 * @see {@link DescribeUserPoolCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeUserPoolCommand = /** @class */ (function (_super) {
    __extends(DescribeUserPoolCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeUserPoolCommand(input) {
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
    DescribeUserPoolCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "DescribeUserPoolCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeUserPoolRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeUserPoolResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeUserPoolCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeUserPoolCommand(input, context);
    };
    DescribeUserPoolCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeUserPoolCommand(output, context);
    };
    return DescribeUserPoolCommand;
}($Command));
export { DescribeUserPoolCommand };
//# sourceMappingURL=DescribeUserPoolCommand.js.map