import { __extends } from "tslib";
import { GetAccountAuthorizationDetailsRequest, GetAccountAuthorizationDetailsResponse } from "../models/models_0";
import { deserializeAws_queryGetAccountAuthorizationDetailsCommand, serializeAws_queryGetAccountAuthorizationDetailsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about all IAM users, groups, roles, and policies in your AWS
 *             account, including their relationships to one another. Use this operation to obtain a
 *             snapshot of the configuration of IAM permissions (users, groups, roles, and policies)
 *             in your account.</p>
 *         <note>
 *             <p>Policies returned by this operation are URL-encoded compliant
 *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
 *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
 *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
 *     the Java SDK. Other languages and SDKs provide similar functionality.</p>
 *          </note>
 *         <p>You can optionally filter the results using the <code>Filter</code> parameter. You can
 *             paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetAccountAuthorizationDetailsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetAccountAuthorizationDetailsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetAccountAuthorizationDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccountAuthorizationDetailsCommandInput} for command's `input` shape.
 * @see {@link GetAccountAuthorizationDetailsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAccountAuthorizationDetailsCommand = /** @class */ (function (_super) {
    __extends(GetAccountAuthorizationDetailsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAccountAuthorizationDetailsCommand(input) {
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
    GetAccountAuthorizationDetailsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "GetAccountAuthorizationDetailsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAccountAuthorizationDetailsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAccountAuthorizationDetailsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAccountAuthorizationDetailsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetAccountAuthorizationDetailsCommand(input, context);
    };
    GetAccountAuthorizationDetailsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetAccountAuthorizationDetailsCommand(output, context);
    };
    return GetAccountAuthorizationDetailsCommand;
}($Command));
export { GetAccountAuthorizationDetailsCommand };
//# sourceMappingURL=GetAccountAuthorizationDetailsCommand.js.map