import { __extends } from "tslib";
import { UpdateKeyDescriptionRequest } from "../models/models_0";
import { deserializeAws_json1_1UpdateKeyDescriptionCommand, serializeAws_json1_1UpdateKeyDescriptionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the description of a customer master key (CMK). To see the description of a CMK,
 *       use <a>DescribeKey</a>. </p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No.  You cannot perform this operation on a CMK in a different AWS account. </p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateKeyDescription</a> (key policy)</p>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeKey</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, UpdateKeyDescriptionCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, UpdateKeyDescriptionCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new UpdateKeyDescriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateKeyDescriptionCommandInput} for command's `input` shape.
 * @see {@link UpdateKeyDescriptionCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateKeyDescriptionCommand = /** @class */ (function (_super) {
    __extends(UpdateKeyDescriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateKeyDescriptionCommand(input) {
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
    UpdateKeyDescriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "UpdateKeyDescriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateKeyDescriptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateKeyDescriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateKeyDescriptionCommand(input, context);
    };
    UpdateKeyDescriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateKeyDescriptionCommand(output, context);
    };
    return UpdateKeyDescriptionCommand;
}($Command));
export { UpdateKeyDescriptionCommand };
//# sourceMappingURL=UpdateKeyDescriptionCommand.js.map