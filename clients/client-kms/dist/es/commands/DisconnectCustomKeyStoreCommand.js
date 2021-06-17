import { __extends } from "tslib";
import { DisconnectCustomKeyStoreRequest, DisconnectCustomKeyStoreResponse } from "../models/models_0";
import { deserializeAws_json1_1DisconnectCustomKeyStoreCommand, serializeAws_json1_1DisconnectCustomKeyStoreCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disconnects the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> from its associated AWS CloudHSM cluster. While a custom key
 *       store is disconnected, you can manage the custom key store and its customer master keys
 *       (CMKs), but you cannot create or use CMKs in the custom key store. You can reconnect the
 *       custom key store at any time.</p>
 *          <note>
 *             <p>While a custom key store is disconnected, all attempts to create customer master keys
 *         (CMKs) in the custom key store or to use existing CMKs in <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> will
 *         fail. This action can prevent users from storing and accessing sensitive data.</p>
 *          </note>
 *          <p></p>
 *          <p>To find the connection state of a custom key store, use the <a>DescribeCustomKeyStores</a> operation. To reconnect a custom key store, use the
 *         <a>ConnectCustomKeyStore</a> operation.</p>
 *          <p>If the operation succeeds, it returns a JSON object with no
 * properties.</p>
 *          <p>This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Custom Key Store feature</a> feature in AWS KMS, which
 * combines the convenience and extensive integration of AWS KMS with the isolation and control of a
 * single-tenant key store.</p>
 *
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different AWS account.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DisconnectCustomKeyStore</a> (IAM policy)</p>
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
 *                   <a>CreateCustomKeyStore</a>
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
 *                   <a>UpdateCustomKeyStore</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, DisconnectCustomKeyStoreCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DisconnectCustomKeyStoreCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new DisconnectCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisconnectCustomKeyStoreCommandInput} for command's `input` shape.
 * @see {@link DisconnectCustomKeyStoreCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisconnectCustomKeyStoreCommand = /** @class */ (function (_super) {
    __extends(DisconnectCustomKeyStoreCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisconnectCustomKeyStoreCommand(input) {
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
    DisconnectCustomKeyStoreCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "DisconnectCustomKeyStoreCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisconnectCustomKeyStoreRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisconnectCustomKeyStoreResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisconnectCustomKeyStoreCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisconnectCustomKeyStoreCommand(input, context);
    };
    DisconnectCustomKeyStoreCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisconnectCustomKeyStoreCommand(output, context);
    };
    return DisconnectCustomKeyStoreCommand;
}($Command));
export { DisconnectCustomKeyStoreCommand };
//# sourceMappingURL=DisconnectCustomKeyStoreCommand.js.map