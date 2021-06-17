import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateFpgaImageRequest, CreateFpgaImageResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateFpgaImageCommandInput extends CreateFpgaImageRequest {
}
export interface CreateFpgaImageCommandOutput extends CreateFpgaImageResult, __MetadataBearer {
}
/**
 * <p>Creates an Amazon FPGA Image (AFI) from the specified design checkpoint (DCP).</p>
 *          <p>The create operation is asynchronous. To verify that the AFI is ready for use,
 *          check the output logs.</p>
 *          <p>An AFI contains the FPGA bitstream that is ready to download to an FPGA.
 *          You can securely deploy an AFI on multiple FPGA-accelerated instances.
 *          For more information, see the <a href="https://github.com/aws/aws-fpga/">AWS FPGA Hardware Development Kit</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateFpgaImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateFpgaImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateFpgaImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFpgaImageCommandInput} for command's `input` shape.
 * @see {@link CreateFpgaImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateFpgaImageCommand extends $Command<CreateFpgaImageCommandInput, CreateFpgaImageCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateFpgaImageCommandInput;
    constructor(input: CreateFpgaImageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFpgaImageCommandInput, CreateFpgaImageCommandOutput>;
    private serialize;
    private deserialize;
}
