import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { GetOperationDetailRequest, GetOperationDetailResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetOperationDetailCommandInput extends GetOperationDetailRequest {
}
export interface GetOperationDetailCommandOutput extends GetOperationDetailResponse, __MetadataBearer {
}
/**
 * <p>This operation returns the current status of an operation that is not completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, GetOperationDetailCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, GetOperationDetailCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new GetOperationDetailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOperationDetailCommandInput} for command's `input` shape.
 * @see {@link GetOperationDetailCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetOperationDetailCommand extends $Command<GetOperationDetailCommandInput, GetOperationDetailCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: GetOperationDetailCommandInput;
    constructor(input: GetOperationDetailCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOperationDetailCommandInput, GetOperationDetailCommandOutput>;
    private serialize;
    private deserialize;
}
