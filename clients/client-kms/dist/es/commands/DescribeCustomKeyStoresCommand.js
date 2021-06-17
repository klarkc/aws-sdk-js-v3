import { __extends } from "tslib";
import { DescribeCustomKeyStoresRequest, DescribeCustomKeyStoresResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeCustomKeyStoresCommand, serializeAws_json1_1DescribeCustomKeyStoresCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> in the account and region.</p>
 *          <p>This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Custom Key Store feature</a> feature in AWS KMS, which
 * combines the convenience and extensive integration of AWS KMS with the isolation and control of a
 * single-tenant key store.</p>
 *          <p>By default, this operation returns information about all custom key
 *       stores in the account and region. To get only information about a particular custom key store,
 *       use either the <code>CustomKeyStoreName</code> or <code>CustomKeyStoreId</code> parameter (but
 *       not both).</p>
 *          <p>To determine whether the custom key store is connected to its AWS CloudHSM cluster, use the
 *         <code>ConnectionState</code> element in the response. If an attempt to connect the custom
 *       key store failed, the <code>ConnectionState</code> value is <code>FAILED</code> and the
 *         <code>ConnectionErrorCode</code> element in the response indicates the cause of the failure.
 *       For help interpreting the <code>ConnectionErrorCode</code>, see <a>CustomKeyStoresListEntry</a>.</p>
 *          <p>Custom key stores have a <code>DISCONNECTED</code> connection state if the key store has
 *       never been connected or you use the <a>DisconnectCustomKeyStore</a> operation to
 *       disconnect it. If your custom key store state is <code>CONNECTED</code> but you are having
 *       trouble using it, make sure that its associated AWS CloudHSM cluster is active and contains the
 *       minimum number of HSMs required for the operation, if any.</p>
 *          <p> For help repairing your custom key store, see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting Custom Key Stores</a> topic in the
 *       <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different AWS account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DescribeCustomKeyStores</a> (IAM policy)</p>
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
 * import { KMSClient, DescribeCustomKeyStoresCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DescribeCustomKeyStoresCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new DescribeCustomKeyStoresCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCustomKeyStoresCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomKeyStoresCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCustomKeyStoresCommand = /** @class */ (function (_super) {
    __extends(DescribeCustomKeyStoresCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCustomKeyStoresCommand(input) {
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
    DescribeCustomKeyStoresCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "DescribeCustomKeyStoresCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCustomKeyStoresRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCustomKeyStoresResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCustomKeyStoresCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeCustomKeyStoresCommand(input, context);
    };
    DescribeCustomKeyStoresCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeCustomKeyStoresCommand(output, context);
    };
    return DescribeCustomKeyStoresCommand;
}($Command));
export { DescribeCustomKeyStoresCommand };
//# sourceMappingURL=DescribeCustomKeyStoresCommand.js.map