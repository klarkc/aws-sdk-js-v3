import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DeleteProjectVersionRequest, DeleteProjectVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteProjectVersionCommandInput extends DeleteProjectVersionRequest {
}
export interface DeleteProjectVersionCommandOutput extends DeleteProjectVersionResponse, __MetadataBearer {
}
/**
 * <p>Deletes an Amazon Rekognition Custom Labels model.  </p>
 *          <p>You can't delete a model if it is running or if it is training.
 *           To check the status of a model, use the <code>Status</code> field returned
 *          from <a>DescribeProjectVersions</a>.
 *          To stop a running model call <a>StopProjectVersion</a>. If the model
 *       is training, wait until it finishes.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>rekognition:DeleteProjectVersion</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DeleteProjectVersionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DeleteProjectVersionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new DeleteProjectVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProjectVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteProjectVersionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteProjectVersionCommand extends $Command<DeleteProjectVersionCommandInput, DeleteProjectVersionCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: DeleteProjectVersionCommandInput;
    constructor(input: DeleteProjectVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProjectVersionCommandInput, DeleteProjectVersionCommandOutput>;
    private serialize;
    private deserialize;
}
