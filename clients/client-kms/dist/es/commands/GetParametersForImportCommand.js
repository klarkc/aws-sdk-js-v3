import { __extends } from "tslib";
import { GetParametersForImportRequest, GetParametersForImportResponse } from "../models/models_0";
import { deserializeAws_json1_1GetParametersForImportCommand, serializeAws_json1_1GetParametersForImportCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the items you need to import key material into a symmetric, customer managed
 *       customer master key (CMK). For more information about importing key material into AWS KMS, see
 *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key
 *         Material</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>This operation returns a public key and an import token. Use the public key to encrypt the
 *       symmetric key material. Store the import token to send with a subsequent <a>ImportKeyMaterial</a> request.</p>
 *          <p>You must specify the key ID of the symmetric CMK into which you will import key material.
 *       This CMK's <code>Origin</code> must be <code>EXTERNAL</code>. You must also specify the
 *       wrapping algorithm and type of wrapping key (public key) that you will use to encrypt the key
 *       material. You cannot perform this operation on an asymmetric CMK or on any CMK in a different AWS account.</p>
 *          <p>To import key material, you must use the public key and import token from the same
 *       response. These items are valid for 24 hours. The expiration date and time appear in the
 *         <code>GetParametersForImport</code> response. You cannot use an expired token in an <a>ImportKeyMaterial</a> request. If your key and token expire, send another
 *         <code>GetParametersForImport</code> request.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a CMK in a different AWS account.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetParametersForImport</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ImportKeyMaterial</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteImportedKeyMaterial</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GetParametersForImportCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GetParametersForImportCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new GetParametersForImportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetParametersForImportCommandInput} for command's `input` shape.
 * @see {@link GetParametersForImportCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetParametersForImportCommand = /** @class */ (function (_super) {
    __extends(GetParametersForImportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetParametersForImportCommand(input) {
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
    GetParametersForImportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "GetParametersForImportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetParametersForImportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetParametersForImportResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetParametersForImportCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetParametersForImportCommand(input, context);
    };
    GetParametersForImportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetParametersForImportCommand(output, context);
    };
    return GetParametersForImportCommand;
}($Command));
export { GetParametersForImportCommand };
//# sourceMappingURL=GetParametersForImportCommand.js.map