import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateDiskFromSnapshotRequest, CreateDiskFromSnapshotResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDiskFromSnapshotCommandInput extends CreateDiskFromSnapshotRequest {
}
export interface CreateDiskFromSnapshotCommandOutput extends CreateDiskFromSnapshotResult, __MetadataBearer {
}
/**
 * <p>Creates a block storage disk from a manual or automatic snapshot of a disk. The resulting
 *       disk can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g.,
 *         <code>us-east-2a</code>).</p>
 *          <p>The <code>create disk from snapshot</code> operation supports tag-based access control via
 *       request tags and resource tags applied to the resource identified by <code>disk snapshot
 *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateDiskFromSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateDiskFromSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateDiskFromSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDiskFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateDiskFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDiskFromSnapshotCommand extends $Command<CreateDiskFromSnapshotCommandInput, CreateDiskFromSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateDiskFromSnapshotCommandInput;
    constructor(input: CreateDiskFromSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDiskFromSnapshotCommandInput, CreateDiskFromSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
