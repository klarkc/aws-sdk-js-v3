import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateDataSetRequest, UpdateDataSetResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDataSetCommandInput extends UpdateDataSetRequest {
}
export interface UpdateDataSetCommandOutput extends UpdateDataSetResponse, __MetadataBearer {
}
/**
 * <p>Updates a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDataSetCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateDataSetCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateDataSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDataSetCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSetCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDataSetCommand extends $Command<UpdateDataSetCommandInput, UpdateDataSetCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: UpdateDataSetCommandInput;
    constructor(input: UpdateDataSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDataSetCommandInput, UpdateDataSetCommandOutput>;
    private serialize;
    private deserialize;
}
