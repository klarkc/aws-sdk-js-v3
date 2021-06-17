import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetConsoleScreenshotRequest, GetConsoleScreenshotResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetConsoleScreenshotCommandInput extends GetConsoleScreenshotRequest {
}
export interface GetConsoleScreenshotCommandOutput extends GetConsoleScreenshotResult, __MetadataBearer {
}
/**
 * <p>Retrieve a JPG-format screenshot of a running instance to help with
 *             troubleshooting.</p>
 *         <p>The returned content is Base64-encoded.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetConsoleScreenshotCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetConsoleScreenshotCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetConsoleScreenshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConsoleScreenshotCommandInput} for command's `input` shape.
 * @see {@link GetConsoleScreenshotCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetConsoleScreenshotCommand extends $Command<GetConsoleScreenshotCommandInput, GetConsoleScreenshotCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetConsoleScreenshotCommandInput;
    constructor(input: GetConsoleScreenshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetConsoleScreenshotCommandInput, GetConsoleScreenshotCommandOutput>;
    private serialize;
    private deserialize;
}
