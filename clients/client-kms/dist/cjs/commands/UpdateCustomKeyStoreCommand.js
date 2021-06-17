"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomKeyStoreCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Changes the properties of a custom key store. Use the <code>CustomKeyStoreId</code>
 *       parameter to identify the custom key store you want to edit. Use the remaining parameters to
 *       change the properties of the custom key store.</p>
 *          <p>You can only update a custom key store that is disconnected. To disconnect the custom key
 *       store, use <a>DisconnectCustomKeyStore</a>. To reconnect the custom key store after
 *       the update completes, use <a>ConnectCustomKeyStore</a>. To find the connection
 *       state of a custom key store, use the <a>DescribeCustomKeyStores</a>
 *       operation.</p>
 *          <p>Use the parameters of <code>UpdateCustomKeyStore</code> to edit your keystore
 *       settings.</p>
 *          <ul>
 *             <li>
 *                <p>Use the <b>NewCustomKeyStoreName</b> parameter to change the
 *           friendly name of the custom key store to the value that you specify.</p>
 *                <p> </p>
 *             </li>
 *             <li>
 *                <p>Use the <b>KeyStorePassword</b> parameter tell AWS KMS the
 *           current password of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-concepts.html#concept-kmsuser">
 *                      <code>kmsuser</code> crypto
 *             user (CU)</a> in the associated AWS CloudHSM cluster. You can use this parameter to <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-password">fix
 *             connection failures</a> that occur when AWS KMS cannot log into the associated cluster
 *           because the <code>kmsuser</code> password has changed. This value does not change the
 *           password in the AWS CloudHSM cluster.</p>
 *                <p> </p>
 *             </li>
 *             <li>
 *                <p>Use the <b>CloudHsmClusterId</b> parameter to associate the
 *           custom key store with a different, but related, AWS CloudHSM cluster. You can use this parameter
 *           to repair a custom key store if its AWS CloudHSM cluster becomes corrupted or is deleted, or when
 *           you need to create or restore a cluster from a backup. </p>
 *             </li>
 *          </ul>
 *          <p>If the operation succeeds, it returns a JSON object with no
 * properties.</p>
 *          <p>This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Custom Key Store feature</a> feature in AWS KMS, which
 * combines the convenience and extensive integration of AWS KMS with the isolation and control of a
 * single-tenant key store.</p>
 *
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different AWS account. </p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateCustomKeyStore</a> (IAM policy)</p>
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
 *                   <a>DisconnectCustomKeyStore</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, UpdateCustomKeyStoreCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, UpdateCustomKeyStoreCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new UpdateCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCustomKeyStoreCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomKeyStoreCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateCustomKeyStoreCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KMSClient";
        const commandName = "UpdateCustomKeyStoreCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateCustomKeyStoreRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateCustomKeyStoreResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateCustomKeyStoreCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateCustomKeyStoreCommand(output, context);
    }
}
exports.UpdateCustomKeyStoreCommand = UpdateCustomKeyStoreCommand;
//# sourceMappingURL=UpdateCustomKeyStoreCommand.js.map