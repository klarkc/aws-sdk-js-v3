import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { StopDataSourceSyncJobRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopDataSourceSyncJobCommandInput extends StopDataSourceSyncJobRequest {
}
export interface StopDataSourceSyncJobCommandOutput extends __MetadataBearer {
}
/**
 * <p>Stops a running synchronization job. You can't stop a scheduled
 *       synchronization job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, StopDataSourceSyncJobCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, StopDataSourceSyncJobCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new StopDataSourceSyncJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDataSourceSyncJobCommandInput} for command's `input` shape.
 * @see {@link StopDataSourceSyncJobCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopDataSourceSyncJobCommand extends $Command<StopDataSourceSyncJobCommandInput, StopDataSourceSyncJobCommandOutput, KendraClientResolvedConfig> {
    readonly input: StopDataSourceSyncJobCommandInput;
    constructor(input: StopDataSourceSyncJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopDataSourceSyncJobCommandInput, StopDataSourceSyncJobCommandOutput>;
    private serialize;
    private deserialize;
}
