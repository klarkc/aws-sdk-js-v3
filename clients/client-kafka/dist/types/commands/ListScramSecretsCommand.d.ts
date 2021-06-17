import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { ListScramSecretsRequest, ListScramSecretsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListScramSecretsCommandInput extends ListScramSecretsRequest {
}
export interface ListScramSecretsCommandOutput extends ListScramSecretsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of the Scram Secrets associated with an Amazon MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListScramSecretsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListScramSecretsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new ListScramSecretsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListScramSecretsCommandInput} for command's `input` shape.
 * @see {@link ListScramSecretsCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListScramSecretsCommand extends $Command<ListScramSecretsCommandInput, ListScramSecretsCommandOutput, KafkaClientResolvedConfig> {
    readonly input: ListScramSecretsCommandInput;
    constructor(input: ListScramSecretsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KafkaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListScramSecretsCommandInput, ListScramSecretsCommandOutput>;
    private serialize;
    private deserialize;
}
