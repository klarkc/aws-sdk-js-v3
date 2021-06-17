import { __extends } from "tslib";
import { ListKeyPoliciesRequest, ListKeyPoliciesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListKeyPoliciesCommand, serializeAws_json1_1ListKeyPoliciesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the names of the key policies that are attached to a customer master key (CMK). This
 *       operation is designed to get policy names that you can use in a <a>GetKeyPolicy</a>
 *       operation. However, the only valid policy name is <code>default</code>. </p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a CMK in a different AWS account.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListKeyPolicies</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GetKeyPolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>PutKeyPolicy</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ListKeyPoliciesCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ListKeyPoliciesCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new ListKeyPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListKeyPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListKeyPoliciesCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListKeyPoliciesCommand = /** @class */ (function (_super) {
    __extends(ListKeyPoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListKeyPoliciesCommand(input) {
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
    ListKeyPoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "ListKeyPoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListKeyPoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListKeyPoliciesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListKeyPoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListKeyPoliciesCommand(input, context);
    };
    ListKeyPoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListKeyPoliciesCommand(output, context);
    };
    return ListKeyPoliciesCommand;
}($Command));
export { ListKeyPoliciesCommand };
//# sourceMappingURL=ListKeyPoliciesCommand.js.map