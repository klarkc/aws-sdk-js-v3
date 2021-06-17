import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListResourceComplianceSummariesRequest, ListResourceComplianceSummariesResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListResourceComplianceSummariesCommandInput extends ListResourceComplianceSummariesRequest {
}
export interface ListResourceComplianceSummariesCommandOutput extends ListResourceComplianceSummariesResult, __MetadataBearer {
}
/**
 * <p>Returns a resource-level summary count. The summary includes information about compliant and
 *    non-compliant statuses and detailed compliance-item severity counts, according to the filter
 *    criteria you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListResourceComplianceSummariesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListResourceComplianceSummariesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListResourceComplianceSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceComplianceSummariesCommandInput} for command's `input` shape.
 * @see {@link ListResourceComplianceSummariesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListResourceComplianceSummariesCommand extends $Command<ListResourceComplianceSummariesCommandInput, ListResourceComplianceSummariesCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListResourceComplianceSummariesCommandInput;
    constructor(input: ListResourceComplianceSummariesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourceComplianceSummariesCommandInput, ListResourceComplianceSummariesCommandOutput>;
    private serialize;
    private deserialize;
}
