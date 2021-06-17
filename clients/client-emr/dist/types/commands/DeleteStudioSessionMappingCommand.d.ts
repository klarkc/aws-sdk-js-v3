import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { DeleteStudioSessionMappingInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteStudioSessionMappingCommandInput extends DeleteStudioSessionMappingInput {
}
export interface DeleteStudioSessionMappingCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes a user or group from an Amazon EMR Studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DeleteStudioSessionMappingCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DeleteStudioSessionMappingCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new DeleteStudioSessionMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStudioSessionMappingCommandInput} for command's `input` shape.
 * @see {@link DeleteStudioSessionMappingCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteStudioSessionMappingCommand extends $Command<DeleteStudioSessionMappingCommandInput, DeleteStudioSessionMappingCommandOutput, EMRClientResolvedConfig> {
    readonly input: DeleteStudioSessionMappingCommandInput;
    constructor(input: DeleteStudioSessionMappingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteStudioSessionMappingCommandInput, DeleteStudioSessionMappingCommandOutput>;
    private serialize;
    private deserialize;
}
