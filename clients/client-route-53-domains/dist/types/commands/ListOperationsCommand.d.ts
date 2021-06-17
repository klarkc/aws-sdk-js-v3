import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { ListOperationsRequest, ListOperationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListOperationsCommandInput extends ListOperationsRequest {
}
export interface ListOperationsCommandOutput extends ListOperationsResponse, __MetadataBearer {
}
/**
 * <p>Returns information about all of the operations that return an operation ID and that have ever been
 * 			performed on domains that were registered by the current account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, ListOperationsCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, ListOperationsCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new ListOperationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOperationsCommandInput} for command's `input` shape.
 * @see {@link ListOperationsCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListOperationsCommand extends $Command<ListOperationsCommandInput, ListOperationsCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: ListOperationsCommandInput;
    constructor(input: ListOperationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOperationsCommandInput, ListOperationsCommandOutput>;
    private serialize;
    private deserialize;
}
