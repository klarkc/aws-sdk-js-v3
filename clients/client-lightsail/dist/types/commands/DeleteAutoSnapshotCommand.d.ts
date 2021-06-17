import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteAutoSnapshotRequest, DeleteAutoSnapshotResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAutoSnapshotCommandInput extends DeleteAutoSnapshotRequest {
}
export interface DeleteAutoSnapshotCommandOutput extends DeleteAutoSnapshotResult, __MetadataBearer {
}
/**
 * <p>Deletes an automatic snapshot of an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteAutoSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteAutoSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteAutoSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAutoSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteAutoSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAutoSnapshotCommand extends $Command<DeleteAutoSnapshotCommandInput, DeleteAutoSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteAutoSnapshotCommandInput;
    constructor(input: DeleteAutoSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAutoSnapshotCommandInput, DeleteAutoSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
