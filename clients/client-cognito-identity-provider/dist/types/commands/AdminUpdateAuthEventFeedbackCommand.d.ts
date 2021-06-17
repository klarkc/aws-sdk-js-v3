import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminUpdateAuthEventFeedbackRequest, AdminUpdateAuthEventFeedbackResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AdminUpdateAuthEventFeedbackCommandInput extends AdminUpdateAuthEventFeedbackRequest {
}
export interface AdminUpdateAuthEventFeedbackCommandOutput extends AdminUpdateAuthEventFeedbackResponse, __MetadataBearer {
}
/**
 * <p>Provides feedback for an authentication event as to whether it was from a valid user.
 *             This feedback is used for improving the risk evaluation decision for the user pool as
 *             part of Amazon Cognito advanced security.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminUpdateAuthEventFeedbackCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminUpdateAuthEventFeedbackCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminUpdateAuthEventFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminUpdateAuthEventFeedbackCommandInput} for command's `input` shape.
 * @see {@link AdminUpdateAuthEventFeedbackCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AdminUpdateAuthEventFeedbackCommand extends $Command<AdminUpdateAuthEventFeedbackCommandInput, AdminUpdateAuthEventFeedbackCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminUpdateAuthEventFeedbackCommandInput;
    constructor(input: AdminUpdateAuthEventFeedbackCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminUpdateAuthEventFeedbackCommandInput, AdminUpdateAuthEventFeedbackCommandOutput>;
    private serialize;
    private deserialize;
}
