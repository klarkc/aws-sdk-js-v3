import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListComplianceItemsRequest, ListComplianceItemsResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListComplianceItemsCommandInput extends ListComplianceItemsRequest {
}
export interface ListComplianceItemsCommandOutput extends ListComplianceItemsResult, __MetadataBearer {
}
/**
 * <p>For a specified resource ID, this API action returns a list of compliance statuses for
 *    different resource types. Currently, you can only specify one resource ID per call. List results
 *    depend on the criteria specified in the filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListComplianceItemsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListComplianceItemsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListComplianceItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListComplianceItemsCommandInput} for command's `input` shape.
 * @see {@link ListComplianceItemsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListComplianceItemsCommand extends $Command<ListComplianceItemsCommandInput, ListComplianceItemsCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListComplianceItemsCommandInput;
    constructor(input: ListComplianceItemsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListComplianceItemsCommandInput, ListComplianceItemsCommandOutput>;
    private serialize;
    private deserialize;
}
