import { __extends } from "tslib";
import { UnlinkDeveloperIdentityInput } from "../models/models_0";
import { deserializeAws_json1_1UnlinkDeveloperIdentityCommand, serializeAws_json1_1UnlinkDeveloperIdentityCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Unlinks a <code>DeveloperUserIdentifier</code> from an existing identity. Unlinked
 *          developer users will be considered new identities next time they are seen. If, for a given
 *          Cognito identity, you remove all federated identities as well as the developer user
 *          identifier, the Cognito identity becomes inaccessible.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, UnlinkDeveloperIdentityCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, UnlinkDeveloperIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new UnlinkDeveloperIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnlinkDeveloperIdentityCommandInput} for command's `input` shape.
 * @see {@link UnlinkDeveloperIdentityCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UnlinkDeveloperIdentityCommand = /** @class */ (function (_super) {
    __extends(UnlinkDeveloperIdentityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UnlinkDeveloperIdentityCommand(input) {
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
    UnlinkDeveloperIdentityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityClient";
        var commandName = "UnlinkDeveloperIdentityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UnlinkDeveloperIdentityInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UnlinkDeveloperIdentityCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UnlinkDeveloperIdentityCommand(input, context);
    };
    UnlinkDeveloperIdentityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UnlinkDeveloperIdentityCommand(output, context);
    };
    return UnlinkDeveloperIdentityCommand;
}($Command));
export { UnlinkDeveloperIdentityCommand };
//# sourceMappingURL=UnlinkDeveloperIdentityCommand.js.map