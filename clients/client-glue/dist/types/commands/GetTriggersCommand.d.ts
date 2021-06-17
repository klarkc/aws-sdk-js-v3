import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetTriggersRequest, GetTriggersResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTriggersCommandInput extends GetTriggersRequest {
}
export interface GetTriggersCommandOutput extends GetTriggersResponse, __MetadataBearer {
}
/**
 * <p>Gets all the triggers associated with a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetTriggersCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetTriggersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetTriggersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTriggersCommandInput} for command's `input` shape.
 * @see {@link GetTriggersCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTriggersCommand extends $Command<GetTriggersCommandInput, GetTriggersCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetTriggersCommandInput;
    constructor(input: GetTriggersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTriggersCommandInput, GetTriggersCommandOutput>;
    private serialize;
    private deserialize;
}
