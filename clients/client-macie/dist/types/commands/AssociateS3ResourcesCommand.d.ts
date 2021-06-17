import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { AssociateS3ResourcesRequest, AssociateS3ResourcesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateS3ResourcesCommandInput extends AssociateS3ResourcesRequest {
}
export interface AssociateS3ResourcesCommandOutput extends AssociateS3ResourcesResult, __MetadataBearer {
}
/**
 * <p>Associates specified S3 resources with Amazon Macie Classic for monitoring and data
 *       classification. If memberAccountId isn't specified, the action associates specified S3
 *       resources with Macie Classic for the current Macie Classic administrator account. If memberAccountId is specified,
 *       the action associates specified S3 resources with Macie Classic for the specified member
 *       account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, AssociateS3ResourcesCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, AssociateS3ResourcesCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const command = new AssociateS3ResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateS3ResourcesCommandInput} for command's `input` shape.
 * @see {@link AssociateS3ResourcesCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateS3ResourcesCommand extends $Command<AssociateS3ResourcesCommandInput, AssociateS3ResourcesCommandOutput, MacieClientResolvedConfig> {
    readonly input: AssociateS3ResourcesCommandInput;
    constructor(input: AssociateS3ResourcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MacieClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateS3ResourcesCommandInput, AssociateS3ResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
