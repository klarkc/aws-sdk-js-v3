import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { RebootBrokerRequest, RebootBrokerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RebootBrokerCommandInput extends RebootBrokerRequest {
}
export interface RebootBrokerCommandOutput extends RebootBrokerResponse, __MetadataBearer {
}
/**
 * Reboots brokers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, RebootBrokerCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, RebootBrokerCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new RebootBrokerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootBrokerCommandInput} for command's `input` shape.
 * @see {@link RebootBrokerCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RebootBrokerCommand extends $Command<RebootBrokerCommandInput, RebootBrokerCommandOutput, KafkaClientResolvedConfig> {
    readonly input: RebootBrokerCommandInput;
    constructor(input: RebootBrokerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KafkaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebootBrokerCommandInput, RebootBrokerCommandOutput>;
    private serialize;
    private deserialize;
}
