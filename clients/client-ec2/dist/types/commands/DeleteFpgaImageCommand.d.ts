import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteFpgaImageRequest, DeleteFpgaImageResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFpgaImageCommandInput extends DeleteFpgaImageRequest {
}
export interface DeleteFpgaImageCommandOutput extends DeleteFpgaImageResult, __MetadataBearer {
}
/**
 * <p>Deletes the specified Amazon FPGA Image (AFI).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteFpgaImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteFpgaImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteFpgaImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFpgaImageCommandInput} for command's `input` shape.
 * @see {@link DeleteFpgaImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFpgaImageCommand extends $Command<DeleteFpgaImageCommandInput, DeleteFpgaImageCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteFpgaImageCommandInput;
    constructor(input: DeleteFpgaImageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFpgaImageCommandInput, DeleteFpgaImageCommandOutput>;
    private serialize;
    private deserialize;
}
