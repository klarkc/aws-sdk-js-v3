import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListStudioSessionMappingsInput, ListStudioSessionMappingsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListStudioSessionMappingsCommandInput extends ListStudioSessionMappingsInput {
}
export interface ListStudioSessionMappingsCommandOutput extends ListStudioSessionMappingsOutput, __MetadataBearer {
}
/**
 * <p>Returns a list of all user or group session mappings for the Amazon EMR Studio specified by
 *             <code>StudioId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListStudioSessionMappingsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListStudioSessionMappingsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListStudioSessionMappingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStudioSessionMappingsCommandInput} for command's `input` shape.
 * @see {@link ListStudioSessionMappingsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListStudioSessionMappingsCommand extends $Command<ListStudioSessionMappingsCommandInput, ListStudioSessionMappingsCommandOutput, EMRClientResolvedConfig> {
    readonly input: ListStudioSessionMappingsCommandInput;
    constructor(input: ListStudioSessionMappingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStudioSessionMappingsCommandInput, ListStudioSessionMappingsCommandOutput>;
    private serialize;
    private deserialize;
}
