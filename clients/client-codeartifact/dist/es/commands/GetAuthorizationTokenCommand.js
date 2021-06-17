import { __extends } from "tslib";
import { GetAuthorizationTokenRequest, GetAuthorizationTokenResult } from "../models/models_0";
import { deserializeAws_restJson1GetAuthorizationTokenCommand, serializeAws_restJson1GetAuthorizationTokenCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *         Generates a temporary authorization token for accessing repositories in the domain.
 *         This API requires the <code>codeartifact:GetAuthorizationToken</code> and <code>sts:GetServiceBearerToken</code> permissions.
 *         For more information about authorization tokens, see
 *         <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/tokens-authentication.html">AWS CodeArtifact authentication and tokens</a>.
 *       </p>
 *          <note>
 *             <p>CodeArtifact authorization tokens are valid for a period of 12 hours when created with the <code>login</code> command.
 *          You can call <code>login</code> periodically to refresh the token. When
 *          you create an authorization token with the <code>GetAuthorizationToken</code> API, you can set a custom authorization period,
 *          up to a maximum of 12 hours, with the <code>durationSeconds</code> parameter.</p>
 *             <p>The authorization period begins after <code>login</code>
 *          or <code>GetAuthorizationToken</code> is called. If <code>login</code> or <code>GetAuthorizationToken</code> is called while
 *          assuming a role, the token lifetime is independent of the maximum session duration
 *          of the role. For example, if you call <code>sts assume-role</code> and specify a session duration of 15 minutes, then
 *          generate a CodeArtifact authorization token, the token will be valid for the full authorization period
 *          even though this is longer than the 15-minute session duration.</p>
 *             <p>See
 *          <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a>
 *          for more information on controlling session duration. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetAuthorizationTokenCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetAuthorizationTokenCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new GetAuthorizationTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAuthorizationTokenCommandInput} for command's `input` shape.
 * @see {@link GetAuthorizationTokenCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAuthorizationTokenCommand = /** @class */ (function (_super) {
    __extends(GetAuthorizationTokenCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAuthorizationTokenCommand(input) {
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
    GetAuthorizationTokenCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "GetAuthorizationTokenCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAuthorizationTokenRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAuthorizationTokenResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAuthorizationTokenCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetAuthorizationTokenCommand(input, context);
    };
    GetAuthorizationTokenCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetAuthorizationTokenCommand(output, context);
    };
    return GetAuthorizationTokenCommand;
}($Command));
export { GetAuthorizationTokenCommand };
//# sourceMappingURL=GetAuthorizationTokenCommand.js.map