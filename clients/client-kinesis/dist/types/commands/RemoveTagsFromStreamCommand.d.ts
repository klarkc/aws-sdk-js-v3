import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { RemoveTagsFromStreamInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RemoveTagsFromStreamCommandInput extends RemoveTagsFromStreamInput {
}
export interface RemoveTagsFromStreamCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes tags from the specified Kinesis data stream. Removed tags are deleted and
 *             cannot be recovered after this operation successfully completes.</p>
 *         <p>If you specify a tag that does not exist, it is ignored.</p>
 *         <p>
 *             <a>RemoveTagsFromStream</a> has a limit of five transactions per second per
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, RemoveTagsFromStreamCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, RemoveTagsFromStreamCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const command = new RemoveTagsFromStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveTagsFromStreamCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsFromStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemoveTagsFromStreamCommand extends $Command<RemoveTagsFromStreamCommandInput, RemoveTagsFromStreamCommandOutput, KinesisClientResolvedConfig> {
    readonly input: RemoveTagsFromStreamCommandInput;
    constructor(input: RemoveTagsFromStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveTagsFromStreamCommandInput, RemoveTagsFromStreamCommandOutput>;
    private serialize;
    private deserialize;
}
