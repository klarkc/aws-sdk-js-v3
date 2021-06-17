import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { IncreaseReplicationFactorRequest, IncreaseReplicationFactorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface IncreaseReplicationFactorCommandInput extends IncreaseReplicationFactorRequest {
}
export interface IncreaseReplicationFactorCommandOutput extends IncreaseReplicationFactorResponse, __MetadataBearer {
}
/**
 * <p>Adds one or more nodes to a DAX cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, IncreaseReplicationFactorCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, IncreaseReplicationFactorCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new IncreaseReplicationFactorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link IncreaseReplicationFactorCommandInput} for command's `input` shape.
 * @see {@link IncreaseReplicationFactorCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class IncreaseReplicationFactorCommand extends $Command<IncreaseReplicationFactorCommandInput, IncreaseReplicationFactorCommandOutput, DAXClientResolvedConfig> {
    readonly input: IncreaseReplicationFactorCommandInput;
    constructor(input: IncreaseReplicationFactorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<IncreaseReplicationFactorCommandInput, IncreaseReplicationFactorCommandOutput>;
    private serialize;
    private deserialize;
}
