import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ListUserImportJobsRequest, ListUserImportJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListUserImportJobsCommandInput extends ListUserImportJobsRequest {
}
export interface ListUserImportJobsCommandOutput extends ListUserImportJobsResponse, __MetadataBearer {
}
/**
 * <p>Lists the user import jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ListUserImportJobsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListUserImportJobsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new ListUserImportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUserImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListUserImportJobsCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListUserImportJobsCommand extends $Command<ListUserImportJobsCommandInput, ListUserImportJobsCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ListUserImportJobsCommandInput;
    constructor(input: ListUserImportJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUserImportJobsCommandInput, ListUserImportJobsCommandOutput>;
    private serialize;
    private deserialize;
}
