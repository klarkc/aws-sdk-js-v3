import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListHealthChecksRequest, ListHealthChecksResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListHealthChecksCommandInput extends ListHealthChecksRequest {
}
export interface ListHealthChecksCommandOutput extends ListHealthChecksResponse, __MetadataBearer {
}
/**
 * <p>Retrieve a list of the health checks that are associated with the current AWS account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListHealthChecksCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListHealthChecksCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListHealthChecksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHealthChecksCommandInput} for command's `input` shape.
 * @see {@link ListHealthChecksCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListHealthChecksCommand extends $Command<ListHealthChecksCommandInput, ListHealthChecksCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ListHealthChecksCommandInput;
    constructor(input: ListHealthChecksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHealthChecksCommandInput, ListHealthChecksCommandOutput>;
    private serialize;
    private deserialize;
}
