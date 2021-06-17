import { __extends } from "tslib";
import { ListGrantsRequest, ListGrantsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListGrantsCommand, serializeAws_json1_1ListGrantsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of all grants for the specified customer master key (CMK). </p>
 *          <p>You must specify the CMK in all requests. You can filter the grant list by grant ID
 *       or grantee principal.</p>
 *          <note>
 *             <p>The <code>GranteePrincipal</code> field in the <code>ListGrants</code> response usually contains the
 *         user or role designated as the grantee principal in the grant. However, when the grantee
 *         principal in the grant is an AWS service, the <code>GranteePrincipal</code> field contains
 *         the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services">service
 *           principal</a>, which might represent several different grantee principals.</p>
 *          </note>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation on a CMK in a different AWS account, specify the key
 *   ARN in the value of the <code>KeyId</code> parameter.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListGrants</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateGrant</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListRetirableGrants</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RetireGrant</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RevokeGrant</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ListGrantsCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ListGrantsCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new ListGrantsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGrantsCommandInput} for command's `input` shape.
 * @see {@link ListGrantsCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGrantsCommand = /** @class */ (function (_super) {
    __extends(ListGrantsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListGrantsCommand(input) {
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
    ListGrantsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "ListGrantsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListGrantsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListGrantsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListGrantsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListGrantsCommand(input, context);
    };
    ListGrantsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListGrantsCommand(output, context);
    };
    return ListGrantsCommand;
}($Command));
export { ListGrantsCommand };
//# sourceMappingURL=ListGrantsCommand.js.map