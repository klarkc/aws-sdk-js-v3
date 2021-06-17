import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { ListReplicationSetsInput, ListReplicationSetsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListReplicationSetsCommandInput extends ListReplicationSetsInput {
}
export interface ListReplicationSetsCommandOutput extends ListReplicationSetsOutput, __MetadataBearer {
}
/**
 * <p>Lists details about the replication set configured in your account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, ListReplicationSetsCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, ListReplicationSetsCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new ListReplicationSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReplicationSetsCommandInput} for command's `input` shape.
 * @see {@link ListReplicationSetsCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListReplicationSetsCommand extends $Command<ListReplicationSetsCommandInput, ListReplicationSetsCommandOutput, SSMIncidentsClientResolvedConfig> {
    readonly input: ListReplicationSetsCommandInput;
    constructor(input: ListReplicationSetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMIncidentsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListReplicationSetsCommandInput, ListReplicationSetsCommandOutput>;
    private serialize;
    private deserialize;
}
