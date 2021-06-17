import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ListResourceServersRequest, ListResourceServersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListResourceServersCommandInput extends ListResourceServersRequest {
}
export interface ListResourceServersCommandOutput extends ListResourceServersResponse, __MetadataBearer {
}
/**
 * <p>Lists the resource servers for a user pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ListResourceServersCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListResourceServersCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new ListResourceServersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceServersCommandInput} for command's `input` shape.
 * @see {@link ListResourceServersCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListResourceServersCommand extends $Command<ListResourceServersCommandInput, ListResourceServersCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ListResourceServersCommandInput;
    constructor(input: ListResourceServersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourceServersCommandInput, ListResourceServersCommandOutput>;
    private serialize;
    private deserialize;
}
