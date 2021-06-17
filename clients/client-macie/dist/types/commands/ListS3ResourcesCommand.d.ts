import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { ListS3ResourcesRequest, ListS3ResourcesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListS3ResourcesCommandInput extends ListS3ResourcesRequest {
}
export interface ListS3ResourcesCommandOutput extends ListS3ResourcesResult, __MetadataBearer {
}
/**
 * <p>Lists all the S3 resources associated with Amazon Macie Classic. If memberAccountId
 *       isn't specified, the action lists the S3 resources associated with Macie Classic for
 *       the current Macie Classic administrator account. If memberAccountId is specified, the action lists the S3 resources
 *       associated with Macie Classic for the specified member account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, ListS3ResourcesCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, ListS3ResourcesCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const command = new ListS3ResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListS3ResourcesCommandInput} for command's `input` shape.
 * @see {@link ListS3ResourcesCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListS3ResourcesCommand extends $Command<ListS3ResourcesCommandInput, ListS3ResourcesCommandOutput, MacieClientResolvedConfig> {
    readonly input: ListS3ResourcesCommandInput;
    constructor(input: ListS3ResourcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MacieClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListS3ResourcesCommandInput, ListS3ResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
