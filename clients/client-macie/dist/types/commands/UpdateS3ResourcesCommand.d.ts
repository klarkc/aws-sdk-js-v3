import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { UpdateS3ResourcesRequest, UpdateS3ResourcesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateS3ResourcesCommandInput extends UpdateS3ResourcesRequest {
}
export interface UpdateS3ResourcesCommandOutput extends UpdateS3ResourcesResult, __MetadataBearer {
}
/**
 * <p>Updates the classification types for the specified S3 resources. If memberAccountId
 *       isn't specified, the action updates the classification types of the S3 resources associated
 *       with Amazon Macie Classic for the current Macie Classic administrator account. If memberAccountId is specified, the
 *       action updates the classification types of the S3 resources associated with Macie
 *       Classic for the specified member account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, UpdateS3ResourcesCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, UpdateS3ResourcesCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const command = new UpdateS3ResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateS3ResourcesCommandInput} for command's `input` shape.
 * @see {@link UpdateS3ResourcesCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateS3ResourcesCommand extends $Command<UpdateS3ResourcesCommandInput, UpdateS3ResourcesCommandOutput, MacieClientResolvedConfig> {
    readonly input: UpdateS3ResourcesCommandInput;
    constructor(input: UpdateS3ResourcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MacieClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateS3ResourcesCommandInput, UpdateS3ResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
