import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { VerifyTrustRequest, VerifyTrustResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface VerifyTrustCommandInput extends VerifyTrustRequest {
}
export interface VerifyTrustCommandOutput extends VerifyTrustResult, __MetadataBearer {
}
/**
 * <p>AWS Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships.</p>
 *          <p>This action verifies a trust relationship between your AWS Managed Microsoft AD directory and an external domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, VerifyTrustCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, VerifyTrustCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new VerifyTrustCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link VerifyTrustCommandInput} for command's `input` shape.
 * @see {@link VerifyTrustCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class VerifyTrustCommand extends $Command<VerifyTrustCommandInput, VerifyTrustCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: VerifyTrustCommandInput;
    constructor(input: VerifyTrustCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<VerifyTrustCommandInput, VerifyTrustCommandOutput>;
    private serialize;
    private deserialize;
}
