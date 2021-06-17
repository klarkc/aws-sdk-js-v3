import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { ListClassificationJobsRequest, ListClassificationJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListClassificationJobsCommandInput extends ListClassificationJobsRequest {
}
export interface ListClassificationJobsCommandOutput extends ListClassificationJobsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a subset of information about one or more classification jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListClassificationJobsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListClassificationJobsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new ListClassificationJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListClassificationJobsCommandInput} for command's `input` shape.
 * @see {@link ListClassificationJobsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListClassificationJobsCommand extends $Command<ListClassificationJobsCommandInput, ListClassificationJobsCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: ListClassificationJobsCommandInput;
    constructor(input: ListClassificationJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListClassificationJobsCommandInput, ListClassificationJobsCommandOutput>;
    private serialize;
    private deserialize;
}
