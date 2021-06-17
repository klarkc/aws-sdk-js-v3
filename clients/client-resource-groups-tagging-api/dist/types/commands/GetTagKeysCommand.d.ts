import { ResourceGroupsTaggingAPIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsTaggingAPIClient";
import { GetTagKeysInput, GetTagKeysOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTagKeysCommandInput extends GetTagKeysInput {
}
export interface GetTagKeysCommandOutput extends GetTagKeysOutput, __MetadataBearer {
}
/**
 * <p>Returns all tag keys currently in use in the specified Region for the calling AWS
 *             account.</p>
 *          <p>This operation supports pagination, where the response can be sent in
 *     multiple pages. You should check the <code>PaginationToken</code> response parameter to determine
 *     if there are additional results available to return. Repeat the query, passing the
 *     <code>PaginationToken</code> response parameter value as an input to the next request until you
 *     recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that
 *     there are no more results waiting to be returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, GetTagKeysCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, GetTagKeysCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const command = new GetTagKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTagKeysCommandInput} for command's `input` shape.
 * @see {@link GetTagKeysCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsTaggingAPIClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTagKeysCommand extends $Command<GetTagKeysCommandInput, GetTagKeysCommandOutput, ResourceGroupsTaggingAPIClientResolvedConfig> {
    readonly input: GetTagKeysCommandInput;
    constructor(input: GetTagKeysCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ResourceGroupsTaggingAPIClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTagKeysCommandInput, GetTagKeysCommandOutput>;
    private serialize;
    private deserialize;
}
