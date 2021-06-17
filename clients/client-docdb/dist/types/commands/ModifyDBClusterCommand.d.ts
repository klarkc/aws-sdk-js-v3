import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { ModifyDBClusterMessage, ModifyDBClusterResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyDBClusterCommandInput extends ModifyDBClusterMessage {
}
export interface ModifyDBClusterCommandOutput extends ModifyDBClusterResult, __MetadataBearer {
}
/**
 * <p>Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database
 *             configuration parameters by specifying these parameters and the new values in the
 *             request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, ModifyDBClusterCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, ModifyDBClusterCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new ModifyDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBClusterCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyDBClusterCommand extends $Command<ModifyDBClusterCommandInput, ModifyDBClusterCommandOutput, DocDBClientResolvedConfig> {
    readonly input: ModifyDBClusterCommandInput;
    constructor(input: ModifyDBClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBClusterCommandInput, ModifyDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
