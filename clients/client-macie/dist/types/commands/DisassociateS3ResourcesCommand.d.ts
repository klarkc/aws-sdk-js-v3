import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { DisassociateS3ResourcesRequest, DisassociateS3ResourcesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateS3ResourcesCommandInput extends DisassociateS3ResourcesRequest {
}
export interface DisassociateS3ResourcesCommandOutput extends DisassociateS3ResourcesResult, __MetadataBearer {
}
/**
 * <p>Removes specified S3 resources from being monitored by Amazon Macie Classic. If
 *       memberAccountId isn't specified, the action removes specified S3 resources from Macie Classic
 *       for the current Macie Classic administrator account. If memberAccountId is specified, the action removes specified
 *       S3 resources from Macie Classic for the specified member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, DisassociateS3ResourcesCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, DisassociateS3ResourcesCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const command = new DisassociateS3ResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateS3ResourcesCommandInput} for command's `input` shape.
 * @see {@link DisassociateS3ResourcesCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateS3ResourcesCommand extends $Command<DisassociateS3ResourcesCommandInput, DisassociateS3ResourcesCommandOutput, MacieClientResolvedConfig> {
    readonly input: DisassociateS3ResourcesCommandInput;
    constructor(input: DisassociateS3ResourcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MacieClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateS3ResourcesCommandInput, DisassociateS3ResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
