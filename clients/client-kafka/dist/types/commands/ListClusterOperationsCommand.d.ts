import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { ListClusterOperationsRequest, ListClusterOperationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListClusterOperationsCommandInput extends ListClusterOperationsRequest {
}
export interface ListClusterOperationsCommandOutput extends ListClusterOperationsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of all the operations that have been performed on the specified MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListClusterOperationsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListClusterOperationsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new ListClusterOperationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListClusterOperationsCommandInput} for command's `input` shape.
 * @see {@link ListClusterOperationsCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListClusterOperationsCommand extends $Command<ListClusterOperationsCommandInput, ListClusterOperationsCommandOutput, KafkaClientResolvedConfig> {
    readonly input: ListClusterOperationsCommandInput;
    constructor(input: ListClusterOperationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KafkaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListClusterOperationsCommandInput, ListClusterOperationsCommandOutput>;
    private serialize;
    private deserialize;
}
