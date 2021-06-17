import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ScheduledAction } from "../models/models_0";
import { ModifyScheduledActionMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyScheduledActionCommandInput extends ModifyScheduledActionMessage {
}
export interface ModifyScheduledActionCommandOutput extends ScheduledAction, __MetadataBearer {
}
/**
 * <p>Modifies a scheduled action.
 *             </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyScheduledActionCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyScheduledActionCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyScheduledActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyScheduledActionCommandInput} for command's `input` shape.
 * @see {@link ModifyScheduledActionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyScheduledActionCommand extends $Command<ModifyScheduledActionCommandInput, ModifyScheduledActionCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ModifyScheduledActionCommandInput;
    constructor(input: ModifyScheduledActionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyScheduledActionCommandInput, ModifyScheduledActionCommandOutput>;
    private serialize;
    private deserialize;
}
