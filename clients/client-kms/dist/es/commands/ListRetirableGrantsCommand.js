import { __extends } from "tslib";
import { ListGrantsResponse, ListRetirableGrantsRequest } from "../models/models_0";
import { deserializeAws_json1_1ListRetirableGrantsCommand, serializeAws_json1_1ListRetirableGrantsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns all grants in which the specified principal is the <code>RetiringPrincipal</code>
 *       in the grant. </p>
 *          <p>You can specify any principal in your AWS account. The grants that are returned include
 *       grants for CMKs in your AWS account and other AWS accounts.</p>
 *          <p>You might use this operation to determine which grants you may retire. To retire a grant,
 *       use the <a>RetireGrant</a> operation.</p>
 *          <p>
 *             <b>Cross-account use</b>: You must specify a principal in your
 *       AWS account. However, this operation can return grants in any AWS account. You do not need
 *         <code>kms:ListRetirableGrants</code> permission (or any other additional permission) in any
 *       AWS account other than your own.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListRetirableGrants</a> (IAM policy) in your AWS
 *       account.</p>
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
 *                   <a>ListGrants</a>
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
 * import { KMSClient, ListRetirableGrantsCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ListRetirableGrantsCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new ListRetirableGrantsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRetirableGrantsCommandInput} for command's `input` shape.
 * @see {@link ListRetirableGrantsCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRetirableGrantsCommand = /** @class */ (function (_super) {
    __extends(ListRetirableGrantsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRetirableGrantsCommand(input) {
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
    ListRetirableGrantsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "ListRetirableGrantsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRetirableGrantsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListGrantsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRetirableGrantsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListRetirableGrantsCommand(input, context);
    };
    ListRetirableGrantsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListRetirableGrantsCommand(output, context);
    };
    return ListRetirableGrantsCommand;
}($Command));
export { ListRetirableGrantsCommand };
//# sourceMappingURL=ListRetirableGrantsCommand.js.map