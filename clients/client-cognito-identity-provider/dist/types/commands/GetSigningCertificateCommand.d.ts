import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { GetSigningCertificateRequest, GetSigningCertificateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSigningCertificateCommandInput extends GetSigningCertificateRequest {
}
export interface GetSigningCertificateCommandOutput extends GetSigningCertificateResponse, __MetadataBearer {
}
/**
 * <p>This method takes a user pool ID, and returns the signing certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetSigningCertificateCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetSigningCertificateCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new GetSigningCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSigningCertificateCommandInput} for command's `input` shape.
 * @see {@link GetSigningCertificateCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSigningCertificateCommand extends $Command<GetSigningCertificateCommandInput, GetSigningCertificateCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: GetSigningCertificateCommandInput;
    constructor(input: GetSigningCertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSigningCertificateCommandInput, GetSigningCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
