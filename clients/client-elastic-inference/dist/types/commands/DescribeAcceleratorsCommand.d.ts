import { ElasticInferenceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticInferenceClient";
import { DescribeAcceleratorsRequest, DescribeAcceleratorsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAcceleratorsCommandInput extends DescribeAcceleratorsRequest {
}
export interface DescribeAcceleratorsCommandOutput extends DescribeAcceleratorsResponse, __MetadataBearer {
}
/**
 * <p>
 *             Describes information over a provided set of accelerators belonging to an account.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticInferenceClient, DescribeAcceleratorsCommand } from "@aws-sdk/client-elastic-inference"; // ES Modules import
 * // const { ElasticInferenceClient, DescribeAcceleratorsCommand } = require("@aws-sdk/client-elastic-inference"); // CommonJS import
 * const client = new ElasticInferenceClient(config);
 * const command = new DescribeAcceleratorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAcceleratorsCommandInput} for command's `input` shape.
 * @see {@link DescribeAcceleratorsCommandOutput} for command's `response` shape.
 * @see {@link ElasticInferenceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAcceleratorsCommand extends $Command<DescribeAcceleratorsCommandInput, DescribeAcceleratorsCommandOutput, ElasticInferenceClientResolvedConfig> {
    readonly input: DescribeAcceleratorsCommandInput;
    constructor(input: DescribeAcceleratorsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticInferenceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAcceleratorsCommandInput, DescribeAcceleratorsCommandOutput>;
    private serialize;
    private deserialize;
}
