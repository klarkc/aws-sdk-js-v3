import { __extends } from "tslib";
import { DescribeUserPoolClientRequest, DescribeUserPoolClientResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeUserPoolClientCommand, serializeAws_json1_1DescribeUserPoolClientCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Client method for returning the configuration information and metadata of the
 *             specified user pool app client.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DescribeUserPoolClientCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribeUserPoolClientCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new DescribeUserPoolClientCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserPoolClientCommandInput} for command's `input` shape.
 * @see {@link DescribeUserPoolClientCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeUserPoolClientCommand = /** @class */ (function (_super) {
    __extends(DescribeUserPoolClientCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeUserPoolClientCommand(input) {
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
    DescribeUserPoolClientCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "DescribeUserPoolClientCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeUserPoolClientRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeUserPoolClientResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeUserPoolClientCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeUserPoolClientCommand(input, context);
    };
    DescribeUserPoolClientCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeUserPoolClientCommand(output, context);
    };
    return DescribeUserPoolClientCommand;
}($Command));
export { DescribeUserPoolClientCommand };
//# sourceMappingURL=DescribeUserPoolClientCommand.js.map