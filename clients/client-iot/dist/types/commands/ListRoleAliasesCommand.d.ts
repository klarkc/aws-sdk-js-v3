import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListRoleAliasesRequest, ListRoleAliasesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRoleAliasesCommandInput extends ListRoleAliasesRequest {
}
export interface ListRoleAliasesCommandOutput extends ListRoleAliasesResponse, __MetadataBearer {
}
/**
 * <p>Lists the role aliases registered in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListRoleAliasesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListRoleAliasesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListRoleAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRoleAliasesCommandInput} for command's `input` shape.
 * @see {@link ListRoleAliasesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRoleAliasesCommand extends $Command<ListRoleAliasesCommandInput, ListRoleAliasesCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListRoleAliasesCommandInput;
    constructor(input: ListRoleAliasesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRoleAliasesCommandInput, ListRoleAliasesCommandOutput>;
    private serialize;
    private deserialize;
}
