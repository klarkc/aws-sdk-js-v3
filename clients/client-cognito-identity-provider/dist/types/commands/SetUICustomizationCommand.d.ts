import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { SetUICustomizationRequest, SetUICustomizationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetUICustomizationCommandInput extends SetUICustomizationRequest {
}
export interface SetUICustomizationCommandOutput extends SetUICustomizationResponse, __MetadataBearer {
}
/**
 * <p>Sets the UI customization information for a user pool's built-in app UI.</p>
 *         <p>You can specify app UI customization settings for a single client (with a specific
 *                 <code>clientId</code>) or for all clients (by setting the <code>clientId</code> to
 *                 <code>ALL</code>). If you specify <code>ALL</code>, the default configuration will
 *             be used for every client that has no UI customization set previously. If you specify UI
 *             customization settings for a particular client, it will no longer fall back to the
 *                 <code>ALL</code> configuration. </p>
 *         <note>
 *             <p>To use this API, your user pool must have a domain associated with it. Otherwise,
 *                 there is no place to host the app's pages, and the service will throw an
 *                 error.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, SetUICustomizationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SetUICustomizationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new SetUICustomizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetUICustomizationCommandInput} for command's `input` shape.
 * @see {@link SetUICustomizationCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetUICustomizationCommand extends $Command<SetUICustomizationCommandInput, SetUICustomizationCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: SetUICustomizationCommandInput;
    constructor(input: SetUICustomizationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetUICustomizationCommandInput, SetUICustomizationCommandOutput>;
    private serialize;
    private deserialize;
}
