import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GetReplicationJobsRequest, GetReplicationJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetReplicationJobsCommandInput extends GetReplicationJobsRequest {
}
export interface GetReplicationJobsCommandOutput extends GetReplicationJobsResponse, __MetadataBearer {
}
/**
 * <p>Describes the specified replication job or all of your replication jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetReplicationJobsCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetReplicationJobsCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GetReplicationJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReplicationJobsCommandInput} for command's `input` shape.
 * @see {@link GetReplicationJobsCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetReplicationJobsCommand extends $Command<GetReplicationJobsCommandInput, GetReplicationJobsCommandOutput, SMSClientResolvedConfig> {
    readonly input: GetReplicationJobsCommandInput;
    constructor(input: GetReplicationJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetReplicationJobsCommandInput, GetReplicationJobsCommandOutput>;
    private serialize;
    private deserialize;
}
