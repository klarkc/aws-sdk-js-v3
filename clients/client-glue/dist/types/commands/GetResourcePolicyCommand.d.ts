import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetResourcePolicyRequest, GetResourcePolicyResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetResourcePolicyCommandInput extends GetResourcePolicyRequest {
}
export interface GetResourcePolicyCommandOutput extends GetResourcePolicyResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a specified resource policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetResourcePolicyCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetResourcePolicyCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link GetResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetResourcePolicyCommand extends $Command<GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetResourcePolicyCommandInput;
    constructor(input: GetResourcePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
