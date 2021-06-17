import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { DeleteJobRequest, DeleteJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteJobCommandInput extends DeleteJobRequest {
}
export interface DeleteJobCommandOutput extends DeleteJobResponse, __MetadataBearer {
}
/**
 * <p>Deletes a single Job by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DeleteJobCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DeleteJobCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new DeleteJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteJobCommandInput} for command's `input` shape.
 * @see {@link DeleteJobCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteJobCommand extends $Command<DeleteJobCommandInput, DeleteJobCommandOutput, MgnClientResolvedConfig> {
    readonly input: DeleteJobCommandInput;
    constructor(input: DeleteJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MgnClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteJobCommandInput, DeleteJobCommandOutput>;
    private serialize;
    private deserialize;
}
