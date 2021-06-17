import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { UpdateStudioSessionMappingInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateStudioSessionMappingCommandInput extends UpdateStudioSessionMappingInput {
}
export interface UpdateStudioSessionMappingCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates the session policy attached to the user or group for the specified Amazon EMR
 *          Studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, UpdateStudioSessionMappingCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, UpdateStudioSessionMappingCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new UpdateStudioSessionMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStudioSessionMappingCommandInput} for command's `input` shape.
 * @see {@link UpdateStudioSessionMappingCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateStudioSessionMappingCommand extends $Command<UpdateStudioSessionMappingCommandInput, UpdateStudioSessionMappingCommandOutput, EMRClientResolvedConfig> {
    readonly input: UpdateStudioSessionMappingCommandInput;
    constructor(input: UpdateStudioSessionMappingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateStudioSessionMappingCommandInput, UpdateStudioSessionMappingCommandOutput>;
    private serialize;
    private deserialize;
}
