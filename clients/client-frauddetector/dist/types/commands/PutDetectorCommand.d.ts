import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { PutDetectorRequest, PutDetectorResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutDetectorCommandInput extends PutDetectorRequest {
}
export interface PutDetectorCommandOutput extends PutDetectorResult, __MetadataBearer {
}
/**
 * <p>Creates or updates a detector. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, PutDetectorCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, PutDetectorCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new PutDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDetectorCommandInput} for command's `input` shape.
 * @see {@link PutDetectorCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutDetectorCommand extends $Command<PutDetectorCommandInput, PutDetectorCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: PutDetectorCommandInput;
    constructor(input: PutDetectorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutDetectorCommandInput, PutDetectorCommandOutput>;
    private serialize;
    private deserialize;
}
