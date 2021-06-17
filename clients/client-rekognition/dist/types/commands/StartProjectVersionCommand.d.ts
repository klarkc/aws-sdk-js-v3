import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { StartProjectVersionRequest, StartProjectVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartProjectVersionCommandInput extends StartProjectVersionRequest {
}
export interface StartProjectVersionCommandOutput extends StartProjectVersionResponse, __MetadataBearer {
}
/**
 * <p>Starts the running of the version of a model. Starting a model takes a while
 *       to complete. To check the current state of the model, use <a>DescribeProjectVersions</a>.</p>
 *          <p>Once the model is running, you can detect custom labels in new images by calling
 *          <a>DetectCustomLabels</a>.</p>
 *          <note>
 *             <p>You are charged for the amount of time that the model is running. To stop a running
 *       model, call <a>StopProjectVersion</a>.</p>
 *          </note>
 *          <p>This operation requires permissions to perform the
 *          <code>rekognition:StartProjectVersion</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StartProjectVersionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StartProjectVersionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new StartProjectVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartProjectVersionCommandInput} for command's `input` shape.
 * @see {@link StartProjectVersionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartProjectVersionCommand extends $Command<StartProjectVersionCommandInput, StartProjectVersionCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: StartProjectVersionCommandInput;
    constructor(input: StartProjectVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartProjectVersionCommandInput, StartProjectVersionCommandOutput>;
    private serialize;
    private deserialize;
}
