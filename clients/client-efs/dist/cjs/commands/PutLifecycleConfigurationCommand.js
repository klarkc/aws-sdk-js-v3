"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutLifecycleConfigurationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Enables lifecycle management by creating a new <code>LifecycleConfiguration</code>
 *       object. A <code>LifecycleConfiguration</code> object defines when files in an Amazon EFS file
 *       system are automatically transitioned to the lower-cost EFS Infrequent Access (IA) storage class.
 *       A <code>LifecycleConfiguration</code> applies to all files in a file system.</p>
 *          <p>Each Amazon EFS file system supports one lifecycle configuration, which applies to all files in the file system. If a
 *         <code>LifecycleConfiguration</code> object already exists for the specified file system, a
 *         <code>PutLifecycleConfiguration</code> call modifies the existing configuration. A
 *         <code>PutLifecycleConfiguration</code> call with an empty <code>LifecyclePolicies</code>
 *       array in the request body deletes any existing <code>LifecycleConfiguration</code> and
 *       disables lifecycle management.</p>
 *
 *
 *          <p>In the request, specify the following: </p>
 *          <ul>
 *             <li>
 *                <p>The ID for the file system for which you are enabling, disabling, or modifying lifecycle management.</p>
 *             </li>
 *             <li>
 *                <p>A <code>LifecyclePolicies</code> array of <code>LifecyclePolicy</code> objects that
 *           define when files are moved to the IA storage class. The array can contain only one
 *             <code>LifecyclePolicy</code> item.</p>
 *             </li>
 *          </ul>
 *
 *          <p>This operation requires permissions for the
 *         <code>elasticfilesystem:PutLifecycleConfiguration</code> operation.</p>
 *          <p>To apply a <code>LifecycleConfiguration</code> object to an encrypted file system, you
 *       need the same AWS Key Management Service (AWS KMS) permissions as when you created the encrypted
 *       file system. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, PutLifecycleConfigurationCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, PutLifecycleConfigurationCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new PutLifecycleConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutLifecycleConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutLifecycleConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutLifecycleConfigurationCommand extends smithy_client_1.Command {
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
        const clientName = "EFSClient";
        const commandName = "PutLifecycleConfigurationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutLifecycleConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.LifecycleConfigurationDescription.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1PutLifecycleConfigurationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1PutLifecycleConfigurationCommand(output, context);
    }
}
exports.PutLifecycleConfigurationCommand = PutLifecycleConfigurationCommand;
//# sourceMappingURL=PutLifecycleConfigurationCommand.js.map