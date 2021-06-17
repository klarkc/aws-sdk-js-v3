import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { DescribeUsersRequest, DescribeUsersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeUsersCommandInput extends DescribeUsersRequest {
}
export interface DescribeUsersCommandOutput extends DescribeUsersResponse, __MetadataBearer {
}
/**
 * <p>Describes the specified users. You can describe all users or filter the results
 *             (for example, by status or organization).</p>
 *         <p>By default, Amazon WorkDocs returns the first 24 active or pending users. If there
 *             are more results, the response includes a marker that you can use to request the next
 *             set of results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeUsersCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeUsersCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DescribeUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUsersCommandInput} for command's `input` shape.
 * @see {@link DescribeUsersCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeUsersCommand extends $Command<DescribeUsersCommandInput, DescribeUsersCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: DescribeUsersCommandInput;
    constructor(input: DescribeUsersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUsersCommandInput, DescribeUsersCommandOutput>;
    private serialize;
    private deserialize;
}
