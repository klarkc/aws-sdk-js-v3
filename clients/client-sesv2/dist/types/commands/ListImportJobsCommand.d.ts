import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { ListImportJobsRequest, ListImportJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListImportJobsCommandInput extends ListImportJobsRequest {
}
export interface ListImportJobsCommandOutput extends ListImportJobsResponse, __MetadataBearer {
}
/**
 * <p>Lists all of the import jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListImportJobsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListImportJobsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new ListImportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListImportJobsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListImportJobsCommand extends $Command<ListImportJobsCommandInput, ListImportJobsCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: ListImportJobsCommandInput;
    constructor(input: ListImportJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListImportJobsCommandInput, ListImportJobsCommandOutput>;
    private serialize;
    private deserialize;
}
