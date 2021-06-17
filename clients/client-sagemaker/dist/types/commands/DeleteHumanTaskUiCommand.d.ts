import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteHumanTaskUiRequest, DeleteHumanTaskUiResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteHumanTaskUiCommandInput extends DeleteHumanTaskUiRequest {
}
export interface DeleteHumanTaskUiCommandOutput extends DeleteHumanTaskUiResponse, __MetadataBearer {
}
/**
 * <p>Use this operation to delete a human task user interface (worker task template).</p>
 *          <p>
 *       To see a list of human task user interfaces
 *       (work task templates) in your account, use .
 *       When you delete a worker task template, it no longer appears when you call <code>ListHumanTaskUis</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteHumanTaskUiCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteHumanTaskUiCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteHumanTaskUiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHumanTaskUiCommandInput} for command's `input` shape.
 * @see {@link DeleteHumanTaskUiCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteHumanTaskUiCommand extends $Command<DeleteHumanTaskUiCommandInput, DeleteHumanTaskUiCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteHumanTaskUiCommandInput;
    constructor(input: DeleteHumanTaskUiCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteHumanTaskUiCommandInput, DeleteHumanTaskUiCommandOutput>;
    private serialize;
    private deserialize;
}
