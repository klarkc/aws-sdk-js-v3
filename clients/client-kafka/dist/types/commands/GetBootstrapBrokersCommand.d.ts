import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { GetBootstrapBrokersRequest, GetBootstrapBrokersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetBootstrapBrokersCommandInput extends GetBootstrapBrokersRequest {
}
export interface GetBootstrapBrokersCommandOutput extends GetBootstrapBrokersResponse, __MetadataBearer {
}
/**
 * <p>A list of brokers that a client application can use to bootstrap.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, GetBootstrapBrokersCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, GetBootstrapBrokersCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new GetBootstrapBrokersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBootstrapBrokersCommandInput} for command's `input` shape.
 * @see {@link GetBootstrapBrokersCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBootstrapBrokersCommand extends $Command<GetBootstrapBrokersCommandInput, GetBootstrapBrokersCommandOutput, KafkaClientResolvedConfig> {
    readonly input: GetBootstrapBrokersCommandInput;
    constructor(input: GetBootstrapBrokersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KafkaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBootstrapBrokersCommandInput, GetBootstrapBrokersCommandOutput>;
    private serialize;
    private deserialize;
}
