import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { StartUserImportJobRequest, StartUserImportJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartUserImportJobCommandInput extends StartUserImportJobRequest {
}
export interface StartUserImportJobCommandOutput extends StartUserImportJobResponse, __MetadataBearer {
}
/**
 * <p>Starts the user import.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, StartUserImportJobCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, StartUserImportJobCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new StartUserImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartUserImportJobCommandInput} for command's `input` shape.
 * @see {@link StartUserImportJobCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartUserImportJobCommand extends $Command<StartUserImportJobCommandInput, StartUserImportJobCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: StartUserImportJobCommandInput;
    constructor(input: StartUserImportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartUserImportJobCommandInput, StartUserImportJobCommandOutput>;
    private serialize;
    private deserialize;
}
