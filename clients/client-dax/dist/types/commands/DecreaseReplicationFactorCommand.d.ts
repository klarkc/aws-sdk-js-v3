import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { DecreaseReplicationFactorRequest, DecreaseReplicationFactorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DecreaseReplicationFactorCommandInput extends DecreaseReplicationFactorRequest {
}
export interface DecreaseReplicationFactorCommandOutput extends DecreaseReplicationFactorResponse, __MetadataBearer {
}
/**
 * <p>Removes one or more nodes from a DAX cluster.</p>
 *         <note>
 *             <p>You cannot use <code>DecreaseReplicationFactor</code> to remove the last node in a DAX cluster. If you need to do this, use <code>DeleteCluster</code> instead.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DecreaseReplicationFactorCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DecreaseReplicationFactorCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new DecreaseReplicationFactorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DecreaseReplicationFactorCommandInput} for command's `input` shape.
 * @see {@link DecreaseReplicationFactorCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DecreaseReplicationFactorCommand extends $Command<DecreaseReplicationFactorCommandInput, DecreaseReplicationFactorCommandOutput, DAXClientResolvedConfig> {
    readonly input: DecreaseReplicationFactorCommandInput;
    constructor(input: DecreaseReplicationFactorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DecreaseReplicationFactorCommandInput, DecreaseReplicationFactorCommandOutput>;
    private serialize;
    private deserialize;
}
