import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { TagStreamInput, TagStreamOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TagStreamCommandInput extends TagStreamInput {
}
export interface TagStreamCommandOutput extends TagStreamOutput, __MetadataBearer {
}
/**
 * <p>Adds one or more tags to a stream. A <i>tag</i> is a key-value pair
 *             (the value is optional) that you can define and assign to AWS resources. If you specify
 *             a tag that already exists, the tag value is replaced with the value that you specify in
 *             the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation
 *                 Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>
 *         <p>You must provide either the <code>StreamName</code> or the
 *             <code>StreamARN</code>.</p>
 *         <p>This operation requires permission for the <code>KinesisVideo:TagStream</code>
 *             action.</p>
 *         <p>Kinesis video streams support up to 50 tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, TagStreamCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, TagStreamCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new TagStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagStreamCommandInput} for command's `input` shape.
 * @see {@link TagStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TagStreamCommand extends $Command<TagStreamCommandInput, TagStreamCommandOutput, KinesisVideoClientResolvedConfig> {
    readonly input: TagStreamCommandInput;
    constructor(input: TagStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisVideoClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TagStreamCommandInput, TagStreamCommandOutput>;
    private serialize;
    private deserialize;
}
