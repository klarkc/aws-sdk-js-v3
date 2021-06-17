import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DescribeEntityRecognizerRequest, DescribeEntityRecognizerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEntityRecognizerCommandInput extends DescribeEntityRecognizerRequest {
}
export interface DescribeEntityRecognizerCommandOutput extends DescribeEntityRecognizerResponse, __MetadataBearer {
}
/**
 * <p>Provides details about an entity recognizer including status, S3 buckets containing
 *       training data, recognizer metadata, metrics, and so on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribeEntityRecognizerCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribeEntityRecognizerCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DescribeEntityRecognizerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEntityRecognizerCommandInput} for command's `input` shape.
 * @see {@link DescribeEntityRecognizerCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEntityRecognizerCommand extends $Command<DescribeEntityRecognizerCommandInput, DescribeEntityRecognizerCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DescribeEntityRecognizerCommandInput;
    constructor(input: DescribeEntityRecognizerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEntityRecognizerCommandInput, DescribeEntityRecognizerCommandOutput>;
    private serialize;
    private deserialize;
}
