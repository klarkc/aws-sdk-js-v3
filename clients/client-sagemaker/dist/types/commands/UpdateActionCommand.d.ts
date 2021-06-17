import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateActionRequest, UpdateActionResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateActionCommandInput extends UpdateActionRequest {
}
export interface UpdateActionCommandOutput extends UpdateActionResponse, __MetadataBearer {
}
/**
 * <p>Updates an action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateActionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateActionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateActionCommandInput} for command's `input` shape.
 * @see {@link UpdateActionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateActionCommand extends $Command<UpdateActionCommandInput, UpdateActionCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateActionCommandInput;
    constructor(input: UpdateActionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateActionCommandInput, UpdateActionCommandOutput>;
    private serialize;
    private deserialize;
}
