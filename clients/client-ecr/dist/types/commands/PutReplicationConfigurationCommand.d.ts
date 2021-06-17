import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { PutReplicationConfigurationRequest, PutReplicationConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutReplicationConfigurationCommandInput extends PutReplicationConfigurationRequest {
}
export interface PutReplicationConfigurationCommandOutput extends PutReplicationConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Creates or updates the replication configuration for a registry. The existing
 *             replication configuration for a repository can be retrieved with the <a>DescribeRegistry</a> API action. The first time the
 *             PutReplicationConfiguration API is called, a service-linked IAM role is created in
 *             your account for the replication process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html">Using
 *                 Service-Linked Roles for Amazon ECR</a> in the
 *             <i>Amazon Elastic Container Registry User Guide</i>.</p>
 *         <note>
 *             <p>When configuring cross-account replication, the destination account must grant the
 *                 source account permission to replicate. This permission is controlled using a
 *                 registry permissions policy. For more information, see <a>PutRegistryPolicy</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutReplicationConfigurationCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutReplicationConfigurationCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new PutReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutReplicationConfigurationCommand extends $Command<PutReplicationConfigurationCommandInput, PutReplicationConfigurationCommandOutput, ECRClientResolvedConfig> {
    readonly input: PutReplicationConfigurationCommandInput;
    constructor(input: PutReplicationConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutReplicationConfigurationCommandInput, PutReplicationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
