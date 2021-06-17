import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { UpdateResourceRequest, UpdateResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateResourceCommandInput extends UpdateResourceRequest {
}
export interface UpdateResourceCommandOutput extends UpdateResourceResponse, __MetadataBearer {
}
/**
 * <p>Updates data for the resource. To have the latest information, it must be preceded by
 *          a <a>DescribeResource</a> call. The dataset in the request should be the one
 *          expected when performing another <code>DescribeResource</code> call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, UpdateResourceCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, UpdateResourceCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new UpdateResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourceCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateResourceCommand extends $Command<UpdateResourceCommandInput, UpdateResourceCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: UpdateResourceCommandInput;
    constructor(input: UpdateResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateResourceCommandInput, UpdateResourceCommandOutput>;
    private serialize;
    private deserialize;
}
