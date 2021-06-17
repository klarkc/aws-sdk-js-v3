import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { PutOutcomeRequest, PutOutcomeResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutOutcomeCommandInput extends PutOutcomeRequest {
}
export interface PutOutcomeCommandOutput extends PutOutcomeResult, __MetadataBearer {
}
/**
 * <p>Creates or updates an outcome. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, PutOutcomeCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, PutOutcomeCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new PutOutcomeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutOutcomeCommandInput} for command's `input` shape.
 * @see {@link PutOutcomeCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutOutcomeCommand extends $Command<PutOutcomeCommandInput, PutOutcomeCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: PutOutcomeCommandInput;
    constructor(input: PutOutcomeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutOutcomeCommandInput, PutOutcomeCommandOutput>;
    private serialize;
    private deserialize;
}
