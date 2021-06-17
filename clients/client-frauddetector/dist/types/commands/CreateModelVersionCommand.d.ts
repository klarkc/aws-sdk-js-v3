import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { CreateModelVersionRequest, CreateModelVersionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateModelVersionCommandInput extends CreateModelVersionRequest {
}
export interface CreateModelVersionCommandOutput extends CreateModelVersionResult, __MetadataBearer {
}
/**
 * <p>Creates a version of the model using the specified model type and model id.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CreateModelVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CreateModelVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new CreateModelVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateModelVersionCommandInput} for command's `input` shape.
 * @see {@link CreateModelVersionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateModelVersionCommand extends $Command<CreateModelVersionCommandInput, CreateModelVersionCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: CreateModelVersionCommandInput;
    constructor(input: CreateModelVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateModelVersionCommandInput, CreateModelVersionCommandOutput>;
    private serialize;
    private deserialize;
}
