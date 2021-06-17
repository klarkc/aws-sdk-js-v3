import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { ListIdentityProviderConfigsRequest, ListIdentityProviderConfigsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListIdentityProviderConfigsCommandInput extends ListIdentityProviderConfigsRequest {
}
export interface ListIdentityProviderConfigsCommandOutput extends ListIdentityProviderConfigsResponse, __MetadataBearer {
}
/**
 * <p>A list of identity provider configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListIdentityProviderConfigsCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListIdentityProviderConfigsCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new ListIdentityProviderConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIdentityProviderConfigsCommandInput} for command's `input` shape.
 * @see {@link ListIdentityProviderConfigsCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListIdentityProviderConfigsCommand extends $Command<ListIdentityProviderConfigsCommandInput, ListIdentityProviderConfigsCommandOutput, EKSClientResolvedConfig> {
    readonly input: ListIdentityProviderConfigsCommandInput;
    constructor(input: ListIdentityProviderConfigsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIdentityProviderConfigsCommandInput, ListIdentityProviderConfigsCommandOutput>;
    private serialize;
    private deserialize;
}
