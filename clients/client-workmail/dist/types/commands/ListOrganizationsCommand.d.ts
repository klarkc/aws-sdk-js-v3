import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { ListOrganizationsRequest, ListOrganizationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListOrganizationsCommandInput extends ListOrganizationsRequest {
}
export interface ListOrganizationsCommandOutput extends ListOrganizationsResponse, __MetadataBearer {
}
/**
 * <p>Returns summaries of the customer's organizations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListOrganizationsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListOrganizationsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new ListOrganizationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOrganizationsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListOrganizationsCommand extends $Command<ListOrganizationsCommandInput, ListOrganizationsCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: ListOrganizationsCommandInput;
    constructor(input: ListOrganizationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOrganizationsCommandInput, ListOrganizationsCommandOutput>;
    private serialize;
    private deserialize;
}
