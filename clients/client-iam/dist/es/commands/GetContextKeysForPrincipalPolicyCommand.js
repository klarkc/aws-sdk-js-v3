import { __extends } from "tslib";
import { GetContextKeysForPolicyResponse, GetContextKeysForPrincipalPolicyRequest } from "../models/models_0";
import { deserializeAws_queryGetContextKeysForPrincipalPolicyCommand, serializeAws_queryGetContextKeysForPrincipalPolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of all of the context keys referenced in all the IAM policies that are
 *             attached to the specified IAM entity. The entity can be an IAM user, group, or role.
 *             If you specify a user, then the request also includes all of the policies attached to
 *             groups that the user is a member of.</p>
 *         <p>You can optionally include a list of one or more additional policies, specified as
 *             strings. If you want to include <i>only</i> a list of policies by string,
 *             use <a>GetContextKeysForCustomPolicy</a> instead.</p>
 *         <p>
 *             <b>Note:</b> This operation discloses information about the
 *             permissions granted to other users. If you do not want users to see other user's
 *             permissions, then consider allowing them to use <a>GetContextKeysForCustomPolicy</a> instead.</p>
 *         <p>Context keys are variables maintained by AWS and its services that provide details
 *             about the context of an API query request. Context keys can be evaluated by testing
 *             against a value in an IAM policy. Use <a>GetContextKeysForPrincipalPolicy</a> to understand what key names and values you must supply when you call <a>SimulatePrincipalPolicy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetContextKeysForPrincipalPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetContextKeysForPrincipalPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetContextKeysForPrincipalPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContextKeysForPrincipalPolicyCommandInput} for command's `input` shape.
 * @see {@link GetContextKeysForPrincipalPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetContextKeysForPrincipalPolicyCommand = /** @class */ (function (_super) {
    __extends(GetContextKeysForPrincipalPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetContextKeysForPrincipalPolicyCommand(input) {
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
    GetContextKeysForPrincipalPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "GetContextKeysForPrincipalPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetContextKeysForPrincipalPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetContextKeysForPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetContextKeysForPrincipalPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetContextKeysForPrincipalPolicyCommand(input, context);
    };
    GetContextKeysForPrincipalPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetContextKeysForPrincipalPolicyCommand(output, context);
    };
    return GetContextKeysForPrincipalPolicyCommand;
}($Command));
export { GetContextKeysForPrincipalPolicyCommand };
//# sourceMappingURL=GetContextKeysForPrincipalPolicyCommand.js.map