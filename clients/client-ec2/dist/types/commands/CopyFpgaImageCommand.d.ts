import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CopyFpgaImageRequest, CopyFpgaImageResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CopyFpgaImageCommandInput extends CopyFpgaImageRequest {
}
export interface CopyFpgaImageCommandOutput extends CopyFpgaImageResult, __MetadataBearer {
}
/**
 * <p>Copies the specified Amazon FPGA Image (AFI) to the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CopyFpgaImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CopyFpgaImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CopyFpgaImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyFpgaImageCommandInput} for command's `input` shape.
 * @see {@link CopyFpgaImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CopyFpgaImageCommand extends $Command<CopyFpgaImageCommandInput, CopyFpgaImageCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CopyFpgaImageCommandInput;
    constructor(input: CopyFpgaImageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyFpgaImageCommandInput, CopyFpgaImageCommandOutput>;
    private serialize;
    private deserialize;
}
