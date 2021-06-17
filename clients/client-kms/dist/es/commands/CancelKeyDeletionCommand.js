import { __extends } from "tslib";
import { CancelKeyDeletionRequest, CancelKeyDeletionResponse } from "../models/models_0";
import { deserializeAws_json1_1CancelKeyDeletionCommand, serializeAws_json1_1CancelKeyDeletionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels the deletion of a customer master key (CMK). When this operation succeeds, the key
 *       state of the CMK is <code>Disabled</code>. To enable the CMK, use <a>EnableKey</a>. </p>
 *          <p>For more information about scheduling and canceling deletion of a CMK, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html">Deleting Customer Master
 *         Keys</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a CMK in a different AWS account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CancelKeyDeletion</a> (key policy)</p>
 *          <p>
 *             <b>Related operations</b>: <a>ScheduleKeyDeletion</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, CancelKeyDeletionCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, CancelKeyDeletionCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new CancelKeyDeletionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelKeyDeletionCommandInput} for command's `input` shape.
 * @see {@link CancelKeyDeletionCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelKeyDeletionCommand = /** @class */ (function (_super) {
    __extends(CancelKeyDeletionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelKeyDeletionCommand(input) {
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
    CancelKeyDeletionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "CancelKeyDeletionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelKeyDeletionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelKeyDeletionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelKeyDeletionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CancelKeyDeletionCommand(input, context);
    };
    CancelKeyDeletionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CancelKeyDeletionCommand(output, context);
    };
    return CancelKeyDeletionCommand;
}($Command));
export { CancelKeyDeletionCommand };
//# sourceMappingURL=CancelKeyDeletionCommand.js.map