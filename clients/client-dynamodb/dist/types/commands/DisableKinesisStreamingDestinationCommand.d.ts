import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { KinesisStreamingDestinationInput, KinesisStreamingDestinationOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableKinesisStreamingDestinationCommandInput extends KinesisStreamingDestinationInput {
}
export interface DisableKinesisStreamingDestinationCommandOutput extends KinesisStreamingDestinationOutput, __MetadataBearer {
}
/**
 * <p>Stops replication from the DynamoDB table to the Kinesis data stream. This is done
 *             without deleting either of the resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DisableKinesisStreamingDestinationCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DisableKinesisStreamingDestinationCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DisableKinesisStreamingDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableKinesisStreamingDestinationCommandInput} for command's `input` shape.
 * @see {@link DisableKinesisStreamingDestinationCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableKinesisStreamingDestinationCommand extends $Command<DisableKinesisStreamingDestinationCommandInput, DisableKinesisStreamingDestinationCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DisableKinesisStreamingDestinationCommandInput;
    constructor(input: DisableKinesisStreamingDestinationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableKinesisStreamingDestinationCommandInput, DisableKinesisStreamingDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
