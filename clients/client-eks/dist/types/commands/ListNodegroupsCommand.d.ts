import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { ListNodegroupsRequest, ListNodegroupsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListNodegroupsCommandInput extends ListNodegroupsRequest {
}
export interface ListNodegroupsCommandOutput extends ListNodegroupsResponse, __MetadataBearer {
}
/**
 * <p>Lists the Amazon EKS managed node groups associated with the specified cluster in your
 *             AWS account in the specified Region. Self-managed node groups are not listed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListNodegroupsCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListNodegroupsCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new ListNodegroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNodegroupsCommandInput} for command's `input` shape.
 * @see {@link ListNodegroupsCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListNodegroupsCommand extends $Command<ListNodegroupsCommandInput, ListNodegroupsCommandOutput, EKSClientResolvedConfig> {
    readonly input: ListNodegroupsCommandInput;
    constructor(input: ListNodegroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListNodegroupsCommandInput, ListNodegroupsCommandOutput>;
    private serialize;
    private deserialize;
}
