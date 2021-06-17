import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListArtifactsRequest, ListArtifactsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListArtifactsCommandInput extends ListArtifactsRequest {
}
export interface ListArtifactsCommandOutput extends ListArtifactsResult, __MetadataBearer {
}
/**
 * <p>Gets information about artifacts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListArtifactsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListArtifactsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListArtifactsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListArtifactsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListArtifactsCommand extends $Command<ListArtifactsCommandInput, ListArtifactsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListArtifactsCommandInput;
    constructor(input: ListArtifactsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListArtifactsCommandInput, ListArtifactsCommandOutput>;
    private serialize;
    private deserialize;
}
