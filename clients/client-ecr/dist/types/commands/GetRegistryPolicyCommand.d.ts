import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { GetRegistryPolicyRequest, GetRegistryPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRegistryPolicyCommandInput extends GetRegistryPolicyRequest {
}
export interface GetRegistryPolicyCommandOutput extends GetRegistryPolicyResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the permissions policy for a registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetRegistryPolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetRegistryPolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new GetRegistryPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRegistryPolicyCommandInput} for command's `input` shape.
 * @see {@link GetRegistryPolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRegistryPolicyCommand extends $Command<GetRegistryPolicyCommandInput, GetRegistryPolicyCommandOutput, ECRClientResolvedConfig> {
    readonly input: GetRegistryPolicyCommandInput;
    constructor(input: GetRegistryPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRegistryPolicyCommandInput, GetRegistryPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
