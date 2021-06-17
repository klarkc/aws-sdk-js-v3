import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { CreateUserImportJobRequest, CreateUserImportJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateUserImportJobCommandInput extends CreateUserImportJobRequest {
}
export interface CreateUserImportJobCommandOutput extends CreateUserImportJobResponse, __MetadataBearer {
}
/**
 * <p>Creates the user import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, CreateUserImportJobCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, CreateUserImportJobCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new CreateUserImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserImportJobCommandInput} for command's `input` shape.
 * @see {@link CreateUserImportJobCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateUserImportJobCommand extends $Command<CreateUserImportJobCommandInput, CreateUserImportJobCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: CreateUserImportJobCommandInput;
    constructor(input: CreateUserImportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUserImportJobCommandInput, CreateUserImportJobCommandOutput>;
    private serialize;
    private deserialize;
}
