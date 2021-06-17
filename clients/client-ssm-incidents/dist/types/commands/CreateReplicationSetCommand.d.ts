import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { CreateReplicationSetInput, CreateReplicationSetOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateReplicationSetCommandInput extends CreateReplicationSetInput {
}
export interface CreateReplicationSetCommandOutput extends CreateReplicationSetOutput, __MetadataBearer {
}
/**
 * <p>A replication set replicates and encrypts your data to the provided Regions with the
 *             provided KMS key. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, CreateReplicationSetCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, CreateReplicationSetCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new CreateReplicationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReplicationSetCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationSetCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateReplicationSetCommand extends $Command<CreateReplicationSetCommandInput, CreateReplicationSetCommandOutput, SSMIncidentsClientResolvedConfig> {
    readonly input: CreateReplicationSetCommandInput;
    constructor(input: CreateReplicationSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMIncidentsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateReplicationSetCommandInput, CreateReplicationSetCommandOutput>;
    private serialize;
    private deserialize;
}
