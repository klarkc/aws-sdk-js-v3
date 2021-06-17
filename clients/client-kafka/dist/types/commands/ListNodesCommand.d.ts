import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { ListNodesRequest, ListNodesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListNodesCommandInput extends ListNodesRequest {
}
export interface ListNodesCommandOutput extends ListNodesResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of the broker nodes in the cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListNodesCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListNodesCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new ListNodesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNodesCommandInput} for command's `input` shape.
 * @see {@link ListNodesCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListNodesCommand extends $Command<ListNodesCommandInput, ListNodesCommandOutput, KafkaClientResolvedConfig> {
    readonly input: ListNodesCommandInput;
    constructor(input: ListNodesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KafkaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListNodesCommandInput, ListNodesCommandOutput>;
    private serialize;
    private deserialize;
}
