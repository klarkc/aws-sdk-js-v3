import { __extends } from "tslib";
import { UpdateUserPoolDomainRequest, UpdateUserPoolDomainResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateUserPoolDomainCommand, serializeAws_json1_1UpdateUserPoolDomainCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user
 *             pool.</p>
 *         <p>You can use this operation to provide the Amazon Resource Name (ARN) of a new
 *             certificate to Amazon Cognito. You cannot use it to change the domain for a user
 *             pool.</p>
 *         <p>A custom domain is used to host the Amazon Cognito hosted UI, which provides sign-up
 *             and sign-in pages for your application. When you set up a custom domain, you provide a
 *             certificate that you manage with AWS Certificate Manager (ACM). When necessary, you can
 *             use this operation to change the certificate that you applied to your custom
 *             domain.</p>
 *         <p>Usually, this is unnecessary following routine certificate renewal with ACM. When you
 *             renew your existing certificate in ACM, the ARN for your certificate remains the same,
 *             and your custom domain uses the new certificate automatically.</p>
 *         <p>However, if you replace your existing certificate with a new one, ACM gives the new
 *             certificate a new ARN. To apply the new certificate to your custom domain, you must
 *             provide this ARN to Amazon Cognito.</p>
 *         <p>When you add your new certificate in ACM, you must choose US East (N. Virginia) as the
 *             AWS Region.</p>
 *         <p>After you submit your request, Amazon Cognito requires up to 1 hour to distribute your
 *             new certificate to your custom domain.</p>
 *         <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Using Your Own Domain for the Hosted UI</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateUserPoolDomainCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateUserPoolDomainCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new UpdateUserPoolDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserPoolDomainCommandInput} for command's `input` shape.
 * @see {@link UpdateUserPoolDomainCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateUserPoolDomainCommand = /** @class */ (function (_super) {
    __extends(UpdateUserPoolDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateUserPoolDomainCommand(input) {
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
    UpdateUserPoolDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "UpdateUserPoolDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateUserPoolDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateUserPoolDomainResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateUserPoolDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateUserPoolDomainCommand(input, context);
    };
    UpdateUserPoolDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateUserPoolDomainCommand(output, context);
    };
    return UpdateUserPoolDomainCommand;
}($Command));
export { UpdateUserPoolDomainCommand };
//# sourceMappingURL=UpdateUserPoolDomainCommand.js.map