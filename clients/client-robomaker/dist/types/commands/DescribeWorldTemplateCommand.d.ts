import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { DescribeWorldTemplateRequest, DescribeWorldTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeWorldTemplateCommandInput extends DescribeWorldTemplateRequest {
}
export interface DescribeWorldTemplateCommandOutput extends DescribeWorldTemplateResponse, __MetadataBearer {
}
/**
 * <p>Describes a world template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeWorldTemplateCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeWorldTemplateCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeWorldTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorldTemplateCommandInput} for command's `input` shape.
 * @see {@link DescribeWorldTemplateCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeWorldTemplateCommand extends $Command<DescribeWorldTemplateCommandInput, DescribeWorldTemplateCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: DescribeWorldTemplateCommandInput;
    constructor(input: DescribeWorldTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeWorldTemplateCommandInput, DescribeWorldTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
