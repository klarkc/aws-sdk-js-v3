import { __extends } from "tslib";
import { GetRolePolicyRequest, GetRolePolicyResponse } from "../models/models_0";
import { deserializeAws_queryGetRolePolicyCommand, serializeAws_queryGetRolePolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the specified inline policy document that is embedded with the specified
 *             IAM role.</p>
 *         <note>
 *             <p>Policies returned by this operation are URL-encoded compliant
 *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
 *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
 *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
 *     the Java SDK. Other languages and SDKs provide similar functionality.</p>
 *          </note>
 *         <p>An IAM role can also have managed policies attached to it. To retrieve a managed
 *             policy document that is attached to a role, use <a>GetPolicy</a> to determine
 *             the policy's default version, then use <a>GetPolicyVersion</a> to retrieve
 *             the policy document.</p>
 *         <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *         <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and
 *                 federate identities</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetRolePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetRolePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetRolePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRolePolicyCommandInput} for command's `input` shape.
 * @see {@link GetRolePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRolePolicyCommand = /** @class */ (function (_super) {
    __extends(GetRolePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRolePolicyCommand(input) {
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
    GetRolePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "GetRolePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRolePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRolePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRolePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetRolePolicyCommand(input, context);
    };
    GetRolePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetRolePolicyCommand(output, context);
    };
    return GetRolePolicyCommand;
}($Command));
export { GetRolePolicyCommand };
//# sourceMappingURL=GetRolePolicyCommand.js.map