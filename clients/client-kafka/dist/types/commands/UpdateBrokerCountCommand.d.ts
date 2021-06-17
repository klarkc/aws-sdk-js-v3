import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { UpdateBrokerCountRequest, UpdateBrokerCountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateBrokerCountCommandInput extends UpdateBrokerCountRequest {
}
export interface UpdateBrokerCountCommandOutput extends UpdateBrokerCountResponse, __MetadataBearer {
}
/**
 * <p>Updates the number of broker nodes in the cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateBrokerCountCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateBrokerCountCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new UpdateBrokerCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBrokerCountCommandInput} for command's `input` shape.
 * @see {@link UpdateBrokerCountCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateBrokerCountCommand extends $Command<UpdateBrokerCountCommandInput, UpdateBrokerCountCommandOutput, KafkaClientResolvedConfig> {
    readonly input: UpdateBrokerCountCommandInput;
    constructor(input: UpdateBrokerCountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KafkaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateBrokerCountCommandInput, UpdateBrokerCountCommandOutput>;
    private serialize;
    private deserialize;
}
