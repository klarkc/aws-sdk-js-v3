import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GetReplicationRunsRequest, GetReplicationRunsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetReplicationRunsCommandInput extends GetReplicationRunsRequest {
}
export interface GetReplicationRunsCommandOutput extends GetReplicationRunsResponse, __MetadataBearer {
}
/**
 * <p>Describes the replication runs for the specified replication job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetReplicationRunsCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetReplicationRunsCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GetReplicationRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReplicationRunsCommandInput} for command's `input` shape.
 * @see {@link GetReplicationRunsCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetReplicationRunsCommand extends $Command<GetReplicationRunsCommandInput, GetReplicationRunsCommandOutput, SMSClientResolvedConfig> {
    readonly input: GetReplicationRunsCommandInput;
    constructor(input: GetReplicationRunsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetReplicationRunsCommandInput, GetReplicationRunsCommandOutput>;
    private serialize;
    private deserialize;
}
