import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { DescribeModelRequest, DescribeModelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeModelCommandInput extends DescribeModelRequest {
}
export interface DescribeModelCommandOutput extends DescribeModelResponse, __MetadataBearer {
}
/**
 * <p>Describes a version of an Amazon Lookout for Vision model.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:DescribeModel</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, DescribeModelCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, DescribeModelCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new DescribeModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeModelCommandInput} for command's `input` shape.
 * @see {@link DescribeModelCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeModelCommand extends $Command<DescribeModelCommandInput, DescribeModelCommandOutput, LookoutVisionClientResolvedConfig> {
    readonly input: DescribeModelCommandInput;
    constructor(input: DescribeModelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutVisionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeModelCommandInput, DescribeModelCommandOutput>;
    private serialize;
    private deserialize;
}
