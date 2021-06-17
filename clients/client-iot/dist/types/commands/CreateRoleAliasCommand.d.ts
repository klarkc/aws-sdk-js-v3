import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateRoleAliasRequest, CreateRoleAliasResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateRoleAliasCommandInput extends CreateRoleAliasRequest {
}
export interface CreateRoleAliasCommandOutput extends CreateRoleAliasResponse, __MetadataBearer {
}
/**
 * <p>Creates a role alias.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateRoleAliasCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateRoleAliasCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateRoleAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRoleAliasCommandInput} for command's `input` shape.
 * @see {@link CreateRoleAliasCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateRoleAliasCommand extends $Command<CreateRoleAliasCommandInput, CreateRoleAliasCommandOutput, IoTClientResolvedConfig> {
    readonly input: CreateRoleAliasCommandInput;
    constructor(input: CreateRoleAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRoleAliasCommandInput, CreateRoleAliasCommandOutput>;
    private serialize;
    private deserialize;
}
