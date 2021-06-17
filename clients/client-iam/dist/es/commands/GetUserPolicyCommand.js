import { __extends } from "tslib";
import { GetUserPolicyRequest, GetUserPolicyResponse } from "../models/models_0";
import { deserializeAws_queryGetUserPolicyCommand, serializeAws_queryGetUserPolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the specified inline policy document that is embedded in the specified IAM
 *             user.</p>
 *         <note>
 *             <p>Policies returned by this operation are URL-encoded compliant
 *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
 *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
 *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
 *     the Java SDK. Other languages and SDKs provide similar functionality.</p>
 *          </note>
 *         <p>An IAM user can also have managed policies attached to it. To retrieve a managed
 *             policy document that is attached to a user, use <a>GetPolicy</a> to determine
 *             the policy's default version. Then use <a>GetPolicyVersion</a> to retrieve
 *             the policy document.</p>
 *         <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetUserPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetUserPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetUserPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUserPolicyCommandInput} for command's `input` shape.
 * @see {@link GetUserPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetUserPolicyCommand = /** @class */ (function (_super) {
    __extends(GetUserPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetUserPolicyCommand(input) {
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
    GetUserPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "GetUserPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetUserPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetUserPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetUserPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetUserPolicyCommand(input, context);
    };
    GetUserPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetUserPolicyCommand(output, context);
    };
    return GetUserPolicyCommand;
}($Command));
export { GetUserPolicyCommand };
//# sourceMappingURL=GetUserPolicyCommand.js.map