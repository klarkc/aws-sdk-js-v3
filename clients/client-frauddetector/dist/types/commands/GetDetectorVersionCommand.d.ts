import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetDetectorVersionRequest, GetDetectorVersionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDetectorVersionCommandInput extends GetDetectorVersionRequest {
}
export interface GetDetectorVersionCommandOutput extends GetDetectorVersionResult, __MetadataBearer {
}
/**
 * <p>Gets a particular detector version. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetDetectorVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetDetectorVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetDetectorVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDetectorVersionCommandInput} for command's `input` shape.
 * @see {@link GetDetectorVersionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDetectorVersionCommand extends $Command<GetDetectorVersionCommandInput, GetDetectorVersionCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: GetDetectorVersionCommandInput;
    constructor(input: GetDetectorVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDetectorVersionCommandInput, GetDetectorVersionCommandOutput>;
    private serialize;
    private deserialize;
}
