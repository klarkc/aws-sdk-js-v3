import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeFpgaImagesRequest, DescribeFpgaImagesResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFpgaImagesCommandInput extends DescribeFpgaImagesRequest {
}
export interface DescribeFpgaImagesCommandOutput extends DescribeFpgaImagesResult, __MetadataBearer {
}
/**
 * <p>Describes the Amazon FPGA Images (AFIs) available to you. These include public AFIs,
 * 			private AFIs that you own, and AFIs owned by other AWS accounts for which you have load
 * 			permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFpgaImagesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFpgaImagesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeFpgaImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFpgaImagesCommandInput} for command's `input` shape.
 * @see {@link DescribeFpgaImagesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFpgaImagesCommand extends $Command<DescribeFpgaImagesCommandInput, DescribeFpgaImagesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeFpgaImagesCommandInput;
    constructor(input: DescribeFpgaImagesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFpgaImagesCommandInput, DescribeFpgaImagesCommandOutput>;
    private serialize;
    private deserialize;
}
