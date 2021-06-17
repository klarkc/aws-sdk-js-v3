import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { CreateStudioSessionMappingInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateStudioSessionMappingCommandInput extends CreateStudioSessionMappingInput {
}
export interface CreateStudioSessionMappingCommandOutput extends __MetadataBearer {
}
/**
 * <p>Maps a user or group to the Amazon EMR Studio specified by <code>StudioId</code>, and
 *          applies a session policy to refine Studio permissions for that user or group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, CreateStudioSessionMappingCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, CreateStudioSessionMappingCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new CreateStudioSessionMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStudioSessionMappingCommandInput} for command's `input` shape.
 * @see {@link CreateStudioSessionMappingCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateStudioSessionMappingCommand extends $Command<CreateStudioSessionMappingCommandInput, CreateStudioSessionMappingCommandOutput, EMRClientResolvedConfig> {
    readonly input: CreateStudioSessionMappingCommandInput;
    constructor(input: CreateStudioSessionMappingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateStudioSessionMappingCommandInput, CreateStudioSessionMappingCommandOutput>;
    private serialize;
    private deserialize;
}
