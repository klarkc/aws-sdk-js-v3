import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateTriggerRequest, UpdateTriggerResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateTriggerCommandInput extends UpdateTriggerRequest {
}
export interface UpdateTriggerCommandOutput extends UpdateTriggerResponse, __MetadataBearer {
}
/**
 * <p>Updates a trigger definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateTriggerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateTriggerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateTriggerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTriggerCommandInput} for command's `input` shape.
 * @see {@link UpdateTriggerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateTriggerCommand extends $Command<UpdateTriggerCommandInput, UpdateTriggerCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateTriggerCommandInput;
    constructor(input: UpdateTriggerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTriggerCommandInput, UpdateTriggerCommandOutput>;
    private serialize;
    private deserialize;
}
