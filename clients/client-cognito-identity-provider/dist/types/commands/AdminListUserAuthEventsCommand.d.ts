import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminListUserAuthEventsRequest, AdminListUserAuthEventsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AdminListUserAuthEventsCommandInput extends AdminListUserAuthEventsRequest {
}
export interface AdminListUserAuthEventsCommandOutput extends AdminListUserAuthEventsResponse, __MetadataBearer {
}
/**
 * <p>Lists a history of user activity and any risks detected as part of Amazon Cognito
 *             advanced security.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminListUserAuthEventsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminListUserAuthEventsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminListUserAuthEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminListUserAuthEventsCommandInput} for command's `input` shape.
 * @see {@link AdminListUserAuthEventsCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AdminListUserAuthEventsCommand extends $Command<AdminListUserAuthEventsCommandInput, AdminListUserAuthEventsCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminListUserAuthEventsCommandInput;
    constructor(input: AdminListUserAuthEventsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminListUserAuthEventsCommandInput, AdminListUserAuthEventsCommandOutput>;
    private serialize;
    private deserialize;
}
