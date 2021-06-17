import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { UpdateBrokerTypeRequest, UpdateBrokerTypeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateBrokerTypeCommandInput extends UpdateBrokerTypeRequest {
}
export interface UpdateBrokerTypeCommandOutput extends UpdateBrokerTypeResponse, __MetadataBearer {
}
/**
 * <p>Updates EC2 instance type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateBrokerTypeCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateBrokerTypeCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new UpdateBrokerTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBrokerTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateBrokerTypeCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateBrokerTypeCommand extends $Command<UpdateBrokerTypeCommandInput, UpdateBrokerTypeCommandOutput, KafkaClientResolvedConfig> {
    readonly input: UpdateBrokerTypeCommandInput;
    constructor(input: UpdateBrokerTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KafkaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateBrokerTypeCommandInput, UpdateBrokerTypeCommandOutput>;
    private serialize;
    private deserialize;
}
