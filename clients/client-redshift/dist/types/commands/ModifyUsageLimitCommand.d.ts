import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { UsageLimit } from "../models/models_0";
import { ModifyUsageLimitMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyUsageLimitCommandInput extends ModifyUsageLimitMessage {
}
export interface ModifyUsageLimitCommandOutput extends UsageLimit, __MetadataBearer {
}
/**
 * <p>Modifies a usage limit in a cluster.
 *             You can't modify the feature type or period of a usage limit.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyUsageLimitCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyUsageLimitCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyUsageLimitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyUsageLimitCommandInput} for command's `input` shape.
 * @see {@link ModifyUsageLimitCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyUsageLimitCommand extends $Command<ModifyUsageLimitCommandInput, ModifyUsageLimitCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ModifyUsageLimitCommandInput;
    constructor(input: ModifyUsageLimitCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyUsageLimitCommandInput, ModifyUsageLimitCommandOutput>;
    private serialize;
    private deserialize;
}
