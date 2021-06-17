import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { DisassociateCreatedArtifactRequest, DisassociateCreatedArtifactResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateCreatedArtifactCommandInput extends DisassociateCreatedArtifactRequest {
}
export interface DisassociateCreatedArtifactCommandOutput extends DisassociateCreatedArtifactResult, __MetadataBearer {
}
/**
 * <p>Disassociates a created artifact of an AWS resource with a migration task performed by a
 *          migration tool that was previously associated. This API has the following traits:</p>
 *          <ul>
 *             <li>
 *                <p>A migration user can call the <code>DisassociateCreatedArtifacts</code> operation
 *                to disassociate a created AWS Artifact from a migration task.</p>
 *             </li>
 *             <li>
 *                <p>The created artifact name must be provided in ARN (Amazon Resource Name) format
 *                which will contain information about type and region; for example:
 *                   <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p>
 *             </li>
 *             <li>
 *                <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance,
 *                or RDS instance, etc.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, DisassociateCreatedArtifactCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, DisassociateCreatedArtifactCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new DisassociateCreatedArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateCreatedArtifactCommandInput} for command's `input` shape.
 * @see {@link DisassociateCreatedArtifactCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateCreatedArtifactCommand extends $Command<DisassociateCreatedArtifactCommandInput, DisassociateCreatedArtifactCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: DisassociateCreatedArtifactCommandInput;
    constructor(input: DisassociateCreatedArtifactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateCreatedArtifactCommandInput, DisassociateCreatedArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
