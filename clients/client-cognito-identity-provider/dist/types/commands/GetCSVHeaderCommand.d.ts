import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { GetCSVHeaderRequest, GetCSVHeaderResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCSVHeaderCommandInput extends GetCSVHeaderRequest {
}
export interface GetCSVHeaderCommandOutput extends GetCSVHeaderResponse, __MetadataBearer {
}
/**
 * <p>Gets the header information for the .csv file to be used as input for the user import
 *             job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetCSVHeaderCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetCSVHeaderCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new GetCSVHeaderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCSVHeaderCommandInput} for command's `input` shape.
 * @see {@link GetCSVHeaderCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCSVHeaderCommand extends $Command<GetCSVHeaderCommandInput, GetCSVHeaderCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: GetCSVHeaderCommandInput;
    constructor(input: GetCSVHeaderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCSVHeaderCommandInput, GetCSVHeaderCommandOutput>;
    private serialize;
    private deserialize;
}
