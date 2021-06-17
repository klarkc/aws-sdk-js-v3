import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { PutResourcePolicyRequest, PutResourcePolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutResourcePolicyCommandInput extends PutResourcePolicyRequest {
}
export interface PutResourcePolicyCommandOutput extends PutResourcePolicyResponse, __MetadataBearer {
}
/**
 * <p>The name of the policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, PutResourcePolicyCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, PutResourcePolicyCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new PutResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link PutResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutResourcePolicyCommand extends $Command<PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput, SchemasClientResolvedConfig> {
    readonly input: PutResourcePolicyCommandInput;
    constructor(input: PutResourcePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SchemasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
