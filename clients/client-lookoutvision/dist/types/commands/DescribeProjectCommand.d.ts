import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { DescribeProjectRequest, DescribeProjectResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeProjectCommandInput extends DescribeProjectRequest {
}
export interface DescribeProjectCommandOutput extends DescribeProjectResponse, __MetadataBearer {
}
/**
 * <p>Describes an Amazon Lookout for Vision project.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:DescribeProject</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, DescribeProjectCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, DescribeProjectCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new DescribeProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProjectCommandInput} for command's `input` shape.
 * @see {@link DescribeProjectCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeProjectCommand extends $Command<DescribeProjectCommandInput, DescribeProjectCommandOutput, LookoutVisionClientResolvedConfig> {
    readonly input: DescribeProjectCommandInput;
    constructor(input: DescribeProjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutVisionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProjectCommandInput, DescribeProjectCommandOutput>;
    private serialize;
    private deserialize;
}
