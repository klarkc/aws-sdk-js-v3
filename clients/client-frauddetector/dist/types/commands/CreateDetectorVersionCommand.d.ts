import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { CreateDetectorVersionRequest, CreateDetectorVersionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDetectorVersionCommandInput extends CreateDetectorVersionRequest {
}
export interface CreateDetectorVersionCommandOutput extends CreateDetectorVersionResult, __MetadataBearer {
}
/**
 * <p>Creates a detector version. The detector version starts in a <code>DRAFT</code> status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CreateDetectorVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CreateDetectorVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new CreateDetectorVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDetectorVersionCommandInput} for command's `input` shape.
 * @see {@link CreateDetectorVersionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDetectorVersionCommand extends $Command<CreateDetectorVersionCommandInput, CreateDetectorVersionCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: CreateDetectorVersionCommandInput;
    constructor(input: CreateDetectorVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDetectorVersionCommandInput, CreateDetectorVersionCommandOutput>;
    private serialize;
    private deserialize;
}
