import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { StopProjectVersionRequest, StopProjectVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopProjectVersionCommandInput extends StopProjectVersionRequest {
}
export interface StopProjectVersionCommandOutput extends StopProjectVersionResponse, __MetadataBearer {
}
/**
 * <p>Stops a running model. The operation might take a while to complete. To
 *          check the current status, call <a>DescribeProjectVersions</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StopProjectVersionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StopProjectVersionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new StopProjectVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopProjectVersionCommandInput} for command's `input` shape.
 * @see {@link StopProjectVersionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopProjectVersionCommand extends $Command<StopProjectVersionCommandInput, StopProjectVersionCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: StopProjectVersionCommandInput;
    constructor(input: StopProjectVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopProjectVersionCommandInput, StopProjectVersionCommandOutput>;
    private serialize;
    private deserialize;
}
