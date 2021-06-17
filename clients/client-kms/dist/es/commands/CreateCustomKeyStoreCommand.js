import { __extends } from "tslib";
import { CreateCustomKeyStoreRequest, CreateCustomKeyStoreResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateCustomKeyStoreCommand, serializeAws_json1_1CreateCustomKeyStoreCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> that is associated with an <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/clusters.html">AWS CloudHSM cluster</a> that you own and
 *     manage.</p>
 *          <p>This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Custom Key Store feature</a> feature in AWS KMS, which
 * combines the convenience and extensive integration of AWS KMS with the isolation and control of a
 * single-tenant key store.</p>
 *          <p>Before you create the custom key store, you must assemble
 *       the required elements, including an AWS CloudHSM cluster that fulfills the requirements for a custom
 *       key store. For details about the required elements, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keystore.html#before-keystore">Assemble the Prerequisites</a>
 *       in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>When the operation completes successfully, it returns the ID of the new custom key store.
 *       Before you can use your new custom key store, you need to use the <a>ConnectCustomKeyStore</a> operation to connect the new key store to its AWS CloudHSM
 *       cluster. Even if you are not going to use your custom key store immediately, you might want to
 *       connect it to verify that all settings are correct and then disconnect it until you are ready
 *       to use it.</p>
 *          <p>For help with failures, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting a Custom Key Store</a> in the
 *       <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different AWS account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateCustomKeyStore</a> (IAM policy).</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ConnectCustomKeyStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteCustomKeyStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeCustomKeyStores</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DisconnectCustomKeyStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateCustomKeyStore</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, CreateCustomKeyStoreCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, CreateCustomKeyStoreCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new CreateCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomKeyStoreCommandInput} for command's `input` shape.
 * @see {@link CreateCustomKeyStoreCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCustomKeyStoreCommand = /** @class */ (function (_super) {
    __extends(CreateCustomKeyStoreCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCustomKeyStoreCommand(input) {
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
    CreateCustomKeyStoreCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "CreateCustomKeyStoreCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCustomKeyStoreRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCustomKeyStoreResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCustomKeyStoreCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateCustomKeyStoreCommand(input, context);
    };
    CreateCustomKeyStoreCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateCustomKeyStoreCommand(output, context);
    };
    return CreateCustomKeyStoreCommand;
}($Command));
export { CreateCustomKeyStoreCommand };
//# sourceMappingURL=CreateCustomKeyStoreCommand.js.map