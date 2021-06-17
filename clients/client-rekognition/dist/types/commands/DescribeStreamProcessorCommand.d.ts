import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DescribeStreamProcessorRequest, DescribeStreamProcessorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeStreamProcessorCommandInput extends DescribeStreamProcessorRequest {
}
export interface DescribeStreamProcessorCommandOutput extends DescribeStreamProcessorResponse, __MetadataBearer {
}
/**
 * <p>Provides information about a stream processor created by <a>CreateStreamProcessor</a>. You can get information about the input and output streams, the input parameters for the face recognition being performed,
 *             and the current status of the stream processor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DescribeStreamProcessorCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DescribeStreamProcessorCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new DescribeStreamProcessorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStreamProcessorCommandInput} for command's `input` shape.
 * @see {@link DescribeStreamProcessorCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeStreamProcessorCommand extends $Command<DescribeStreamProcessorCommandInput, DescribeStreamProcessorCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: DescribeStreamProcessorCommandInput;
    constructor(input: DescribeStreamProcessorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStreamProcessorCommandInput, DescribeStreamProcessorCommandOutput>;
    private serialize;
    private deserialize;
}
