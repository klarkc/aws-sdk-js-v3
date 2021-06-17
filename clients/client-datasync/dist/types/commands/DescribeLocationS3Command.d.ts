import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DescribeLocationS3Request, DescribeLocationS3Response } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeLocationS3CommandInput extends DescribeLocationS3Request {
}
export interface DescribeLocationS3CommandOutput extends DescribeLocationS3Response, __MetadataBearer {
}
/**
 * <p>Returns metadata, such as bucket name, about an Amazon S3 bucket location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationS3Command } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationS3Command } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DescribeLocationS3Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocationS3CommandInput} for command's `input` shape.
 * @see {@link DescribeLocationS3CommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeLocationS3Command extends $Command<DescribeLocationS3CommandInput, DescribeLocationS3CommandOutput, DataSyncClientResolvedConfig> {
    readonly input: DescribeLocationS3CommandInput;
    constructor(input: DescribeLocationS3CommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLocationS3CommandInput, DescribeLocationS3CommandOutput>;
    private serialize;
    private deserialize;
}
