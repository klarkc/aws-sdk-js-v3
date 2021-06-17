import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { ListWorkloadSharesInput, ListWorkloadSharesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListWorkloadSharesCommandInput extends ListWorkloadSharesInput {
}
export interface ListWorkloadSharesCommandOutput extends ListWorkloadSharesOutput, __MetadataBearer {
}
/**
 * <p>List the workload shares associated with the workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListWorkloadSharesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListWorkloadSharesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new ListWorkloadSharesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkloadSharesCommandInput} for command's `input` shape.
 * @see {@link ListWorkloadSharesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListWorkloadSharesCommand extends $Command<ListWorkloadSharesCommandInput, ListWorkloadSharesCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: ListWorkloadSharesCommandInput;
    constructor(input: ListWorkloadSharesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWorkloadSharesCommandInput, ListWorkloadSharesCommandOutput>;
    private serialize;
    private deserialize;
}
