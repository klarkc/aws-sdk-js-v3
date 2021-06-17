import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateRoleAliasRequest, UpdateRoleAliasResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRoleAliasCommandInput extends UpdateRoleAliasRequest {
}
export interface UpdateRoleAliasCommandOutput extends UpdateRoleAliasResponse, __MetadataBearer {
}
/**
 * <p>Updates a role alias.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateRoleAliasCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateRoleAliasCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateRoleAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRoleAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateRoleAliasCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRoleAliasCommand extends $Command<UpdateRoleAliasCommandInput, UpdateRoleAliasCommandOutput, IoTClientResolvedConfig> {
    readonly input: UpdateRoleAliasCommandInput;
    constructor(input: UpdateRoleAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRoleAliasCommandInput, UpdateRoleAliasCommandOutput>;
    private serialize;
    private deserialize;
}
