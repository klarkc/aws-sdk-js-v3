import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { ListProfileObjectsRequest, ListProfileObjectsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListProfileObjectsCommandInput extends ListProfileObjectsRequest {
}
export interface ListProfileObjectsCommandOutput extends ListProfileObjectsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of objects associated with a profile of a given ProfileObjectType.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListProfileObjectsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListProfileObjectsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new ListProfileObjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProfileObjectsCommandInput} for command's `input` shape.
 * @see {@link ListProfileObjectsCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListProfileObjectsCommand extends $Command<ListProfileObjectsCommandInput, ListProfileObjectsCommandOutput, CustomerProfilesClientResolvedConfig> {
    readonly input: ListProfileObjectsCommandInput;
    constructor(input: ListProfileObjectsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CustomerProfilesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProfileObjectsCommandInput, ListProfileObjectsCommandOutput>;
    private serialize;
    private deserialize;
}
