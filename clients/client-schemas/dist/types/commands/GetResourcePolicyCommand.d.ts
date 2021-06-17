import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { GetResourcePolicyRequest, GetResourcePolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetResourcePolicyCommandInput extends GetResourcePolicyRequest {
}
export interface GetResourcePolicyCommandOutput extends GetResourcePolicyResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the resource-based policy attached to a given registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, GetResourcePolicyCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, GetResourcePolicyCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new GetResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link GetResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetResourcePolicyCommand extends $Command<GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput, SchemasClientResolvedConfig> {
    readonly input: GetResourcePolicyCommandInput;
    constructor(input: GetResourcePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SchemasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
