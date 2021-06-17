import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { ListProfileObjectTypeTemplatesRequest, ListProfileObjectTypeTemplatesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListProfileObjectTypeTemplatesCommandInput extends ListProfileObjectTypeTemplatesRequest {
}
export interface ListProfileObjectTypeTemplatesCommandOutput extends ListProfileObjectTypeTemplatesResponse, __MetadataBearer {
}
/**
 * <p>Lists all of the template information for object types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListProfileObjectTypeTemplatesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListProfileObjectTypeTemplatesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new ListProfileObjectTypeTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProfileObjectTypeTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListProfileObjectTypeTemplatesCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListProfileObjectTypeTemplatesCommand extends $Command<ListProfileObjectTypeTemplatesCommandInput, ListProfileObjectTypeTemplatesCommandOutput, CustomerProfilesClientResolvedConfig> {
    readonly input: ListProfileObjectTypeTemplatesCommandInput;
    constructor(input: ListProfileObjectTypeTemplatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CustomerProfilesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProfileObjectTypeTemplatesCommandInput, ListProfileObjectTypeTemplatesCommandOutput>;
    private serialize;
    private deserialize;
}
