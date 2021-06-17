import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { TestIdentityProviderRequest, TestIdentityProviderResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TestIdentityProviderCommandInput extends TestIdentityProviderRequest {
}
export interface TestIdentityProviderCommandOutput extends TestIdentityProviderResponse, __MetadataBearer {
}
/**
 * <p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is
 *         <code>AWS_DIRECTORY_SERVICE</code> or <code>API_Gateway</code>, tests whether your identity
 *       provider is set up successfully. We highly recommend that you call this operation to test your
 *       authentication method as soon as you create your server. By doing so, you can troubleshoot
 *       issues with the identity provider integration to ensure that your users can successfully use
 *       the service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, TestIdentityProviderCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, TestIdentityProviderCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new TestIdentityProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link TestIdentityProviderCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TestIdentityProviderCommand extends $Command<TestIdentityProviderCommandInput, TestIdentityProviderCommandOutput, TransferClientResolvedConfig> {
    readonly input: TestIdentityProviderCommandInput;
    constructor(input: TestIdentityProviderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TestIdentityProviderCommandInput, TestIdentityProviderCommandOutput>;
    private serialize;
    private deserialize;
}
