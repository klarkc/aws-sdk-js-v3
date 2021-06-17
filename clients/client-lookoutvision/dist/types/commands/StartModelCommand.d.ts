import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { StartModelRequest, StartModelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartModelCommandInput extends StartModelRequest {
}
export interface StartModelCommandOutput extends StartModelResponse, __MetadataBearer {
}
/**
 * <p>Starts the running of the version of an Amazon Lookout for Vision model. Starting a model takes a while
 *          to complete. To check the current state of the model, use <a>DescribeModel</a>.</p>
 *          <p>A model is ready to use when its status is <code>HOSTED</code>.</p>
 *          <p>Once the model is running, you can detect custom labels in new images by calling
 *          <a>DetectAnomalies</a>.</p>
 *          <note>
 *             <p>You are charged for the amount of time that the model is running. To stop a running
 *          model, call <a>StopModel</a>.</p>
 *          </note>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:StartModel</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, StartModelCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, StartModelCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new StartModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartModelCommandInput} for command's `input` shape.
 * @see {@link StartModelCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartModelCommand extends $Command<StartModelCommandInput, StartModelCommandOutput, LookoutVisionClientResolvedConfig> {
    readonly input: StartModelCommandInput;
    constructor(input: StartModelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutVisionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartModelCommandInput, StartModelCommandOutput>;
    private serialize;
    private deserialize;
}
