import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { GetResourcePoliciesRequest, GetResourcePoliciesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetResourcePoliciesCommandInput extends GetResourcePoliciesRequest {
}
export interface GetResourcePoliciesCommandOutput extends GetResourcePoliciesResponse, __MetadataBearer {
}
/**
 * <p>Gets the policies for the specified resources that you own and have shared.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, GetResourcePoliciesCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, GetResourcePoliciesCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new GetResourcePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourcePoliciesCommandInput} for command's `input` shape.
 * @see {@link GetResourcePoliciesCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetResourcePoliciesCommand extends $Command<GetResourcePoliciesCommandInput, GetResourcePoliciesCommandOutput, RAMClientResolvedConfig> {
    readonly input: GetResourcePoliciesCommandInput;
    constructor(input: GetResourcePoliciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResourcePoliciesCommandInput, GetResourcePoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
