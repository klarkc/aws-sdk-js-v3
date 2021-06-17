import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { CreateReplicationJobRequest, CreateReplicationJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateReplicationJobCommandInput extends CreateReplicationJobRequest {
}
export interface CreateReplicationJobCommandOutput extends CreateReplicationJobResponse, __MetadataBearer {
}
/**
 * <p>Creates a replication job. The replication job schedules periodic replication runs
 *             to replicate your server to AWS. Each replication run creates an Amazon Machine Image
 *             (AMI).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, CreateReplicationJobCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, CreateReplicationJobCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new CreateReplicationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReplicationJobCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationJobCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateReplicationJobCommand extends $Command<CreateReplicationJobCommandInput, CreateReplicationJobCommandOutput, SMSClientResolvedConfig> {
    readonly input: CreateReplicationJobCommandInput;
    constructor(input: CreateReplicationJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateReplicationJobCommandInput, CreateReplicationJobCommandOutput>;
    private serialize;
    private deserialize;
}
