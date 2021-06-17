import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ListResolverRulesRequest, ListResolverRulesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListResolverRulesCommandInput extends ListResolverRulesRequest {
}
export interface ListResolverRulesCommandOutput extends ListResolverRulesResponse, __MetadataBearer {
}
/**
 * <p>Lists the Resolver rules that were created using the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverRulesCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverRulesCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListResolverRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResolverRulesCommandInput} for command's `input` shape.
 * @see {@link ListResolverRulesCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListResolverRulesCommand extends $Command<ListResolverRulesCommandInput, ListResolverRulesCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: ListResolverRulesCommandInput;
    constructor(input: ListResolverRulesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResolverRulesCommandInput, ListResolverRulesCommandOutput>;
    private serialize;
    private deserialize;
}
