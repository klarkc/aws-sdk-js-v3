import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListTrafficPolicyVersionsRequest, ListTrafficPolicyVersionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTrafficPolicyVersionsCommandInput extends ListTrafficPolicyVersionsRequest {
}
export interface ListTrafficPolicyVersionsCommandOutput extends ListTrafficPolicyVersionsResponse, __MetadataBearer {
}
/**
 * <p>Gets information about all of the versions for a specified traffic policy.</p>
 * 		       <p>Traffic policy versions are listed in numerical order by <code>VersionNumber</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListTrafficPolicyVersionsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListTrafficPolicyVersionsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListTrafficPolicyVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrafficPolicyVersionsCommandInput} for command's `input` shape.
 * @see {@link ListTrafficPolicyVersionsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTrafficPolicyVersionsCommand extends $Command<ListTrafficPolicyVersionsCommandInput, ListTrafficPolicyVersionsCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ListTrafficPolicyVersionsCommandInput;
    constructor(input: ListTrafficPolicyVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTrafficPolicyVersionsCommandInput, ListTrafficPolicyVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
