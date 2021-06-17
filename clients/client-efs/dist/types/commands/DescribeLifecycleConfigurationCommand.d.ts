import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { DescribeLifecycleConfigurationRequest, LifecycleConfigurationDescription } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeLifecycleConfigurationCommandInput extends DescribeLifecycleConfigurationRequest {
}
export interface DescribeLifecycleConfigurationCommandOutput extends LifecycleConfigurationDescription, __MetadataBearer {
}
/**
 * <p>Returns the current <code>LifecycleConfiguration</code> object for the specified Amazon
 *       EFS file system. EFS lifecycle management uses the <code>LifecycleConfiguration</code> object
 *       to identify which files to move to the EFS Infrequent Access (IA) storage class. For a file system
 *       without a <code>LifecycleConfiguration</code> object, the call returns an empty array in the
 *       response.</p>
 *          <p>This operation requires permissions for the
 *         <code>elasticfilesystem:DescribeLifecycleConfiguration</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeLifecycleConfigurationCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeLifecycleConfigurationCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DescribeLifecycleConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLifecycleConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeLifecycleConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeLifecycleConfigurationCommand extends $Command<DescribeLifecycleConfigurationCommandInput, DescribeLifecycleConfigurationCommandOutput, EFSClientResolvedConfig> {
    readonly input: DescribeLifecycleConfigurationCommandInput;
    constructor(input: DescribeLifecycleConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EFSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLifecycleConfigurationCommandInput, DescribeLifecycleConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
