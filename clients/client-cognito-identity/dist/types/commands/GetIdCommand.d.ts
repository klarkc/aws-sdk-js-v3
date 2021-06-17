import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { GetIdInput, GetIdResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetIdCommandInput extends GetIdInput {
}
export interface GetIdCommandOutput extends GetIdResponse, __MetadataBearer {
}
/**
 * <p>Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an
 *          implicit linked account.</p>
 *          <p>This is a public API. You do not need any credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetIdCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetIdCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new GetIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIdCommandInput} for command's `input` shape.
 * @see {@link GetIdCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetIdCommand extends $Command<GetIdCommandInput, GetIdCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: GetIdCommandInput;
    constructor(input: GetIdCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetIdCommandInput, GetIdCommandOutput>;
    private serialize;
    private deserialize;
}
