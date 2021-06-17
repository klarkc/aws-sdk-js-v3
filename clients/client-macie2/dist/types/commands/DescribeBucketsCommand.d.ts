import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { DescribeBucketsRequest, DescribeBucketsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeBucketsCommandInput extends DescribeBucketsRequest {
}
export interface DescribeBucketsCommandOutput extends DescribeBucketsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DescribeBucketsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DescribeBucketsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new DescribeBucketsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBucketsCommandInput} for command's `input` shape.
 * @see {@link DescribeBucketsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeBucketsCommand extends $Command<DescribeBucketsCommandInput, DescribeBucketsCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: DescribeBucketsCommandInput;
    constructor(input: DescribeBucketsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBucketsCommandInput, DescribeBucketsCommandOutput>;
    private serialize;
    private deserialize;
}
