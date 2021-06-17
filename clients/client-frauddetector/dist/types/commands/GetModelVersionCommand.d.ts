import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetModelVersionRequest, GetModelVersionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetModelVersionCommandInput extends GetModelVersionRequest {
}
export interface GetModelVersionCommandOutput extends GetModelVersionResult, __MetadataBearer {
}
/**
 * <p>Gets the details of the specified model version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetModelVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetModelVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetModelVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetModelVersionCommandInput} for command's `input` shape.
 * @see {@link GetModelVersionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetModelVersionCommand extends $Command<GetModelVersionCommandInput, GetModelVersionCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: GetModelVersionCommandInput;
    constructor(input: GetModelVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetModelVersionCommandInput, GetModelVersionCommandOutput>;
    private serialize;
    private deserialize;
}
