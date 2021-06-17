import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { BatchCreateVariableRequest, BatchCreateVariableResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchCreateVariableCommandInput extends BatchCreateVariableRequest {
}
export interface BatchCreateVariableCommandOutput extends BatchCreateVariableResult, __MetadataBearer {
}
/**
 * <p>Creates a batch of variables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, BatchCreateVariableCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, BatchCreateVariableCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new BatchCreateVariableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchCreateVariableCommandInput} for command's `input` shape.
 * @see {@link BatchCreateVariableCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchCreateVariableCommand extends $Command<BatchCreateVariableCommandInput, BatchCreateVariableCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: BatchCreateVariableCommandInput;
    constructor(input: BatchCreateVariableCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchCreateVariableCommandInput, BatchCreateVariableCommandOutput>;
    private serialize;
    private deserialize;
}
