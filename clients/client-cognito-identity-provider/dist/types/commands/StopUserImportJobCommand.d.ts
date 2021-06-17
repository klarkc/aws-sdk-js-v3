import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { StopUserImportJobRequest, StopUserImportJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopUserImportJobCommandInput extends StopUserImportJobRequest {
}
export interface StopUserImportJobCommandOutput extends StopUserImportJobResponse, __MetadataBearer {
}
/**
 * <p>Stops the user import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, StopUserImportJobCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, StopUserImportJobCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new StopUserImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopUserImportJobCommandInput} for command's `input` shape.
 * @see {@link StopUserImportJobCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopUserImportJobCommand extends $Command<StopUserImportJobCommandInput, StopUserImportJobCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: StopUserImportJobCommandInput;
    constructor(input: StopUserImportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopUserImportJobCommandInput, StopUserImportJobCommandOutput>;
    private serialize;
    private deserialize;
}
