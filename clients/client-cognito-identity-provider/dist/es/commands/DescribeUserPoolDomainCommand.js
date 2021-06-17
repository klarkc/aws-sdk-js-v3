import { __extends } from "tslib";
import { DescribeUserPoolDomainRequest, DescribeUserPoolDomainResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeUserPoolDomainCommand, serializeAws_json1_1DescribeUserPoolDomainCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DescribeUserPoolDomainCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribeUserPoolDomainCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new DescribeUserPoolDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserPoolDomainCommandInput} for command's `input` shape.
 * @see {@link DescribeUserPoolDomainCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeUserPoolDomainCommand = /** @class */ (function (_super) {
    __extends(DescribeUserPoolDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeUserPoolDomainCommand(input) {
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
    DescribeUserPoolDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "DescribeUserPoolDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeUserPoolDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeUserPoolDomainResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeUserPoolDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeUserPoolDomainCommand(input, context);
    };
    DescribeUserPoolDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeUserPoolDomainCommand(output, context);
    };
    return DescribeUserPoolDomainCommand;
}($Command));
export { DescribeUserPoolDomainCommand };
//# sourceMappingURL=DescribeUserPoolDomainCommand.js.map