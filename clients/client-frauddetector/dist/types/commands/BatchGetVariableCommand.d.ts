import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { BatchGetVariableRequest, BatchGetVariableResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchGetVariableCommandInput extends BatchGetVariableRequest {
}
export interface BatchGetVariableCommandOutput extends BatchGetVariableResult, __MetadataBearer {
}
/**
 * <p>Gets a batch of variables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, BatchGetVariableCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, BatchGetVariableCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new BatchGetVariableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetVariableCommandInput} for command's `input` shape.
 * @see {@link BatchGetVariableCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetVariableCommand extends $Command<BatchGetVariableCommandInput, BatchGetVariableCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: BatchGetVariableCommandInput;
    constructor(input: BatchGetVariableCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetVariableCommandInput, BatchGetVariableCommandOutput>;
    private serialize;
    private deserialize;
}
