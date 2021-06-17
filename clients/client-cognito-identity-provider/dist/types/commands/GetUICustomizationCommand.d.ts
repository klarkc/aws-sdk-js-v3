import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { GetUICustomizationRequest, GetUICustomizationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetUICustomizationCommandInput extends GetUICustomizationRequest {
}
export interface GetUICustomizationCommandOutput extends GetUICustomizationResponse, __MetadataBearer {
}
/**
 * <p>Gets the UI Customization information for a particular app client's app UI, if there
 *             is something set. If nothing is set for the particular client, but there is an existing
 *             pool level customization (app <code>clientId</code> will be <code>ALL</code>), then that
 *             is returned. If nothing is present, then an empty shape is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetUICustomizationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetUICustomizationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new GetUICustomizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUICustomizationCommandInput} for command's `input` shape.
 * @see {@link GetUICustomizationCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetUICustomizationCommand extends $Command<GetUICustomizationCommandInput, GetUICustomizationCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: GetUICustomizationCommandInput;
    constructor(input: GetUICustomizationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetUICustomizationCommandInput, GetUICustomizationCommandOutput>;
    private serialize;
    private deserialize;
}
