import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { ListConfigurationsRequest, ListConfigurationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListConfigurationsCommandInput extends ListConfigurationsRequest {
}
export interface ListConfigurationsCommandOutput extends ListConfigurationsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of all the MSK configurations in this Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListConfigurationsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListConfigurationsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new ListConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListConfigurationsCommand extends $Command<ListConfigurationsCommandInput, ListConfigurationsCommandOutput, KafkaClientResolvedConfig> {
    readonly input: ListConfigurationsCommandInput;
    constructor(input: ListConfigurationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KafkaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListConfigurationsCommandInput, ListConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
