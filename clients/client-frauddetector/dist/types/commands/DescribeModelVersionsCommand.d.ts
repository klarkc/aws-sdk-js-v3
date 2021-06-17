import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DescribeModelVersionsRequest, DescribeModelVersionsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeModelVersionsCommandInput extends DescribeModelVersionsRequest {
}
export interface DescribeModelVersionsCommandOutput extends DescribeModelVersionsResult, __MetadataBearer {
}
/**
 * <p>Gets all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DescribeModelVersionsCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DescribeModelVersionsCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DescribeModelVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeModelVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeModelVersionsCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeModelVersionsCommand extends $Command<DescribeModelVersionsCommandInput, DescribeModelVersionsCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: DescribeModelVersionsCommandInput;
    constructor(input: DescribeModelVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeModelVersionsCommandInput, DescribeModelVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
