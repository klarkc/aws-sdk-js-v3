import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { ViewBillingRequest, ViewBillingResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ViewBillingCommandInput extends ViewBillingRequest {
}
export interface ViewBillingCommandOutput extends ViewBillingResponse, __MetadataBearer {
}
/**
 * <p>Returns all the domain-related billing records for the current AWS account for a specified period</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, ViewBillingCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, ViewBillingCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new ViewBillingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ViewBillingCommandInput} for command's `input` shape.
 * @see {@link ViewBillingCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ViewBillingCommand extends $Command<ViewBillingCommandInput, ViewBillingCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: ViewBillingCommandInput;
    constructor(input: ViewBillingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ViewBillingCommandInput, ViewBillingCommandOutput>;
    private serialize;
    private deserialize;
}
