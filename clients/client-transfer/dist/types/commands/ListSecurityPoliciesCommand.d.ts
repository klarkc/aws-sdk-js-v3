import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { ListSecurityPoliciesRequest, ListSecurityPoliciesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSecurityPoliciesCommandInput extends ListSecurityPoliciesRequest {
}
export interface ListSecurityPoliciesCommandOutput extends ListSecurityPoliciesResponse, __MetadataBearer {
}
/**
 * <p>Lists the security policies that are attached to your file transfer protocol-enabled
 *       servers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListSecurityPoliciesCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListSecurityPoliciesCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new ListSecurityPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSecurityPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListSecurityPoliciesCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSecurityPoliciesCommand extends $Command<ListSecurityPoliciesCommandInput, ListSecurityPoliciesCommandOutput, TransferClientResolvedConfig> {
    readonly input: ListSecurityPoliciesCommandInput;
    constructor(input: ListSecurityPoliciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSecurityPoliciesCommandInput, ListSecurityPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
