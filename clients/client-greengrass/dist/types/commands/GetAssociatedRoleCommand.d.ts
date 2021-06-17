import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetAssociatedRoleRequest, GetAssociatedRoleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAssociatedRoleCommandInput extends GetAssociatedRoleRequest {
}
export interface GetAssociatedRoleCommandOutput extends GetAssociatedRoleResponse, __MetadataBearer {
}
/**
 * Retrieves the role associated with a particular group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetAssociatedRoleCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetAssociatedRoleCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetAssociatedRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssociatedRoleCommandInput} for command's `input` shape.
 * @see {@link GetAssociatedRoleCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAssociatedRoleCommand extends $Command<GetAssociatedRoleCommandInput, GetAssociatedRoleCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetAssociatedRoleCommandInput;
    constructor(input: GetAssociatedRoleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAssociatedRoleCommandInput, GetAssociatedRoleCommandOutput>;
    private serialize;
    private deserialize;
}
