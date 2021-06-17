import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { DescribeClassificationJobRequest, DescribeClassificationJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeClassificationJobCommandInput extends DescribeClassificationJobRequest {
}
export interface DescribeClassificationJobCommandOutput extends DescribeClassificationJobResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the status and settings for a classification job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DescribeClassificationJobCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DescribeClassificationJobCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new DescribeClassificationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClassificationJobCommandInput} for command's `input` shape.
 * @see {@link DescribeClassificationJobCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeClassificationJobCommand extends $Command<DescribeClassificationJobCommandInput, DescribeClassificationJobCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: DescribeClassificationJobCommandInput;
    constructor(input: DescribeClassificationJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClassificationJobCommandInput, DescribeClassificationJobCommandOutput>;
    private serialize;
    private deserialize;
}
