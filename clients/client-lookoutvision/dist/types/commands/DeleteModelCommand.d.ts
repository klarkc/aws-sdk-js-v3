import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { DeleteModelRequest, DeleteModelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteModelCommandInput extends DeleteModelRequest {
}
export interface DeleteModelCommandOutput extends DeleteModelResponse, __MetadataBearer {
}
/**
 * <p>Deletes an Amazon Lookout for Vision model. You can't delete a running model. To stop a running model,
 *       use the <a>StopModel</a> operation.</p>
 *          <p>It might take a few seconds to delete a model. To determine if a model has been deleted, call
 *          <a>ListProjects</a> and check if the version of the model (<code>ModelVersion</code>) is in the
 *          <code>Models</code> array. </p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:DeleteModel</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, DeleteModelCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, DeleteModelCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new DeleteModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteModelCommandInput} for command's `input` shape.
 * @see {@link DeleteModelCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteModelCommand extends $Command<DeleteModelCommandInput, DeleteModelCommandOutput, LookoutVisionClientResolvedConfig> {
    readonly input: DeleteModelCommandInput;
    constructor(input: DeleteModelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutVisionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteModelCommandInput, DeleteModelCommandOutput>;
    private serialize;
    private deserialize;
}
