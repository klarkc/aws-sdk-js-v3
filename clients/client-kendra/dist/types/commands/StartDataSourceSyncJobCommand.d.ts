import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { StartDataSourceSyncJobRequest, StartDataSourceSyncJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartDataSourceSyncJobCommandInput extends StartDataSourceSyncJobRequest {
}
export interface StartDataSourceSyncJobCommandOutput extends StartDataSourceSyncJobResponse, __MetadataBearer {
}
/**
 * <p>Starts a synchronization job for a data source. If a synchronization
 *       job is already in progress, Amazon Kendra returns a
 *         <code>ResourceInUseException</code> exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, StartDataSourceSyncJobCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, StartDataSourceSyncJobCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new StartDataSourceSyncJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDataSourceSyncJobCommandInput} for command's `input` shape.
 * @see {@link StartDataSourceSyncJobCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartDataSourceSyncJobCommand extends $Command<StartDataSourceSyncJobCommandInput, StartDataSourceSyncJobCommandOutput, KendraClientResolvedConfig> {
    readonly input: StartDataSourceSyncJobCommandInput;
    constructor(input: StartDataSourceSyncJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartDataSourceSyncJobCommandInput, StartDataSourceSyncJobCommandOutput>;
    private serialize;
    private deserialize;
}
