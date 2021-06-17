import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { PauseClusterMessage } from "../models/models_0";
import { PauseClusterResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PauseClusterCommandInput extends PauseClusterMessage {
}
export interface PauseClusterCommandOutput extends PauseClusterResult, __MetadataBearer {
}
/**
 * <p>Pauses a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, PauseClusterCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, PauseClusterCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new PauseClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PauseClusterCommandInput} for command's `input` shape.
 * @see {@link PauseClusterCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PauseClusterCommand extends $Command<PauseClusterCommandInput, PauseClusterCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: PauseClusterCommandInput;
    constructor(input: PauseClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PauseClusterCommandInput, PauseClusterCommandOutput>;
    private serialize;
    private deserialize;
}
