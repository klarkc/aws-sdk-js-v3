import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { ListBucketsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListBucketsCommandInput {
}
export interface ListBucketsCommandOutput extends ListBucketsOutput, __MetadataBearer {
}
/**
 * <p>Returns a list of all buckets owned by the authenticated sender of the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new ListBucketsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBucketsCommandInput} for command's `input` shape.
 * @see {@link ListBucketsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBucketsCommand extends $Command<ListBucketsCommandInput, ListBucketsCommandOutput, S3ClientResolvedConfig> {
    readonly input: ListBucketsCommandInput;
    constructor(input: ListBucketsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBucketsCommandInput, ListBucketsCommandOutput>;
    private serialize;
    private deserialize;
}
