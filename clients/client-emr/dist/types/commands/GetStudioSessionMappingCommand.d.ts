import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { GetStudioSessionMappingInput, GetStudioSessionMappingOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetStudioSessionMappingCommandInput extends GetStudioSessionMappingInput {
}
export interface GetStudioSessionMappingCommandOutput extends GetStudioSessionMappingOutput, __MetadataBearer {
}
/**
 * <p>Fetches mapping details for the specified Amazon EMR Studio and identity (user or
 *          group).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetStudioSessionMappingCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetStudioSessionMappingCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new GetStudioSessionMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStudioSessionMappingCommandInput} for command's `input` shape.
 * @see {@link GetStudioSessionMappingCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetStudioSessionMappingCommand extends $Command<GetStudioSessionMappingCommandInput, GetStudioSessionMappingCommandOutput, EMRClientResolvedConfig> {
    readonly input: GetStudioSessionMappingCommandInput;
    constructor(input: GetStudioSessionMappingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetStudioSessionMappingCommandInput, GetStudioSessionMappingCommandOutput>;
    private serialize;
    private deserialize;
}
