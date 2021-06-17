import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { UpdateClusterRequest, UpdateClusterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateClusterCommandInput extends UpdateClusterRequest {
}
export interface UpdateClusterCommandOutput extends UpdateClusterResponse, __MetadataBearer {
}
/**
 * <p>Modifies the settings for a DAX cluster. You can use this action to change one or
 *             more cluster configuration parameters by specifying the parameters and the new
 *             values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, UpdateClusterCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, UpdateClusterCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new UpdateClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateClusterCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateClusterCommand extends $Command<UpdateClusterCommandInput, UpdateClusterCommandOutput, DAXClientResolvedConfig> {
    readonly input: UpdateClusterCommandInput;
    constructor(input: UpdateClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateClusterCommandInput, UpdateClusterCommandOutput>;
    private serialize;
    private deserialize;
}
