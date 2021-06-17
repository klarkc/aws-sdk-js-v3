import { __extends } from "tslib";
import { UpdateAliasRequest } from "../models/models_0";
import { deserializeAws_json1_1UpdateAliasCommand, serializeAws_json1_1UpdateAliasCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates an existing AWS KMS alias with a different customer master key (CMK). Each alias
 *       is associated with only one CMK at a time, although a CMK can have multiple aliases. The alias
 *       and the CMK must be in the same AWS account and region.</p>
 *          <p>The current and new CMK must be the same type (both symmetric or both asymmetric), and
 *       they must have the same key usage (<code>ENCRYPT_DECRYPT</code> or <code>SIGN_VERIFY</code>).
 *       This restriction prevents errors in code that uses aliases. If you must assign an alias to a
 *       different type of CMK, use <a>DeleteAlias</a> to delete the old alias and <a>CreateAlias</a> to create a new alias.</p>
 *          <p>You cannot use <code>UpdateAlias</code> to change an alias name. To change an alias name,
 *       use <a>DeleteAlias</a> to delete the old alias and <a>CreateAlias</a> to
 *       create a new alias.</p>
 *          <p>Because an alias is not a property of a CMK, you can create, update, and delete the
 *       aliases of a CMK without affecting the CMK. Also, aliases do not appear in the response from
 *       the <a>DescribeKey</a> operation. To get the aliases of all CMKs in the account,
 *       use the <a>ListAliases</a> operation. </p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a CMK in a different AWS account. </p>
 *          <p>
 *             <b>Required permissions</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateAlias</a> on the alias (IAM policy).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateAlias</a> on the current CMK (key policy).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateAlias</a> on the new CMK (key policy).</p>
 *             </li>
 *          </ul>
 *          <p>For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html#alias-access">Controlling access to aliases</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListAliases</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, UpdateAliasCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, UpdateAliasCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new UpdateAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateAliasCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAliasCommand = /** @class */ (function (_super) {
    __extends(UpdateAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAliasCommand(input) {
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
    UpdateAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "UpdateAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateAliasCommand(input, context);
    };
    UpdateAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateAliasCommand(output, context);
    };
    return UpdateAliasCommand;
}($Command));
export { UpdateAliasCommand };
//# sourceMappingURL=UpdateAliasCommand.js.map