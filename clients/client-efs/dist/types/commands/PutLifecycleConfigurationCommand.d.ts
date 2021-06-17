import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { LifecycleConfigurationDescription, PutLifecycleConfigurationRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutLifecycleConfigurationCommandInput extends PutLifecycleConfigurationRequest {
}
export interface PutLifecycleConfigurationCommandOutput extends LifecycleConfigurationDescription, __MetadataBearer {
}
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
export declare class PutLifecycleConfigurationCommand extends $Command<PutLifecycleConfigurationCommandInput, PutLifecycleConfigurationCommandOutput, EFSClientResolvedConfig> {
    readonly input: PutLifecycleConfigurationCommandInput;
    constructor(input: PutLifecycleConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EFSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutLifecycleConfigurationCommandInput, PutLifecycleConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
