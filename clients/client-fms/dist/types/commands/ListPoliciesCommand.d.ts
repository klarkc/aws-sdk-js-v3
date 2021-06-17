import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { ListPoliciesRequest, ListPoliciesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPoliciesCommandInput extends ListPoliciesRequest {
}
export interface ListPoliciesCommandOutput extends ListPoliciesResponse, __MetadataBearer {
}
/**
 * <p>Returns an array of <code>PolicySummary</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListPoliciesCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListPoliciesCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new ListPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListPoliciesCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPoliciesCommand extends $Command<ListPoliciesCommandInput, ListPoliciesCommandOutput, FMSClientResolvedConfig> {
    readonly input: ListPoliciesCommandInput;
    constructor(input: ListPoliciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPoliciesCommandInput, ListPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
