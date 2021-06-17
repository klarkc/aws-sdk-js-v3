import { __extends } from "tslib";
import { LookupDeveloperIdentityInput, LookupDeveloperIdentityResponse } from "../models/models_0";
import { deserializeAws_json1_1LookupDeveloperIdentityCommand, serializeAws_json1_1LookupDeveloperIdentityCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the <code>IdentityID</code> associated with a
 *             <code>DeveloperUserIdentifier</code> or the list of <code>DeveloperUserIdentifier</code>
 *          values associated with an <code>IdentityId</code> for an existing identity. Either
 *             <code>IdentityID</code> or <code>DeveloperUserIdentifier</code> must not be null. If you
 *          supply only one of these values, the other value will be searched in the database and
 *          returned as a part of the response. If you supply both,
 *             <code>DeveloperUserIdentifier</code> will be matched against <code>IdentityID</code>. If
 *          the values are verified against the database, the response returns both values and is the
 *          same as the request. Otherwise a <code>ResourceConflictException</code> is
 *          thrown.</p>
 *          <p>
 *             <code>LookupDeveloperIdentity</code> is intended for low-throughput control plane
 *          operations: for example, to enable customer service to locate an identity ID by username.
 *          If you are using it for higher-volume operations such as user authentication, your requests
 *          are likely to be throttled. <a>GetOpenIdTokenForDeveloperIdentity</a> is a
 *          better option for higher-volume operations for user authentication.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, LookupDeveloperIdentityCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, LookupDeveloperIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new LookupDeveloperIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link LookupDeveloperIdentityCommandInput} for command's `input` shape.
 * @see {@link LookupDeveloperIdentityCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
var LookupDeveloperIdentityCommand = /** @class */ (function (_super) {
    __extends(LookupDeveloperIdentityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function LookupDeveloperIdentityCommand(input) {
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
    LookupDeveloperIdentityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityClient";
        var commandName = "LookupDeveloperIdentityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: LookupDeveloperIdentityInput.filterSensitiveLog,
            outputFilterSensitiveLog: LookupDeveloperIdentityResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    LookupDeveloperIdentityCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1LookupDeveloperIdentityCommand(input, context);
    };
    LookupDeveloperIdentityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1LookupDeveloperIdentityCommand(output, context);
    };
    return LookupDeveloperIdentityCommand;
}($Command));
export { LookupDeveloperIdentityCommand };
//# sourceMappingURL=LookupDeveloperIdentityCommand.js.map