import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteClusterSubnetGroupMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteClusterSubnetGroupCommandInput extends DeleteClusterSubnetGroupMessage {
}
export interface DeleteClusterSubnetGroupCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified cluster subnet group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteClusterSubnetGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteClusterSubnetGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteClusterSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClusterSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteClusterSubnetGroupCommand extends $Command<DeleteClusterSubnetGroupCommandInput, DeleteClusterSubnetGroupCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DeleteClusterSubnetGroupCommandInput;
    constructor(input: DeleteClusterSubnetGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteClusterSubnetGroupCommandInput, DeleteClusterSubnetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
