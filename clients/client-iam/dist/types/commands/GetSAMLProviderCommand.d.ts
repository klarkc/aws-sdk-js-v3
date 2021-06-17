import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetSAMLProviderRequest, GetSAMLProviderResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSAMLProviderCommandInput extends GetSAMLProviderRequest {
}
export interface GetSAMLProviderCommandOutput extends GetSAMLProviderResponse, __MetadataBearer {
}
/**
 * <p>Returns the SAML provider metadocument that was uploaded when the IAM SAML provider
 *             resource object was created or updated.</p>
 *         <note>
 *             <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetSAMLProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetSAMLProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetSAMLProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSAMLProviderCommandInput} for command's `input` shape.
 * @see {@link GetSAMLProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSAMLProviderCommand extends $Command<GetSAMLProviderCommandInput, GetSAMLProviderCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetSAMLProviderCommandInput;
    constructor(input: GetSAMLProviderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSAMLProviderCommandInput, GetSAMLProviderCommandOutput>;
    private serialize;
    private deserialize;
}
