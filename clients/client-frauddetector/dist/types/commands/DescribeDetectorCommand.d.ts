import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DescribeDetectorRequest, DescribeDetectorResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDetectorCommandInput extends DescribeDetectorRequest {
}
export interface DescribeDetectorCommandOutput extends DescribeDetectorResult, __MetadataBearer {
}
/**
 * <p>Gets all versions for a specified detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DescribeDetectorCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DescribeDetectorCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DescribeDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDetectorCommandInput} for command's `input` shape.
 * @see {@link DescribeDetectorCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDetectorCommand extends $Command<DescribeDetectorCommandInput, DescribeDetectorCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: DescribeDetectorCommandInput;
    constructor(input: DescribeDetectorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDetectorCommandInput, DescribeDetectorCommandOutput>;
    private serialize;
    private deserialize;
}
