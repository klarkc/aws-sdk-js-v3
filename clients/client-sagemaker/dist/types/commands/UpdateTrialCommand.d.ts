import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateTrialRequest, UpdateTrialResponse } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateTrialCommandInput extends UpdateTrialRequest {
}
export interface UpdateTrialCommandOutput extends UpdateTrialResponse, __MetadataBearer {
}
/**
 * <p>Updates the display name of a trial.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateTrialCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateTrialCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateTrialCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTrialCommandInput} for command's `input` shape.
 * @see {@link UpdateTrialCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateTrialCommand extends $Command<UpdateTrialCommandInput, UpdateTrialCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateTrialCommandInput;
    constructor(input: UpdateTrialCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTrialCommandInput, UpdateTrialCommandOutput>;
    private serialize;
    private deserialize;
}
