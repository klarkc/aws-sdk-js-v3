import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListIntegrationAssociationsRequest, ListIntegrationAssociationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListIntegrationAssociationsCommandInput extends ListIntegrationAssociationsRequest {
}
export interface ListIntegrationAssociationsCommandOutput extends ListIntegrationAssociationsResponse, __MetadataBearer {
}
/**
 * <p>Provides summary information about the AppIntegration associations for the specified Amazon Connect
 *    instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListIntegrationAssociationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListIntegrationAssociationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListIntegrationAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIntegrationAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListIntegrationAssociationsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListIntegrationAssociationsCommand extends $Command<ListIntegrationAssociationsCommandInput, ListIntegrationAssociationsCommandOutput, ConnectClientResolvedConfig> {
    readonly input: ListIntegrationAssociationsCommandInput;
    constructor(input: ListIntegrationAssociationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIntegrationAssociationsCommandInput, ListIntegrationAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
