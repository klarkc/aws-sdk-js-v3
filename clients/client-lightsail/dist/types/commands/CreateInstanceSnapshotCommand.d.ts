import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateInstanceSnapshotRequest, CreateInstanceSnapshotResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateInstanceSnapshotCommandInput extends CreateInstanceSnapshotRequest {
}
export interface CreateInstanceSnapshotCommandOutput extends CreateInstanceSnapshotResult, __MetadataBearer {
}
/**
 * <p>Creates a snapshot of a specific virtual private server, or <i>instance</i>.
 *       You can use a snapshot to create a new instance that is based on that snapshot.</p>
 *          <p>The <code>create instance snapshot</code> operation supports tag-based access control via
 *       request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateInstanceSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateInstanceSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateInstanceSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInstanceSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateInstanceSnapshotCommand extends $Command<CreateInstanceSnapshotCommandInput, CreateInstanceSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateInstanceSnapshotCommandInput;
    constructor(input: CreateInstanceSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateInstanceSnapshotCommandInput, CreateInstanceSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
