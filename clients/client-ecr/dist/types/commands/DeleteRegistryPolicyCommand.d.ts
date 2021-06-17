import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { DeleteRegistryPolicyRequest, DeleteRegistryPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRegistryPolicyCommandInput extends DeleteRegistryPolicyRequest {
}
export interface DeleteRegistryPolicyCommandOutput extends DeleteRegistryPolicyResponse, __MetadataBearer {
}
/**
 * <p>Deletes the registry permissions policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DeleteRegistryPolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DeleteRegistryPolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new DeleteRegistryPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRegistryPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteRegistryPolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRegistryPolicyCommand extends $Command<DeleteRegistryPolicyCommandInput, DeleteRegistryPolicyCommandOutput, ECRClientResolvedConfig> {
    readonly input: DeleteRegistryPolicyCommandInput;
    constructor(input: DeleteRegistryPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRegistryPolicyCommandInput, DeleteRegistryPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
