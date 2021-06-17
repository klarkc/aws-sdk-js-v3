import { __extends } from "tslib";
import { DeleteImportedKeyMaterialRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteImportedKeyMaterialCommand, serializeAws_json1_1DeleteImportedKeyMaterialCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes key material that you previously imported. This operation makes the specified
 *       customer master key (CMK) unusable. For more information about importing key material into
 *       AWS KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key
 *         Material</a> in the <i>AWS Key Management Service Developer Guide</i>. </p>
 *          <p>When the specified CMK is in the <code>PendingDeletion</code> state, this operation does
 *       not change the CMK's state. Otherwise, it changes the CMK's state to
 *         <code>PendingImport</code>.</p>
 *          <p>After you delete key material, you can use <a>ImportKeyMaterial</a> to reimport
 *       the same key material into the CMK.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a CMK in a different AWS account.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DeleteImportedKeyMaterial</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GetParametersForImport</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ImportKeyMaterial</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, DeleteImportedKeyMaterialCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DeleteImportedKeyMaterialCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new DeleteImportedKeyMaterialCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteImportedKeyMaterialCommandInput} for command's `input` shape.
 * @see {@link DeleteImportedKeyMaterialCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteImportedKeyMaterialCommand = /** @class */ (function (_super) {
    __extends(DeleteImportedKeyMaterialCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteImportedKeyMaterialCommand(input) {
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
    DeleteImportedKeyMaterialCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "DeleteImportedKeyMaterialCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteImportedKeyMaterialRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteImportedKeyMaterialCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteImportedKeyMaterialCommand(input, context);
    };
    DeleteImportedKeyMaterialCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteImportedKeyMaterialCommand(output, context);
    };
    return DeleteImportedKeyMaterialCommand;
}($Command));
export { DeleteImportedKeyMaterialCommand };
//# sourceMappingURL=DeleteImportedKeyMaterialCommand.js.map