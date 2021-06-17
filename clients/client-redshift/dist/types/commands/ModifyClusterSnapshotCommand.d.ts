import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyClusterSnapshotMessage, ModifyClusterSnapshotResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyClusterSnapshotCommandInput extends ModifyClusterSnapshotMessage {
}
export interface ModifyClusterSnapshotCommandOutput extends ModifyClusterSnapshotResult, __MetadataBearer {
}
/**
 * <p>Modifies the settings for a snapshot.</p>
 * 		       <p>This exanmple modifies the manual retention period setting for a cluster snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterSnapshotCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterSnapshotCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyClusterSnapshotCommand extends $Command<ModifyClusterSnapshotCommandInput, ModifyClusterSnapshotCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ModifyClusterSnapshotCommandInput;
    constructor(input: ModifyClusterSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyClusterSnapshotCommandInput, ModifyClusterSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
