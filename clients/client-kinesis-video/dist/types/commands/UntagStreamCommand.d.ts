import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { UntagStreamInput, UntagStreamOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UntagStreamCommandInput extends UntagStreamInput {
}
export interface UntagStreamCommandOutput extends UntagStreamOutput, __MetadataBearer {
}
/**
 * <p>Removes one or more tags from a stream. In the request, specify only a tag key or
 *             keys; don't specify the value. If you specify a tag key that does not exist, it's
 *             ignored.</p>
 *         <p>In the request, you must provide the <code>StreamName</code> or
 *                 <code>StreamARN</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, UntagStreamCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, UntagStreamCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new UntagStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagStreamCommandInput} for command's `input` shape.
 * @see {@link UntagStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UntagStreamCommand extends $Command<UntagStreamCommandInput, UntagStreamCommandOutput, KinesisVideoClientResolvedConfig> {
    readonly input: UntagStreamCommandInput;
    constructor(input: UntagStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisVideoClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UntagStreamCommandInput, UntagStreamCommandOutput>;
    private serialize;
    private deserialize;
}
