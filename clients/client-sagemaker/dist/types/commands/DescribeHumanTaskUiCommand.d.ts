import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeHumanTaskUiRequest, DescribeHumanTaskUiResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeHumanTaskUiCommandInput extends DescribeHumanTaskUiRequest {
}
export interface DescribeHumanTaskUiCommandOutput extends DescribeHumanTaskUiResponse, __MetadataBearer {
}
/**
 * <p>Returns information about the requested human task user interface (worker task template).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeHumanTaskUiCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeHumanTaskUiCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeHumanTaskUiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHumanTaskUiCommandInput} for command's `input` shape.
 * @see {@link DescribeHumanTaskUiCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeHumanTaskUiCommand extends $Command<DescribeHumanTaskUiCommandInput, DescribeHumanTaskUiCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeHumanTaskUiCommandInput;
    constructor(input: DescribeHumanTaskUiCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHumanTaskUiCommandInput, DescribeHumanTaskUiCommandOutput>;
    private serialize;
    private deserialize;
}
