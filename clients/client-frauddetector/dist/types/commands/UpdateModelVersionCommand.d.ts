import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { UpdateModelVersionRequest, UpdateModelVersionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateModelVersionCommandInput extends UpdateModelVersionRequest {
}
export interface UpdateModelVersionCommandOutput extends UpdateModelVersionResult, __MetadataBearer {
}
/**
 * <p>Updates a model version. Updating a model version retrains an existing model version using updated training data and produces a new minor version of the model. You can update the training data set location and data access role attributes using this action. This action creates and trains a new minor version of the model, for example version 1.01, 1.02, 1.03.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateModelVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateModelVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new UpdateModelVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateModelVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateModelVersionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateModelVersionCommand extends $Command<UpdateModelVersionCommandInput, UpdateModelVersionCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: UpdateModelVersionCommandInput;
    constructor(input: UpdateModelVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateModelVersionCommandInput, UpdateModelVersionCommandOutput>;
    private serialize;
    private deserialize;
}
