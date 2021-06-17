import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { GetReplicationSetInput, GetReplicationSetOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetReplicationSetCommandInput extends GetReplicationSetInput {
}
export interface GetReplicationSetCommandOutput extends GetReplicationSetOutput, __MetadataBearer {
}
/**
 * <p>Retrieve your Incident Manager replication set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, GetReplicationSetCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, GetReplicationSetCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new GetReplicationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReplicationSetCommandInput} for command's `input` shape.
 * @see {@link GetReplicationSetCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetReplicationSetCommand extends $Command<GetReplicationSetCommandInput, GetReplicationSetCommandOutput, SSMIncidentsClientResolvedConfig> {
    readonly input: GetReplicationSetCommandInput;
    constructor(input: GetReplicationSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMIncidentsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetReplicationSetCommandInput, GetReplicationSetCommandOutput>;
    private serialize;
    private deserialize;
}
