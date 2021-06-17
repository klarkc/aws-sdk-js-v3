import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { ListResourceSharePermissionsRequest, ListResourceSharePermissionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListResourceSharePermissionsCommandInput extends ListResourceSharePermissionsRequest {
}
export interface ListResourceSharePermissionsCommandOutput extends ListResourceSharePermissionsResponse, __MetadataBearer {
}
/**
 * <p>Lists the AWS RAM permissions that are associated with a resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListResourceSharePermissionsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListResourceSharePermissionsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new ListResourceSharePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceSharePermissionsCommandInput} for command's `input` shape.
 * @see {@link ListResourceSharePermissionsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListResourceSharePermissionsCommand extends $Command<ListResourceSharePermissionsCommandInput, ListResourceSharePermissionsCommandOutput, RAMClientResolvedConfig> {
    readonly input: ListResourceSharePermissionsCommandInput;
    constructor(input: ListResourceSharePermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourceSharePermissionsCommandInput, ListResourceSharePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
