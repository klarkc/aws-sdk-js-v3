import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetInstanceSnapshotRequest, GetInstanceSnapshotResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetInstanceSnapshotCommandInput extends GetInstanceSnapshotRequest {
}
export interface GetInstanceSnapshotCommandOutput extends GetInstanceSnapshotResult, __MetadataBearer {
}
/**
 * <p>Returns information about a specific instance snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetInstanceSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetInstanceSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetInstanceSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstanceSnapshotCommandInput} for command's `input` shape.
 * @see {@link GetInstanceSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInstanceSnapshotCommand extends $Command<GetInstanceSnapshotCommandInput, GetInstanceSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetInstanceSnapshotCommandInput;
    constructor(input: GetInstanceSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInstanceSnapshotCommandInput, GetInstanceSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
