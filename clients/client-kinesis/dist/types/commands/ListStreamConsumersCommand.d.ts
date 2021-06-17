import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { ListStreamConsumersInput, ListStreamConsumersOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListStreamConsumersCommandInput extends ListStreamConsumersInput {
}
export interface ListStreamConsumersCommandOutput extends ListStreamConsumersOutput, __MetadataBearer {
}
/**
 * <p>Lists the consumers registered to receive data from a stream using enhanced fan-out,
 *             and provides information about each consumer.</p>
 *         <p>This operation has a limit of 5 transactions per second per stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, ListStreamConsumersCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, ListStreamConsumersCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const command = new ListStreamConsumersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStreamConsumersCommandInput} for command's `input` shape.
 * @see {@link ListStreamConsumersCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListStreamConsumersCommand extends $Command<ListStreamConsumersCommandInput, ListStreamConsumersCommandOutput, KinesisClientResolvedConfig> {
    readonly input: ListStreamConsumersCommandInput;
    constructor(input: ListStreamConsumersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStreamConsumersCommandInput, ListStreamConsumersCommandOutput>;
    private serialize;
    private deserialize;
}
