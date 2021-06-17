import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetServiceRoleForAccountRequest, GetServiceRoleForAccountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetServiceRoleForAccountCommandInput extends GetServiceRoleForAccountRequest {
}
export interface GetServiceRoleForAccountCommandOutput extends GetServiceRoleForAccountResponse, __MetadataBearer {
}
/**
 * Retrieves the service role that is attached to your account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetServiceRoleForAccountCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetServiceRoleForAccountCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetServiceRoleForAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceRoleForAccountCommandInput} for command's `input` shape.
 * @see {@link GetServiceRoleForAccountCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetServiceRoleForAccountCommand extends $Command<GetServiceRoleForAccountCommandInput, GetServiceRoleForAccountCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetServiceRoleForAccountCommandInput;
    constructor(input: GetServiceRoleForAccountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetServiceRoleForAccountCommandInput, GetServiceRoleForAccountCommandOutput>;
    private serialize;
    private deserialize;
}
