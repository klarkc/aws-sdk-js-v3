import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { RetryDataReplicationRequest, SourceServer } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RetryDataReplicationCommandInput extends RetryDataReplicationRequest {
}
export interface RetryDataReplicationCommandOutput extends SourceServer, __MetadataBearer {
}
/**
 * <p>Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, RetryDataReplicationCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, RetryDataReplicationCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new RetryDataReplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RetryDataReplicationCommandInput} for command's `input` shape.
 * @see {@link RetryDataReplicationCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RetryDataReplicationCommand extends $Command<RetryDataReplicationCommandInput, RetryDataReplicationCommandOutput, MgnClientResolvedConfig> {
    readonly input: RetryDataReplicationCommandInput;
    constructor(input: RetryDataReplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MgnClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RetryDataReplicationCommandInput, RetryDataReplicationCommandOutput>;
    private serialize;
    private deserialize;
}
