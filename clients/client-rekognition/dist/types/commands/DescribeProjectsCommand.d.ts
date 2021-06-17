import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DescribeProjectsRequest, DescribeProjectsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeProjectsCommandInput extends DescribeProjectsRequest {
}
export interface DescribeProjectsCommandOutput extends DescribeProjectsResponse, __MetadataBearer {
}
/**
 * <p>Lists and gets information about your Amazon Rekognition Custom Labels projects.</p>
 *          <p>This operation requires permissions to perform the <code>rekognition:DescribeProjects</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DescribeProjectsCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DescribeProjectsCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new DescribeProjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProjectsCommandInput} for command's `input` shape.
 * @see {@link DescribeProjectsCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeProjectsCommand extends $Command<DescribeProjectsCommandInput, DescribeProjectsCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: DescribeProjectsCommandInput;
    constructor(input: DescribeProjectsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProjectsCommandInput, DescribeProjectsCommandOutput>;
    private serialize;
    private deserialize;
}
