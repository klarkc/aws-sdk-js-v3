import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { ListIdentitiesInput, ListIdentitiesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListIdentitiesCommandInput extends ListIdentitiesInput {
}
export interface ListIdentitiesCommandOutput extends ListIdentitiesResponse, __MetadataBearer {
}
/**
 * <p>Lists the identities in an identity pool.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, ListIdentitiesCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, ListIdentitiesCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new ListIdentitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIdentitiesCommandInput} for command's `input` shape.
 * @see {@link ListIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListIdentitiesCommand extends $Command<ListIdentitiesCommandInput, ListIdentitiesCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: ListIdentitiesCommandInput;
    constructor(input: ListIdentitiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIdentitiesCommandInput, ListIdentitiesCommandOutput>;
    private serialize;
    private deserialize;
}
