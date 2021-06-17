import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetStorageLensConfigurationTaggingRequest, GetStorageLensConfigurationTaggingResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetStorageLensConfigurationTaggingCommandInput extends GetStorageLensConfigurationTaggingRequest {
}
export interface GetStorageLensConfigurationTaggingCommandOutput extends GetStorageLensConfigurationTaggingResult, __MetadataBearer {
}
/**
 * <p>Gets the tags of Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see
 *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage
 *             activity and usage with Amazon S3 Storage Lens </a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>To use this action,
 *          you must have permission to perform the <code>s3:GetStorageLensConfigurationTagging</code> action. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the
 *          <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetStorageLensConfigurationTaggingCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetStorageLensConfigurationTaggingCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new GetStorageLensConfigurationTaggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStorageLensConfigurationTaggingCommandInput} for command's `input` shape.
 * @see {@link GetStorageLensConfigurationTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetStorageLensConfigurationTaggingCommand extends $Command<GetStorageLensConfigurationTaggingCommandInput, GetStorageLensConfigurationTaggingCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: GetStorageLensConfigurationTaggingCommandInput;
    constructor(input: GetStorageLensConfigurationTaggingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetStorageLensConfigurationTaggingCommandInput, GetStorageLensConfigurationTaggingCommandOutput>;
    private serialize;
    private deserialize;
}
