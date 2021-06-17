import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { DescribeWorldGenerationJobRequest, DescribeWorldGenerationJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeWorldGenerationJobCommandInput extends DescribeWorldGenerationJobRequest {
}
export interface DescribeWorldGenerationJobCommandOutput extends DescribeWorldGenerationJobResponse, __MetadataBearer {
}
/**
 * <p>Describes a world generation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeWorldGenerationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeWorldGenerationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeWorldGenerationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorldGenerationJobCommandInput} for command's `input` shape.
 * @see {@link DescribeWorldGenerationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeWorldGenerationJobCommand extends $Command<DescribeWorldGenerationJobCommandInput, DescribeWorldGenerationJobCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: DescribeWorldGenerationJobCommandInput;
    constructor(input: DescribeWorldGenerationJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeWorldGenerationJobCommandInput, DescribeWorldGenerationJobCommandOutput>;
    private serialize;
    private deserialize;
}
